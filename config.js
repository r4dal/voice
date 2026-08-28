/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           FICHIER DE CONFIGURATION — Charles Orion          ║
 * ║   Modifiez ce fichier pour mettre à jour toute la page.     ║
 * ║   Aucune connaissance en code requise !                     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  /* ════════════════════════════════════════
     👤 IDENTITÉ
     ════════════════════════════════════════ */
  prenom: "Charles",
  nom: "Orion",
  metier: "Comédien de doublage & voix off",
  slogan: "La voix qui donne vie à vos histoires.",
  description: "Avec plus de 15 ans d'expérience en France et à l'international, je prête ma voix à vos personnages, vos marques et vos projets avec authenticité et précision.",

  /* ════════════════════════════════════════
     📊 STATISTIQUES (section chiffres)
     ════════════════════════════════════════ */
  stats: [
    { nombre: "15+",  label: "Années d'expérience" },
    { nombre: "300+", label: "Projets réalisés"     },
    { nombre: "3",   label: "Langues maîtrisées"   },
  ],

  /* ════════════════════════════════════════
     🖼️  PHOTOS
     Remplacez les chemins par vos fichiers image.
     Laissez une valeur vide ("") pour afficher
     un placeholder à la place.
     ════════════════════════════════════════ */
  photos: {
    // Photo principale (colonne droite du hero)
    principale: "mic1.jpg",           // ex: "images/charles-Orion.jpg"
    altPrincipale: "Charles Orion — Comédien de doublage",

    // Photo de la section À propos
    apropos: "mic2.jpg",              // ex: "images/charles-studio.jpg"
    altApropos: "Charles Orion en studio d'enregistrement",
  },

  /* ════════════════════════════════════════
     🎵 DÉMOS AUDIO
     Ajoutez ou supprimez des démos dans ce tableau.
     Chaque démo a un titre, un type, et un fichier src.
     ════════════════════════════════════════ */
  demos: [
    {
      titre: "Démo doublage — Drame",
      type:  "Cinéma & Téléfilm",
      src:   "audio/demo-drame.mp3",   // chemin vers votre fichier audio
    },
    {
      titre: "Démo publicité — Ton chaleureux",
      type:  "Publicité & Corporate",
      src:   "audio/demo-pub.mp3",
    },
    {
      titre: "Démo narration — Documentaire nature",
      type:  "Narration & Audiobook",
      src:   "audio/demo-narration.mp3",
    },
    {
      titre: "Démo jeu vidéo — Personnage héroïque",
      type:  "Jeux vidéo",
      src:   "audio/demo-jeu.mp3",
    },
  ],

  /* ════════════════════════════════════════
     🎬 VIDÉOS (optionnel)
     Laissez ce tableau vide ([]) pour masquer
     la section vidéo entièrement.
     ════════════════════════════════════════ */
  videos: [
    // Exemple — décommentez et adaptez :
    // {
    //   titre: "Bande démo — Doublage 2024",
    //   type:  "Showreel",
    //   src:   "videos/showreel-2024.mp4",
    //   poster: "videos/showreel-poster.jpg",  // image affichée avant lecture (optionnel)
    // },
  ],

  /* ════════════════════════════════════════
     🛠️  SERVICES
     Modifiez, ajoutez ou supprimez des services.
     ════════════════════════════════════════ */
  services: [
    {
      icone: "🎬",
      nom:   "Doublage cinéma & TV",
      desc:  "Interprétation de personnages pour films, séries télévisées et productions streaming. Synchronisation labiale irréprochable.",
    },
    {
      icone: "📻",
      nom:   "Voix off & narration",
      desc:  "Documentaires, e-learning, audiobooks et contenus éducatifs. Une diction claire et une émotion maîtrisée.",
    },
    {
      icone: "🎮",
      nom:   "Jeux vidéo",
      desc:  "Personnages principaux ou secondaires, interfaces, tutoriels. Je m'adapte à tous les univers, du réaliste au fantastique.",
    },
    {
      icone: "📢",
      nom:   "Publicité & corporate",
      desc:  "Spots radio et TV, présentations d'entreprise, messages téléphoniques. Un ton professionnel et mémorable.",
    },
    {
      icone: "🔥",
      nom:   "Bonne deconnade et bonne humeur",
      desc:  "j'avoue je deconne bien hehe.",
    },
  ],

  /* ════════════════════════════════════════
     📖 À PROPOS
     ════════════════════════════════════════ */
  apropos: {
    bio1: "Formé au Conservatoire National de Paris, j'ai débuté ma carrière au théâtre avant de me consacrer pleinement au doublage et à la voix off. Ma voix a été entendue dans plus de 300 productions à travers l'Europe et l'Amérique du Nord.",
    bio2: "Je travaille depuis mon studio professionnel entièrement insonorisé, équipé des dernières technologies d'enregistrement, garantissant une qualité broadcast à chaque session.",
    // Ajoutez ou supprimez des points forts ici
    qualites: [
      "Studio home professionnel, livraison rapide",
      "Enregistrement en présentiel possible (Paris)",
      "Direction artistique disponible sur demande",
      "Formats WAV 48kHz, MP3, AIFF disponibles",
    ],
  },

  /* ════════════════════════════════════════
     📬 CONTACT
     ════════════════════════════════════════ */
  contact: {
    email:       "contact@charlesorion.com",
    telephone:   "+33 (0)6 XX XX XX XX",
    localisation: "Paris, France — Disponible en remote et en présentiel",
    messageIntro: "Vous avez un projet ? Je serais ravi d'en discuter. N'hésitez pas à me contacter par email ou via les réseaux ci-dessous.",
  },

  /* ════════════════════════════════════════
     🔗 RÉSEAUX SOCIAUX
     Remplacez # par vos vrais liens.
     Supprimez une ligne pour masquer le lien.
     ════════════════════════════════════════ */
  reseaux: [
    { label: "LinkedIn",    url: "#" },
    { label: "Instagram",   url: "#" },
    { label: "IMDb",        url: "#" },
    { label: "Casting.fr",  url: "#" },
  ],

  /* ════════════════════════════════════════
     🎨 COULEURS (avancé)
     ════════════════════════════════════════ */
  couleurs: {
    creme:      "#F5F0E8",   // Fond principal
    brunClair:  "#E8DFD0",   // Fond secondaire
    or:         "#C5A46A",   // Accent doré
    encre:      "#1C1A17",   // Texte principal
    gris:       "#7A7060",   // Texte secondaire
  },

};
