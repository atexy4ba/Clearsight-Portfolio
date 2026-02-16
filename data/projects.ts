export type Project = {
  id: string
  slug: string
  title: string
  client: string
  service: "Production Vidéo" | "Photographie" | "Post-prod"
  tags: string[]
  overview: string
  deliverables: string[]
  media: {
    type: "image" | "video"
    src: string
    poster?: string
  }
  featured?: boolean
  size?: "tall" | "wide" | "square"
}

export const projects: Project[] = [
  {
    id: "nespresso-campaign",
    slug: "hotel-legacy",
    title: "Hotel Legacy",
    client: "Hotel Legacy",
    service: "Production Vidéo",
    tags: ["Publicité", "Brand Content"],
    overview:
      "Une campagne premium pour sublimer l’expérience hôtel, avec un rythme fluide, des plans texture et une mise en valeur des volumes.",
    deliverables: ["Film principal 30s", "Déclinaisons verticales", "Cutdowns social"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/GR/MONTRE CHAMBRE_1.mp4",
    },
    featured: true,
    size: "wide",
  },
  {
    id: "vogue-shooting",
    slug: "shooting-vogue",
    title: "Shooting Vogue",
    client: "Vogue",
    service: "Photographie",
    tags: ["Editorial", "Luxe"],
    overview:
      "Une esthétique éditoriale minimaliste, portée par des contrastes doux et un mouvement caméra délicat pour accentuer la silhouette et la matière.",
    deliverables: ["Capsule éditoriale", "Variations lumière", "Sélection lookbook"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/GR/MONTRE RESTO.mp4",
    },
    featured: true,
    size: "tall",
  },
  {
    id: "jazz-clip",
    slug: "clip-musical-jazz",
    title: "Clip Musical Jazz",
    client: "Jazz Collective",
    service: "Production Vidéo",
    tags: ["Clip", "Live Session"],
    overview:
      "Un live session intime capté en plans serrés, avec une palette chaude et des transitions fluides qui respectent le groove du morceau.",
    deliverables: ["Live session", "Teasers 15s", "Exports streaming"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/garden/pianiste.mp4",
    },
    featured: true,
    size: "square",
  },
  {
    id: "garden-anthem",
    slug: "garden-anthem",
    title: "Garden Anthem",
    client: "Garden Studio",
    service: "Post-prod",
    tags: ["Motion", "Sound Design"],
    overview:
      "Post-production premium pour renforcer le storytelling et installer un rythme cinématographique dans une ambiance organique.",
    deliverables: ["Montage final", "Color grading", "Sound design"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/garden/ANTHURIU.mp4",
    },
    size: "tall",
  },
  {
    id: "urban-landscapes",
    slug: "urban-landscapes",
    title: "Urban Landscapes",
    client: "City Culture",
    service: "Photographie",
    tags: ["Documentaire", "Architecture"],
    overview:
      "Regards documentaires sur la ville, avec des plans aériens qui structurent l’espace et révèlent la géométrie urbaine.",
    deliverables: ["Sélection documentaire", "Exports presse", "Format exhibition"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/Perso/bejaia drone.mp4",
    },
    size: "wide",
  },
  {
    id: "hydrafacial",
    slug: "hydrafacial-rituals",
    title: "Hydrafacial Rituals",
    client: "Coco Studio",
    service: "Production Vidéo",
    tags: ["Social Ads", "Beauty"],
    overview:
      "Un film social conçu pour sublimer les textures peau et instaurer une sensation premium, avec un montage rapide et lumineux.",
    deliverables: ["Spot 20s", "Assets verticals", "Pack stories"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/coco/HYDRAFACIAL.mp4",
    },
    size: "square",
  },
  {
    id: "brand-renaissance",
    slug: "brand-renaissance",
    title: "Brand Renaissance",
    client: "New Age Tech",
    service: "Post-prod",
    tags: ["Color Grading", "Sound Design"],
    overview:
      "Traitement couleur précis et sound design détaillé pour renforcer la montée en puissance narrative.",
    deliverables: ["Conformation", "Étalonnage", "Master final"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/Perso/cut out last.mp4",
    },
    size: "tall",
  },
  {
    id: "garden-plantation",
    slug: "garden-plantation",
    title: "Garden Plantation",
    client: "Green Atelier",
    service: "Production Vidéo",
    tags: ["Lifestyle", "Social"],
    overview:
      "Un récit organique centré sur le geste, conçu pour des formats sociaux immersifs.",
    deliverables: ["Film lifestyle", "Cutdowns 9:16", "Pack social"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/garden/PLANTATION.mp4",
    },
    size: "wide",
  },
  {
    id: "sports-edge",
    slug: "sports-edge",
    title: "Sports Edge",
    client: "GR Sports",
    service: "Post-prod",
    tags: ["Motion", "Rythme"],
    overview:
      "Montage accéléré et motion subtile pour créer une tension dynamique et une finition broadcast.",
    deliverables: ["Montage cut", "Motion accents", "Master export"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/GR/SPORT.mp4",
    },
    size: "square",
  },
  {
    id: "studio-portraits",
    slug: "studio-portraits",
    title: "Studio Portraits",
    client: "Portrait Lab",
    service: "Photographie",
    tags: ["Portrait", "Studio"],
    overview:
      "Une série pensée pour capter la personnalité et la lumière, avec une direction artistique minimaliste.",
    deliverables: ["Portraits hero", "Sélection portraits", "Pack retouch"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/coco/SALLE VIP.mp4",
    },
    size: "tall",
  },
  {
    id: "les-freres-k",
    slug: "les-freres-k",
    title: "Les Frères K",
    client: "Les Frères K",
    service: "Production Vidéo",
    tags: ["Performance", "Social"],
    overview:
      "Une captation performance pensée pour les réseaux, avec un montage punchy et des angles rapides.",
    deliverables: ["Performance edit", "Social cutdowns", "Exports verticals"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/Les freres K/frerek2.mp4",
    },
    size: "wide",
  },
  {
    id: "bejaia-drone",
    slug: "bejaia-aerial",
    title: "Bejaia Aerial",
    client: "Bejaia Tourism",
    service: "Photographie",
    tags: ["Drone", "Travel"],
    overview:
      "Un regard aérien pour amplifier la dimension touristique, avec des mouvements lents et une lumière naturelle.",
    deliverables: ["Séquence drone", "Exports 4K", "Teasers 15s"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/Perso/Cute.mp4",
    },
    size: "wide",
  },
  {
    id: "crackage-usma",
    slug: "crackage-usma",
    title: "Crackage USMA",
    client: "USMA",
    service: "Post-prod",
    tags: ["Rythme", "Sound Design"],
    overview:
      "Un montage nerveux pour souligner la montée d’énergie, avec un sound design percutant.",
    deliverables: ["Montage rythmique", "Sound design", "Master export"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/Perso/crackage usma 2025.mp4",
    },
    size: "square",
  },
  {
    id: "cut-out-rush",
    slug: "cut-out-rush",
    title: "Cut Out Rush",
    client: "Studio Lab",
    service: "Production Vidéo",
    tags: ["Motion", "Social"],
    overview:
      "Des plans courts et une cadence rapide pour créer un format social à fort impact.",
    deliverables: ["Spot social", "Transitions rapides", "Exports verticals"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/Perso/random.mp4",
    },
    size: "wide",
  },
  {
    id: "garden-motion",
    slug: "garden-motion",
    title: "Garden Motion",
    client: "Garden Studio",
    service: "Post-prod",
    tags: ["Color Grading", "Montage"],
    overview:
      "Traitement colorimétrique doux et montage fluide pour une ambiance signature.",
    deliverables: ["Color grading", "Montage final", "Exports master"],
    media: {
      type: "video",
      src: "/Portfilio content/Portfolio temp/video/reseaux sociaux/garden/VID_20250831_010545_480.mp4",
    },
    size: "tall",
  },
]
