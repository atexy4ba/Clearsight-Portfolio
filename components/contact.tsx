"use client"

import type React from "react"
import { Mail, Phone, MapPin, Send, Loader2, Check } from "lucide-react"
import { type FormEvent, useState } from "react"
import { toast } from "sonner"

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    website: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    objective: "",
    videoCount: "",
    duration: "",
    formats: [] as string[],
    sourceFiles: "",
    scriptHandling: "",
    intervenants: [] as string[],
    location: "",
    shootDate: "",
    droneNeeded: "",
    hasReference: "",
    referenceLinks: "",
    revisionPolicy: "",
    deliveryDeadline: "",
    budget: "",
    adminDocuments: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => null)
        throw new Error(err?.detail || err?.error || "Erreur serveur")
      }

      setSubmitted(true)
      toast.success("Brief envoyé avec succès !")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Une erreur est survenue")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckbox = (field: string, value: string) => {
    setFormData((prev) => {
      const current = (prev as any)[field] as string[]
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [field]: updated }
    })
  }

  if (submitted) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Brief envoyé !</h2>
          <p className="text-lg text-muted-foreground">Nous vous recontacterons sous 24-48h.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brief de Production Vidéo</h1>
          <p className="text-lg text-muted-foreground">et demande de Devis</p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Afin de vous fournir une estimation précise et d'éviter les surprises, merci de prendre 2 minutes pour détailler vos besoins. Plus c'est précis, plus le devis sera juste.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Section 1: Identité & Contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-border pb-2">1. Identité & Contact</h2>
            <p className="text-muted-foreground">Parlez-nous un peu de vous.</p>

            <div>
              <label className="block font-semibold mb-2">Quel est le nom de votre entreprise ou marque ? <span className="text-red-500">*</span></label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Secteur d'activité : <span className="text-red-500">*</span></label>
              <input type="text" name="sector" value={formData.sector} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Lien vers votre site web ou page Instagram/Facebook actuelle :</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" placeholder="https://..." />
            </div>

            <div>
              <label className="block font-semibold mb-2">Nom et Prénom de la personne à contacter : <span className="text-red-500">*</span></label>
              <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Adresse Email :</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Numéro de téléphone (Whatsapp) : <span className="text-red-500">*</span></label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Votre Ville : <span className="text-red-500">*</span></label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>
          </div>

          {/* Section 2: Définition du Projet */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-border pb-2">2. Définition du Projet & Formats</h2>

            <div>
              <label className="block font-semibold mb-4">Quel est l'objectif principal de cette vidéo ? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                {[
                  "Vendre un produit ou service",
                  "Notoriété de marque (Branding)",
                  "Couverture d'événement",
                  "Vidéo Corporate / Interview",
                  "Contenu réseaux sociaux (Snack content)",
                  "Eduquer ou expliquer (Tutoriel/Présentation)",
                  "Autre"
                ].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                    <input type="radio" name="objective" value={opt} checked={formData.objective === opt} onChange={handleChange} required className="w-4 h-4" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Nombre exact de vidéos souhaitées : <span className="text-red-500">*</span></label>
              <input type="text" name="videoCount" value={formData.videoCount} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Durée approximative de chaque vidéo : <span className="text-red-500">*</span></label>
              <input type="text" name="duration" value={formData.duration} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" placeholder="ex: 30 secondes, 2-3 minutes" />
            </div>

            <div>
              <label className="block font-semibold mb-4">Formats de livraison requis (Cochez tout ce qui s'applique) : <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                {[
                  "9:16 (Vertical - Instagram Reels/TikTok/Shorts)",
                  "16:9 (Horizontal - YouTube/TV/Site Web)",
                  "4:5 (Carré/Portrait - Feed Facebook/LinkedIn)"
                ].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                    <input type="checkbox" checked={formData.formats.includes(opt)} onChange={() => handleCheckbox("formats", opt)} className="w-4 h-4 rounded" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-4">Avez-vous besoin des fichiers sources (Rushs bruts) ? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="sourceFiles" value="A" checked={formData.sourceFiles === "A"} onChange={handleChange} required className="w-4 h-4" />
                  <span>A - Non, la vidéo finale montée suffit (Standard)</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="sourceFiles" value="B" checked={formData.sourceFiles === "B"} onChange={handleChange} className="w-4 h-4" />
                  <span>B - Oui, je veux récupérer les images brutes (Option payante supplémentaire)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 3: Direction Artistique */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-border pb-2">3. Direction Artistique & Conception</h2>

            <div>
              <label className="block font-semibold mb-4">Qui s'occupe de la rédaction du script/scénario ? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="scriptHandling" value="A" checked={formData.scriptHandling === "A"} onChange={handleChange} required className="w-4 h-4" />
                  <span>A - Le client fournit le script validé</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="scriptHandling" value="B" checked={formData.scriptHandling === "B"} onChange={handleChange} className="w-4 h-4" />
                  <span>B - Le prestataire propose le concept et le script</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-4">Avez-vous besoin d'intervenants spécifiques ? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                {[
                  "Non, nous utiliserons nos équipes/locaux",
                  "Oui, besoin d'une voix-off professionnelle",
                  "Oui, besoin d'acteurs ou de modèles",
                  "Oui, besoin d'un présentateur"
                ].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                    <input type="checkbox" checked={formData.intervenants.includes(opt)} onChange={() => handleCheckbox("intervenants", opt)} className="w-4 h-4 rounded" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Logistique */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-border pb-2">4. Logistique de Tournage & Technique</h2>

            <div>
              <label className="block font-semibold mb-2">Lieu du tournage (Ville/Wilaya) : <span className="text-red-500">*</span></label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Date de tournage souhaitée ou période idéale :</label>
              <input type="text" name="shootDate" value={formData.shootDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-4">Souhaitez-vous des prises de vue aériennes (Drone) ? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="droneNeeded" value="A" checked={formData.droneNeeded === "A"} onChange={handleChange} required className="w-4 h-4" />
                  <span>A - Oui</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="droneNeeded" value="B" checked={formData.droneNeeded === "B"} onChange={handleChange} className="w-4 h-4" />
                  <span>B - Non</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 5: Post-Production */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-border pb-2">5. Post-Production & Finalisation</h2>

            <div>
              <label className="block font-semibold mb-4">Avez-vous une référence visuelle (Lien YouTube/Insta/TikTok) pour le style de montage souhaité ? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="hasReference" value="A" checked={formData.hasReference === "A"} onChange={handleChange} required className="w-4 h-4" />
                  <span>A - Oui</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="hasReference" value="B" checked={formData.hasReference === "B"} onChange={handleChange} className="w-4 h-4" />
                  <span>B - Non</span>
                </label>
              </div>
            </div>

            {formData.hasReference === "A" && (
              <div>
                <label className="block font-semibold mb-2">Partagez vos liens de référence :</label>
                <textarea name="referenceLinks" value={formData.referenceLinks} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none resize-none" />
              </div>
            )}

            <div className="p-4 bg-card/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Politique de révision :</strong> Le devis inclura par défaut 3 allers-retours de modifications (ajustements mineurs sur le montage ou les textes). Au-delà, ou pour des changements structurels majeurs, une tarification horaire s'appliquera.
              </p>
              <label className="block font-semibold mb-2">Acceptez-vous ces conditions de révision ?</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="revisionPolicy" value="A" checked={formData.revisionPolicy === "A"} onChange={handleChange} className="w-4 h-4" />
                  <span>A - Oui</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                  <input type="radio" name="revisionPolicy" value="B" checked={formData.revisionPolicy === "B"} onChange={handleChange} className="w-4 h-4" />
                  <span>B - Non</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 6: Budget */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-border pb-2">6. Budget & Cadre Administratif</h2>

            <div>
              <label className="block font-semibold mb-2">Quelle est la date limite pour la livraison finale de la vidéo ? <span className="text-red-500">*</span></label>
              <input type="date" name="deliveryDeadline" value={formData.deliveryDeadline} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" />
            </div>

            <div>
              <label className="block font-semibold mb-4">Quel est votre budget estimatif pour ce projet ? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                {[
                  { value: "A", label: "A - Moins de 50 000 DA" },
                  { value: "B", label: "B - 50 000 DA - 100 000 DA" },
                  { value: "C", label: "C - 100 000 DA - 200 000 DA" },
                  { value: "D", label: "D - Plus que 200 000 DA" }
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card/50 cursor-pointer">
                    <input type="radio" name="budget" value={opt.value} checked={formData.budget === opt.value} onChange={handleChange} required className="w-4 h-4" />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Avez-vous besoin d'une facture proforma ou de documents administratifs spécifiques avant de démarrer ? <span className="text-red-500">*</span></label>
              <input type="text" name="adminDocuments" value={formData.adminDocuments} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none" placeholder="Oui/Non - Précisez si besoin" />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="w-6 h-6" />
                Envoyer
              </>
            )}
          </button>
        </form>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Clearsight Studios. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
