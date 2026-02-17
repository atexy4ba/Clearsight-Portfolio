# 🚀 Guide de Migration Assets : Vercel -> Cloudinary

Ce guide permet de résoudre les problèmes d'affichage des vidéos/images sur Vercel en déportant le stockage lourd vers Cloudinary.

---

## 🛠 1. Installation
Installe le SDK optimisé pour Next.js.
- [ ] `pnpm add next-cloudinary`

---

## ☁️ 2. Setup Cloudinary (Dashboard)
- [ ] **Compte :** Créer un compte sur [Cloudinary](https://cloudinary.com/).
- [ ] **Cloud Name :** Récupérer ton `Cloud Name` sur le dashboard principal.
- [ ] **Upload :** Transférer manuellement tes vidéos et images du dossier `/public` vers la **Media Library** de Cloudinary.
- [ ] **Public ID :** Note le chemin de tes fichiers (ex: `projets/hotel-demo`).

---

## 🔑 3. Variables d'Environnement
Ajoute ton identifiant pour que Next.js puisse construire les URLs.
- [ ] **Local :** Ajouter dans `.env.local`
- [ ] **Vercel :** Ajouter dans Dashboard > Settings > Environment Variables
```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="ton_nom_de_cloud"