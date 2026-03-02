export type Project = {
  id: string
  title: string
  client: string
  service: "Réseaux Sociaux" | "Projets Personnels" | "Événementiel" | "Corporate"
  media: {
    type: "video"
    src: string
    poster?: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  // Corporate
  {
    id: "nosoclean",
    title: "Nosoclean",
    client: "Nosoclean",
    service: "Corporate",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1772474330/nosoclean_drnwnu.mp4" }
  },
  {
    id: "collable",
    title: "Collable",
    client: "Collable",
    service: "Corporate",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1772474487/collable_hnuajl.mp4" }
  },
  {
    id: "baraka",
    title: "Baraka",
    client: "Baraka",
    service: "Corporate",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1772474719/baraka_sqgub9.mp4" }
  },
  {
    id: "numidia",
    title: "Numidia",
    client: "Numidia",
    service: "Corporate",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1772476613/Numidia_psjjub.mp4" }
  },

  // Événementiel / Mariages
  {
    id: "agrivil",
    title: "Agrivil",
    client: "Agrivil",
    service: "Événementiel",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1772477401/AGRIVIL_1_ojnesm.mp4" }
  },
  {
    id: "mariage-1",
    title: "Mariage #1",
    client: "Privé",
    service: "Événementiel",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1772473434/mariage_kpanxe.mp4" },
    featured: true
  },
  {
    id: "mariage-2",
    title: "Mariage #2",
    client: "Privé",
    service: "Événementiel",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1772473656/mariuage_ctp9qy.mp4" }
  },
  // Garden Pépinière
  {
    id: "anthuriu",
    title: "Anthurium",
    client: "Garden Pépinière",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266164/ANTHURIU_ugo2td.mp4" },
    featured: true
  },
  {
    id: "pianist",
    title: "Pianiste",
    client: "Garden Pépinière",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266171/pianiste_lcocxz.mp4" }
  },
  {
    id: "pipiniere",
    title: "Pépinière",
    client: "Garden Pépinière",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266152/VID_20250831_010545_480_beglih.mp4" }
  },
  {
    id: "plantation",
    title: "Plantation",
    client: "Garden Pépinière",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771369769/PLANTATION_rmyslz.mp4" }
  },
  // Coco Spa
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    client: "Coco Spa",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771370104/HYDRAFACIAL_siiw2f.mp4" },
    featured: true
  },
  {
    id: "salle-vip",
    title: "Salle VIP",
    client: "Coco Spa",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771370340/SALLE_VIP_yugasl.mp4" }
  },
  // GR
  {
    id: "montre-chambre",
    title: "Montre Chambre",
    client: "GR",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266232/MONTRE_CHAMBRE_1_ihhp0u.mp4" }
  },
  {
    id: "montre-resto",
    title: "Montre Resto",
    client: "GR",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266260/MONTRE_RESTO_xvvagt.mp4" }
  },
  {
    id: "sport-gr",
    title: "Sport",
    client: "GR",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771368040/SPORT_xfyh6x.mp4" }
  },
  {
    id: "sport-gr-2",
    title: "Sport 2",
    client: "GR",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266240/SPORT_uckmd8.mp4" }
  },
  // Les Frères K
  {
    id: "freres-k",
    title: "Frères K",
    client: "Les Frères K",
    service: "Réseaux Sociaux",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266269/frerek2_sdk78k.mp4" }
  },
  // Perso
  {
    id: "bejaia-drone",
    title: "Béjaïa Drone",
    client: "Perso",
    service: "Projets Personnels",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266261/bejaia_yxio9s.mp4" },
    featured: true
  },
  {
    id: "cut-out-last",
    title: "Cut Out Last",
    client: "Perso",
    service: "Projets Personnels",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266223/cut_out_last_qudg5g.mp4" }
  },
  {
    id: "cute",
    title: "Cute",
    client: "Perso",
    service: "Projets Personnels",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266224/Cute_cui5gd.mp4" }
  },
  {
    id: "random",
    title: "Random",
    client: "Perso",
    service: "Projets Personnels",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266260/random_y2rad0.mp4" }
  },
  {
    id: "crackage-usma",
    title: "Crackage USMA",
    client: "Perso",
    service: "Projets Personnels",
    media: { type: "video", src: "https://res.cloudinary.com/dkgm3e8z5/video/upload/v1771266272/crackage_usma_2025_dlf5rr.mp4" }
  }
]
