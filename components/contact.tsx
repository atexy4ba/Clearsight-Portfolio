"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", project: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Create Together</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Ready to bring your vision to life? Get in touch with our team to discuss your next project.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:hello@clearsight.studio"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@clearsight.studio
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Studio Location</div>
                  <p className="text-muted-foreground">
                    123 Creative Boulevard
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Follow Our Work</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-semibold">In</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-semibold">Ig</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-semibold">Yt</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative">
            {submitted && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur rounded-lg z-50">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary" />
                  </div>
                  <p className="text-lg font-semibold">Message Sent!</p>
                  <p className="text-muted-foreground mt-2">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-semibold mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="commercial">Commercial Video</option>
                  <option value="photography">Photography</option>
                  <option value="documentary">Documentary</option>
                  <option value="branding">Branding Campaign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Share your vision and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Clearsight Studios. All rights reserved. Crafted with creativity and precision.
        </p>
      </div>
    </section>
  )
}
