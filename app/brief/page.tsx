"use client"

import { Check, ChevronLeft, ChevronRight, Send } from "lucide-react"
import { type FormEvent, useMemo, useState } from "react"
import { toast } from "sonner"
import Navigation from "@/components/navigation"

const steps = [
  {
    title: "Identité & Contact",
    description: "Parlez-nous de vous.",
  },
  {
    title: "Projet & Formats",
    description: "Objectif et livrables.",
  },
  {
    title: "Direction Artistique",
    description: "Script et intervenants.",
  },
  {
    title: "Logistique",
    description: "Tournage et technique.",
  },
  {
    title: "Post-Production",
    description: "Révisions et style.",
  },
  {
    title: "Budget",
    description: "Cadre estimatif.",
  },
]

const objectives = [
  "Vendre un produit ou service",
  "Notoriété de marque (Branding)",
  "Couverture d'événement",
  "Vidéo Corporate / Interview",
  "Contenu réseaux sociaux (Snack content)",
  "Éduquer ou expliquer (Tutoriel/Présentation)",
  "Autre",
]

const formats = [
  "9:16 (Vertical - Instagram Reels/TikTok/Shorts)",
  "16:9 (Horizontal - YouTube/TV/Site Web)",
  "4:5 (Carré/Portrait - Feed Facebook/LinkedIn)",
]

const scriptOptions = ["Le client fournit le script validé", "Le prestataire propose le concept et le script"]

const talentOptions = [
  "Aucun besoin",
  "Voix-off professionnelle",
  "Acteurs ou modèles",
  "Présentateur",
]

const budgets = [
  "Moins de 50 000 DA",
  "50 000 DA - 100 000 DA",
  "100 000 DA - 200 000 DA",
  "Plus que 200 000 DA",
]

const inputClassName =
  "w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors disabled:opacity-50"

