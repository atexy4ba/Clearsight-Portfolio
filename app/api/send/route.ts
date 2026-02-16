import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Single clean POST handler for sending contact emails via Gmail SMTP
// Env vars: GMAIL_USER, GMAIL_PASS (app password recommended)
// Optional: CONTACT_FROM, CONTACT_TO

function createTransporter(secure: boolean, port: number, user: string, pass: string) {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port,
    secure,
    auth: { user, pass },
  })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      companyName,
      contactName,
      email,
      phone,
      city,
      objective,
      videoCount,
      duration,
      formats,
      referenceLinks,
      deliveryDeadline,
      budget,
    } = body || {}

    if (!contactName && !companyName) return NextResponse.json({ error: "Missing contactName or companyName" }, { status: 400 })
    if (!phone) return NextResponse.json({ error: "Missing phone" }, { status: 400 })

    const user = process.env.GMAIL_USER || process.env.SMTP_USER
    const rawPass = process.env.GMAIL_PASS || process.env.SMTP_PASS
    const pass = String(rawPass || "").trim()

    if (!user || !pass) return NextResponse.json({ error: "Missing Gmail credentials" }, { status: 500 })

    const fromAddress = process.env.CONTACT_FROM || String(user)
    const toAddress = process.env.CONTACT_TO || String(user)

    const formatsList = Array.isArray(formats) ? formats.join(", ") : (formats ?? "Non spécifié")

    const subject = `Nouveau Brief - ${companyName || "Sans nom"} (${contactName || "Sans contact"})`

    const text = `BRIEF DE PRODUCTION VIDÉO\n\nEntreprise/Marque: ${companyName || "Non renseigné"}\nContact: ${contactName || "Non renseigné"}\nEmail: ${email || "Non renseigné"}\nTéléphone: ${phone || "Non renseigné"}\nVille: ${city || "Non renseignée"}\nObjectif: ${objective || "Non renseigné"}\nNombre de vidéos: ${videoCount || "Non renseigné"}\nDurée: ${duration || "Non renseignée"}\nFormats: ${formatsList}\nRéférences: ${referenceLinks || "Aucune"}\nDeadline: ${deliveryDeadline || "Non renseignée"}\nBudget: ${budget || "Non renseigné"}`

    const html = `<h3>Nouveau Brief de Production Vidéo</h3>
      <p><strong>Entreprise:</strong> ${companyName || "Non renseigné"}</p>
      <p><strong>Contact:</strong> ${contactName || "Non renseigné"}</p>
      <p><strong>Email:</strong> ${email || "Non renseigné"}</p>
      <p><strong>Téléphone:</strong> ${phone || "Non renseigné"}</p>
      <p><strong>Ville:</strong> ${city || "Non renseignée"}</p>
      <p><strong>Objectif:</strong> ${objective || "Non renseigné"}</p>
      <p><strong>Nombre de vidéos:</strong> ${videoCount || "Non renseigné"}</p>
      <p><strong>Durée:</strong> ${duration || "Non renseignée"}</p>
      <p><strong>Formats:</strong> ${formatsList}</p>
      <p><strong>Références:</strong> ${referenceLinks || "Aucune"}</p>
      <p><strong>Deadline:</strong> ${deliveryDeadline || "Non renseignée"}</p>
      <p><strong>Budget:</strong> ${budget || "Non renseigné"}</p>`

    const mailOptions = { from: fromAddress, to: toAddress, subject, text, html, replyTo: email || undefined }

    try {
      const transporter = createTransporter(true, 465, String(user), pass)
      await transporter.verify()
      await transporter.sendMail(mailOptions)
    } catch (e1) {
      console.log("Port 465 failed:", String((e1 as Error)?.message ?? e1))
      try {
        const transporter = createTransporter(false, 587, String(user), pass)
        await transporter.verify()
        await transporter.sendMail(mailOptions)
      } catch (e2) {
        console.log("Port 587 failed:", String((e2 as Error)?.message ?? e2))
        return NextResponse.json({ error: "SMTP delivery failed", detail: String((e2 as Error)?.message ?? (e1 as Error)?.message ?? "") }, { status: 500 })
      }
    }

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: "Échec de l'envoi de l'email", detail: String((err as Error)?.message ?? "") }, { status: 500 })
  }
}