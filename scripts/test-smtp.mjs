import fs from "fs"
import path from "path"
import nodemailer from "nodemailer"

function loadEnv(file) {
  const p = path.resolve(file)
  if (!fs.existsSync(p)) return {}
  return fs.readFileSync(p, "utf8").split(/\r?\n/).reduce((acc, line) => {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/)
    if (!m) return acc
    let [, key, val] = m
    // strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    acc[key] = val
    return acc
  }, {})
}

async function tryVerify({ user, pass }) {
  const createTransporter = (secure, port) =>
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure,
      port,
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
    })

  console.log(`Testing SMTP for ${user} (password length ${String(pass).length})`)

  try {
    const t1 = createTransporter(true, 465)
    await t1.verify()
    console.log("Connection OK on port 465 (SSL/TLS)")
    return { ok: true, port: 465 }
  } catch (e1) {
    console.warn("Port 465 failed:", e1.message || e1)
    try {
      const t2 = createTransporter(false, 587)
      await t2.verify()
      console.log("Connection OK on port 587 (STARTTLS)")
      return { ok: true, port: 587 }
    } catch (e2) {
      console.error("Port 587 failed:", e2.message || e2)
      return { ok: false, error: String((e2 && e2.message) || e2 || e1) }
    }
  }
}

;(async () => {
  try {
    const repoRoot = path.resolve(new URL(import.meta.url).pathname.replace(/^[A-Za-z]:/i, function(m){return m}))
    // assume script runs from repo root (Windows path handling above)
    const envPath = path.resolve(process.cwd(), ".env.local")
    const env = loadEnv(envPath)

    const user = env.GMAIL_USER || env.SMTP_USER || process.env.GMAIL_USER || process.env.SMTP_USER
    const rawPass = env.GMAIL_PASS || env.SMTP_PASS || process.env.GMAIL_PASS || process.env.SMTP_PASS
    const pass = String(rawPass || "").replace(/\s+/g, "")

    if (!user || !pass) {
      console.error("Missing credentials. Set GMAIL_USER and GMAIL_PASS in .env.local or env")
      process.exitCode = 2
      return
    }

    const res = await tryVerify({ user, pass })
    if (!res.ok) {
      console.error("SMTP verification failed:", res.error)
      console.error("Common causes: wrong password, Gmail blocking sign-in, app password not created, or outbound SMTP blocked by host.")
      process.exitCode = 3
    }
  } catch (err) {
    console.error(err)
    process.exitCode = 4
  }
})()