export default function BriefPage() {
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    objective: "",
    formats: [] as string[],
    rushes: "",
    script: "",
    talents: [] as string[],
    drone: "",
    hasReference: "",
    referenceLink: "",
    acceptRevisions: "",
    budget: "",
  })

  const totalSteps = steps.length

  const stepProgress = useMemo(() => ((step + 1) / totalSteps) * 100, [step, totalSteps])

  const isStepValid = (index: number) => {
    if (index === 0) {
      return formData.fullName.trim().length > 1 && formData.email.includes("@")
    }
    if (index === 1) {
      return formData.objective && formData.formats.length > 0 && formData.rushes
    }
    if (index === 2) {
      return formData.script && formData.talents.length > 0
    }
    if (index === 3) {
      return formData.drone
    }
    if (index === 4) {
      if (!formData.acceptRevisions) return false
      if (formData.hasReference === "Oui") {
        return formData.referenceLink.trim().length > 3
      }
      return formData.hasReference === "Non"
    }
    if (index === 5) {
      return formData.budget
    }
    return false
  }

  const toggleArrayValue = (key: "formats" | "talents", value: string) => {
    setFormData((prev) => {
      const current = prev[key]
      if (key === "talents" && value === "Aucun besoin") {
        const alreadySelected = current.includes(value)
        return { ...prev, talents: alreadySelected ? [] : ["Aucun besoin"] }
      }
      const withoutNone = key === "talents" ? current.filter((item) => item !== "Aucun besoin") : current
      const next = withoutNone.includes(value)
        ? withoutNone.filter((item) => item !== value)
        : [...withoutNone, value]
      return { ...prev, [key]: next }
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isStepValid(step)) {
      toast.error("Merci de compléter les champs requis avant de continuer.")
      return
    }
    if (step < totalSteps - 1) {
      setStep((prev) => Math.min(prev + 1, totalSteps - 1))
      return
    }

    setIsSubmitting(true)
    const messageLines = [
      `Nom complet: ${formData.fullName}`,
      `Email: ${formData.email}`,
      formData.website ? `Site / réseaux: ${formData.website}` : null,
      `Objectif: ${formData.objective}`,
      `Formats: ${formData.formats.join(", ")}`,
      `Rushs: ${formData.rushes}`,
      `Script: ${formData.script}`,
      `Intervenants: ${formData.talents.join(", ")}`,
      `Drone: ${formData.drone}`,
      `Référence: ${formData.hasReference === "Oui" ? formData.referenceLink : "Non"}`,
      `Révisions acceptées: ${formData.acceptRevisions}`,
      `Budget: ${formData.budget}`,
    ].filter(Boolean)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          project: formData.objective,
          message: messageLines.join("\n"),
        }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => null)
        const detail = err?.detail || err?.error || "Erreur serveur"
        throw new Error(detail)
      }

      setSubmitted(true)
      toast.success("Brief envoyé avec succès !")
      setFormData({
        fullName: "",
        email: "",
        website: "",
        objective: "",
        formats: [],
        rushes: "",
        script: "",
        talents: [],
        drone: "",
        hasReference: "",
        referenceLink: "",
        acceptRevisions: "",
        budget: "",
      })
      setStep(0)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer."
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const goBack = () => setStep((prev) => Math.max(prev - 1, 0))

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Brief de Production Vidéo</h1>
            <p className="text-muted-foreground text-lg">
              Merci de détailler vos besoins. Plus c’est précis, plus le devis sera juste.
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-2 w-full rounded-full bg-border/60 overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${stepProgress}%` }} />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 rounded-lg border px-4 py-3 ${
                    index === step ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold ${
                      index < step ? "bg-primary text-primary-foreground border-primary" : "border-border"
                    }`}
                  >
                    {index < step ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="border border-border rounded-lg p-10 text-center space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold">Merci pour votre brief !</h2>
              <p className="text-muted-foreground">
                Nous reviendrons vers vous rapidement avec une proposition détaillée.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2" htmlFor="fullName">
                      Nom complet
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, fullName: event.target.value }))
                      }
                      required
                      className={inputClassName}
                      placeholder="Votre nom"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                      Adresse email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      required
                      className={inputClassName}
                      placeholder="vous@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="website">
                      Lien site web / Instagram / Facebook
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, website: event.target.value }))
                      }
                      className={inputClassName}
                      placeholder="https://"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Objectif principal</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {objectives.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                            formData.objective === option ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <input
                            type="radio"
                            name="objective"
                            value={option}
                            checked={formData.objective === option}
                            onChange={() => setFormData((prev) => ({ ...prev, objective: option }))}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Formats de livraison requis</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {formats.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                            formData.formats.includes(option) ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="formats"
                            value={option}
                            checked={formData.formats.includes(option)}
                            onChange={() => toggleArrayValue("formats", option)}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Besoin des fichiers sources (rushs bruts)</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {["Non, la vidéo finale suffit", "Oui, je veux récupérer les images brutes"].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                            formData.rushes === option ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <input
                            type="radio"
                            name="rushes"
                            value={option}
                            checked={formData.rushes === option}
                            onChange={() => setFormData((prev) => ({ ...prev, rushes: option }))}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Qui s’occupe du script / scénario ?</p>
                    <div className="grid gap-3">
                      {scriptOptions.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                            formData.script === option ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <input
                            type="radio"
                            name="script"
                            value={option}
                            checked={formData.script === option}
                            onChange={() => setFormData((prev) => ({ ...prev, script: option }))}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Avez-vous besoin d’intervenants spécifiques ?</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {talentOptions.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                            formData.talents.includes(option) ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="talents"
                            value={option}
                            checked={formData.talents.includes(option)}
                            onChange={() => toggleArrayValue("talents", option)}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Souhaitez-vous des prises de vue aériennes (drone) ?</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {["Oui", "Non"].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                          formData.drone === option ? "border-primary bg-primary/5" : "border-border"
                        }`}
                      >
                        <input
                          type="radio"
                          name="drone"
                          value={option}
                          checked={formData.drone === option}
                          onChange={() => setFormData((prev) => ({ ...prev, drone: option }))}
                          className="h-4 w-4 accent-primary"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">
                      Avez-vous une référence visuelle (YouTube/Insta/TikTok) ?
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {["Oui", "Non"].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                            formData.hasReference === option ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <input
                            type="radio"
                            name="hasReference"
                            value={option}
                            checked={formData.hasReference === option}
                            onChange={() => setFormData((prev) => ({ ...prev, hasReference: option }))}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.hasReference === "Oui" && (
                    <div>
                      <label className="block text-sm font-semibold mb-2" htmlFor="referenceLink">
                        Lien de la référence
                      </label>
                      <input
                        id="referenceLink"
                        name="referenceLink"
                        type="text"
                        value={formData.referenceLink}
                        onChange={(event) =>
                          setFormData((prev) => ({ ...prev, referenceLink: event.target.value }))
                        }
                        className={inputClassName}
                        placeholder="https://"
                        disabled={isSubmitting}
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Acceptez-vous la politique de révision (3 allers-retours) ?</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {["Oui", "Non"].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                            formData.acceptRevisions === option ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <input
                            type="radio"
                            name="acceptRevisions"
                            value={option}
                            checked={formData.acceptRevisions === option}
                            onChange={() => setFormData((prev) => ({ ...prev, acceptRevisions: option }))}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Quel est votre budget estimatif ?</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {budgets.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
                          formData.budget === option ? "border-primary bg-primary/5" : "border-border"
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option}
                          checked={formData.budget === option}
                          onChange={() => setFormData((prev) => ({ ...prev, budget: option }))}
                          className="h-4 w-4 accent-primary"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0 || isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-muted transition-colors disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Retour
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {step < totalSteps - 1 ? (
                    <>
                      Continuer
                      <ChevronRight className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Envoyer le brief
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
