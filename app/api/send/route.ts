import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  project: z.string().min(1).max(100),
  message: z.string().min(1).max(5000),
})

const createTransporter = (secure: boolean, port: number, user: string, pass: string) =>
  nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure,
    port,
    auth: { user, pass },
  })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const { name, email, project, message } = parsed.data
    const user = process.env.GMAIL_USER || process.env.SMTP_USER
    const rawPass = process.env.GMAIL_PASS || process.env.SMTP_PASS
    const pass = String(rawPass || "").replace(/\s+/g, "")

    if (!user || !pass) {
      const missing = [
        !user ? "GMAIL_USER" : null,
        !pass ? "GMAIL_PASS" : null,
      ].filter(Boolean)
      return NextResponse.json(
        { error: "Missing Gmail credentials", detail: `${missing.join("/")} manquant(s)` },
        { status: 500 },
      )
    }

    if (pass.length !== 16) {
      return NextResponse.json(
        { error: "Invalid Gmail credentials", detail: "GMAIL_PASS doit contenir 16 caractères" },
        { status: 500 },
      )
    }

    const fromAddress = process.env.CONTACT_FROM || String(user)
    const toAddress = process.env.CONTACT_TO || String(user)

    const mailOptions = {
      from: fromAddress,
      to: toAddress,
      subject: `Nouveau projet de ${name} (${project})`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\nType de projet: ${project}\n\n${message}`,
      html: `<h2>Nouveau message du formulaire de contact</h2>
<p><strong>Nom:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Type de projet:</strong> ${project}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>`,
    }

    try {
      const transporter = createTransporter(true, 465, String(user), pass)
      await transporter.verify()
      await transporter.sendMail(mailOptions)
    } catch (err) {
      try {
        const transporter = createTransporter(false, 587, String(user), pass)
        await transporter.verify()
        await transporter.sendMail(mailOptions)
      } catch (err2) {
        return NextResponse.json(
          { error: "SMTP delivery failed", detail: String((err2 as Error)?.message ?? (err as Error)?.message ?? "") },
          { status: 500 },
        )
      }
    }

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "Échec de l'envoi de l'email", detail: String((error as Error)?.message ?? "") },
      { status: 500 },
    )
  }
}
