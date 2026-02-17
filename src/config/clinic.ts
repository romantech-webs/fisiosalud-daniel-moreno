export const clinic = {
  name: "Fisiosalud Daniel Moreno",
  logo: "/images/logo.png",
  tagline: "Tu fisioterapeuta de confianza en Murcia, Álava",
  description: "Fisiosalud Daniel Moreno es tu clínica de fisioterapia en Murcia, Álava, especializada en tratamiento manual y recuperación deportiva. Con una valoración de 4.6 estrellas en Google, Daniel Moreno ofrece atención personalizada, diagnósticos precisos y técnicas efectivas para dolor de espalda, contracturas y lesiones deportivas. Disponibilidad flexible, incluso fines de semana para urgencias.",
  colors: {
    primary: "#0496ea",
    secondary: "#012d46",
    accent: "#c8e9f3",
    neutral: "#ebf7fd"
  },
  phone: "672 22 24 51",
  whatsapp: "+34672222451",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C/ Puerta Nueva, 22 Entresuelo, Oficina 1, 30008 Murcia, España",
    city: "Murcia",
    province: "Álava",
    postalCode: "30008",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=9916086249905005017&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Fisiosalud%20Daniel%20Moreno%20%4037.9918%2C-1.12807&z=16&output=embed",
  coordinates: {
    lat: 37.9918,
    lng: -1.12807
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–21:00"
    },
    {
      days: "sábado - domingo",
      hours: "9:00–20:00"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.6,
    count: 41,
    url: "https://maps.google.com/?cid=9916086249905005017&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Diego M.",
        rating: 5,
        text: "Llevaba una semana en cama sin poder moverme por tener la espalda pinzada. Por un compromiso de trabajo tuve que viajar de a Murcia, durante el día notaba como el dolor iba creciendo, así que decidí buscar de urgencia a alguien que pudiese atenderme un sábado a la tarde-noche, de rebote llegó el contacto de Daniel y fue la mejor decisión que pude tomar: además de ser consciente de algunos puntos “débiles” de mis rutinas físicas, encontró exactamente lo que me pasaba en la espalda y ya noté que salía de la clínica mucho mejor y, además, al día siguiente me levanté como si nada hubiese pasado. Gran profesional, exquisita atención y trato.",
        date: "Hace 3 años"
      },
      {
        author: "Cristina Moreno",
        rating: 5,
        text: "Gran profesional, que no duda en dedicar mucho tiempo al trato de dolencias o lesiones. Hace las preguntas necesarias para elaborar el diagnóstico y es muy sistemático en el tratamiento. El trato es inmejorable, y el tratamiento se ha adaptado a cómo me encontraba en cada caso. Lo conocí por una recomendación de una amiga y hace más de un año que voy de manera regular. Lo recomiendo!!!",
        date: "Hace 3 años"
      },
      {
        author: "Bexzy Gallego",
        rating: 5,
        text: "Excelente! Ha sido mi 1er fisio y con él me quedo. Acudí simplemente por descarga post entreno pero me ha ayudado en otras molestias que me han surgido. Siempre está atento a lo que dices de la dolencia, explica las causas y da recomendaciones. Responde rápido para agendar o consultas. Recomendado!",
        date: "Hace 5 meses"
      },
      {
        author: "Paulino Moraleda",
        rating: 5,
        text: "Totalmente recomendable! He venido a Murcia a jugar un torneo de basket y Dani me ha atendido un sábado de urgencia para descargarme una contractura y poder jugar el partido. Súper amable y súper profesional.",
        date: "Hace 2 meses"
      },
      {
        author: "Bexzaida Castañeda",
        rating: 5,
        text: "Daniel es el mejor fisio que hemos conocido, mi familia y yo lo consideramos \"mano de Santo\". Sus técnicas son extraordinarias, sanadoras y efectivas. Altamente recomendado.",
        date: "Hace 1 mes"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas que identifican con precisión el origen de tu dolor. Daniel utiliza métodos avanzados de palpación y tratamiento manual para desbloquear articulaciones, liberar tensiones musculares y restaurar la movilidad completa. Tratamiento sistemático y personalizado según tu dolencia específica.",
      benefits: [
        "Diagnóstico preciso del origen del dolor",
        "Alivio inmediato desde la primera sesión",
        "Recuperación de la movilidad completa"
      ],
      icon: "Hand"
    },
    {
      id: "tratamiento-espalda",
      name: "Tratamiento de Espalda",
      description: "Especialización en dolor de espalda, pinzamientos y bloqueos vertebrales. Identificamos los puntos débiles de tus rutinas físicas y aplicamos el tratamiento específico para cada caso. Resultados comprobados en casos agudos, con pacientes que han pasado de no poder moverse a recuperación total en 24 horas.",
      benefits: [
        "Solución efectiva para pinzamientos",
        "Recuperación rápida del movimiento",
        "Prevención de futuras lesiones"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Tratamiento especializado para deportistas y atletas. Descargas post-entreno, preparación pre-competición y tratamiento de lesiones deportivas. Atención urgente disponible para permitirte competir en tu mejor estado, incluso en torneos y compromisos deportivos importantes.",
      benefits: [
        "Descarga muscular post-entreno efectiva",
        "Tratamiento urgente pre-competición",
        "Prevención de lesiones deportivas"
      ],
      icon: "Dumbbell"
    },
    {
      id: "tratamiento-contracturas",
      name: "Tratamiento de Contracturas",
      description: "Eliminación efectiva de contracturas musculares mediante técnicas manuales avanzadas. Identificamos las causas profundas de las tensiones musculares y aplicamos el tratamiento más adecuado. Especialmente efectivo para contracturas crónicas y tensiones recurrentes que limitan tu día a día.",
      benefits: [
        "Eliminación completa de contracturas",
        "Técnicas efectivas y probadas",
        "Resultados duraderos"
      ],
      icon: "Target"
    },
    {
      id: "rehabilitacion-lesiones",
      name: "Rehabilitación de Lesiones",
      description: "Programas de rehabilitación personalizados adaptados a cómo te encuentras en cada sesión. Seguimiento continuo y sistemático de tu evolución, ajustando el tratamiento según tus progresos. Ideal para recuperación post-lesión y vuelta progresiva a tu actividad normal.",
      benefits: [
        "Tratamiento adaptado a tu evolución",
        "Seguimiento sistemático continuo",
        "Recuperación completa y segura"
      ],
      icon: "Activity"
    },
    {
      id: "atencion-urgencias",
      name: "Atención de Urgencias",
      description: "Disponibilidad para atender urgencias, incluso sábados y festivos. Si tienes un compromiso importante o necesitas tratamiento inmediato, Daniel se adapta para ofrecerte la atención que necesitas cuando más la necesitas. Respuesta rápida para agendar citas urgentes.",
      benefits: [
        "Disponibilidad fines de semana",
        "Atención inmediata en urgencias",
        "Respuesta rápida a consultas"
      ],
      icon: "Zap"
    },
    {
      id: "valoracion-personalizada",
      name: "Valoración Personalizada",
      description: "Evaluación completa con las preguntas necesarias para elaborar un diagnóstico preciso. Daniel dedica el tiempo necesario para entender tu dolencia, identificar puntos débiles en tus rutinas y diseñar el tratamiento más efectivo. Primera sesión orientada a conocer tu caso en profundidad.",
      benefits: [
        "Diagnóstico preciso y completo",
        "Tiempo dedicado sin prisas",
        "Plan de tratamiento personalizado"
      ],
      icon: "Heart"
    },
    {
      id: "tratamiento-preventivo",
      name: "Tratamiento Preventivo",
      description: "Sesiones regulares de mantenimiento para prevenir lesiones y mantener tu estado físico óptimo. Identificación de debilidades posturales y musculares antes de que se conviertan en lesiones. Recomendaciones específicas para mejorar tus hábitos y rutinas físicas diarias.",
      benefits: [
        "Prevención de futuras lesiones",
        "Mantenimiento del estado físico",
        "Recomendaciones personalizadas"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta",
      description: "Llama al 672 22 24 51 o envía un WhatsApp para solicitar tu cita. Respuesta rápida para agendar, con disponibilidad flexible incluso para urgencias en fin de semana."
    },
    {
      step: 2,
      title: "Valoración Completa",
      description: "Daniel dedica el tiempo necesario para hacer las preguntas adecuadas, entender tu dolencia y elaborar un diagnóstico preciso. Identificamos exactamente qué te pasa y los puntos débiles de tus rutinas."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Aplicamos técnicas manuales especializadas adaptadas a tu caso específico. Tratamiento sistemático que se ajusta a cómo te encuentras en cada sesión, sin protocolos rígidos."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Seguimiento continuo de tu evolución con recomendaciones específicas para prevenir recaídas. Atención constante hasta tu completa recuperación y vuelta a tu actividad normal."
    }
  ],
  whyUs: [
    {
      title: "Excelente Valoración de Pacientes",
      description: "Con 4.6 estrellas en Google y 41 reseñas verificadas, nuestros pacientes destacan los resultados inmediatos, el trato profesional y cercano, y la capacidad de Daniel para identificar exactamente el origen del problema. Testimonios reales de personas que han recuperado su bienestar.",
      icon: "Heart"
    },
    {
      title: "Diagnóstico Preciso y Personalizado",
      description: "Daniel dedica el tiempo necesario para hacer las preguntas adecuadas y elaborar un diagnóstico preciso. Enfoque sistemático que identifica puntos débiles en tus rutinas y encuentra exactamente qué te pasa, sin prisas ni protocolos genéricos.",
      icon: "Target"
    },
    {
      title: "Resultados Desde la Primera Sesión",
      description: "Pacientes que no podían moverse han salido de la clínica con alivio inmediato y recuperación completa en 24 horas. Técnicas manuales avanzadas que proporcionan resultados reales y duraderos, adaptadas a tu dolencia específica.",
      icon: "Zap"
    },
    {
      title: "Disponibilidad y Atención Urgente",
      description: "Atención flexible incluso en sábados y urgencias, con respuesta rápida para agendar citas. Si tienes un compromiso importante o necesitas tratamiento inmediato, Daniel se adapta para ofrecerte la atención que necesitas cuando más la necesitas.",
      icon: "Activity"
    }
  ],
  team: [
    {
      name: "Daniel Moreno",
      role: "Fisioterapeuta Titulado",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Fisiosalud Daniel Moreno nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Fisiosalud Daniel Moreno - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Fisiosalud Daniel Moreno - Imagen 2"
    },
    {
      src: "/images/hero.webp",
      alt: "Fisiosalud Daniel Moreno - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Fisiosalud Daniel Moreno - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Fisiosalud Daniel Moreno - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Fisiosalud Daniel Moreno - Imagen 6"
    }
  ],
  faq: [
    {
      question: "¿Qué tipo de lesiones trata Fisiosalud Daniel Moreno?",
      answer: "En Fisiosalud Daniel Moreno tratamos dolor de espalda, pinzamientos vertebrales, contracturas musculares, lesiones deportivas y molestias post-entreno. Daniel es especialista en identificar con precisión el origen del dolor mediante técnicas de fisioterapia manual avanzada. Muchos pacientes han experimentado alivio desde la primera sesión, incluso en casos agudos que les impedían moverse."
    },
    {
      question: "¿Atienden urgencias y fines de semana?",
      answer: "Sí, Fisiosalud Daniel Moreno ofrece atención de urgencias incluso en sábados y festivos. Si tienes un compromiso deportivo, laboral o necesitas tratamiento inmediato, Daniel se adapta para atenderte cuando más lo necesitas. La respuesta para agendar citas urgentes es muy rápida, contactando por teléfono o WhatsApp al 672 22 24 51."
    },
    {
      question: "¿Cuánto dura una sesión de fisioterapia?",
      answer: "Daniel Moreno dedica el tiempo necesario en cada sesión sin prisas, adaptándose a tu dolencia específica. La primera valoración suele ser más extensa para hacer un diagnóstico completo con las preguntas necesarias. Las sesiones de tratamiento se ajustan según tu evolución y necesidades, priorizando siempre la calidad y efectividad del tratamiento sobre el tiempo."
    },
    {
      question: "¿Es necesario acudir regularmente o solo cuando hay dolor?",
      answer: "Fisiosalud Daniel Moreno ofrece ambas opciones según tus necesidades. Muchos pacientes acuden de manera regular para mantenimiento preventivo y descargas post-entreno, mientras otros vienen para tratar dolencias puntuales. Daniel identificará en tu valoración si necesitas seguimiento continuo o tratamientos esporádicos, y te dará recomendaciones personalizadas para prevenir futuras lesiones."
    },
    {
      question: "¿Qué diferencia a Fisiosalud Daniel Moreno de otras clínicas?",
      answer: "Con 4.6 estrellas en Google y 41 reseñas, los pacientes destacan la capacidad de Daniel para identificar exactamente el origen del problema, su trato cercano y profesional, y los resultados inmediatos desde la primera sesión. El enfoque es sistemático y personalizado, dedicando tiempo real a cada paciente. Además, la disponibilidad para urgencias y la respuesta rápida son valores muy apreciados por quienes confían en la clínica."
    },
    {
      question: "¿Cómo puedo solicitar una cita en Fisiosalud Daniel Moreno?",
      answer: "Puedes solicitar tu cita llamando directamente al 672 22 24 51 o enviando un WhatsApp al mismo número. Daniel responde rápido para agendar citas y resolver consultas. Si necesitas atención urgente o tienes disponibilidad limitada, comunícalo al contactar para buscar la mejor solución a tu horario."
    },
    {
      question: "¿Trabaja con deportistas y atletas?",
      answer: "Sí, Fisiosalud Daniel Moreno tiene amplia experiencia en fisioterapia deportiva. Trata lesiones deportivas, realiza descargas post-entreno y ofrece preparación pre-competición. Varios deportistas han acudido en urgencias antes de torneos y competiciones importantes, logrando recuperarse a tiempo para competir. Daniel también ayuda con molestias que surgen durante el entrenamiento y ofrece recomendaciones para optimizar tu rendimiento."
    },
    {
      question: "¿Dónde está ubicada la clínica?",
      answer: "Fisiosalud Daniel Moreno está ubicada en Murcia, Álava. Para conocer la dirección exacta y cómo llegar, contacta al 672 22 24 51. La clínica ofrece un ambiente profesional y acogedor donde recibirás atención personalizada en cada visita."
    }
  ],
  seo: {
    titleTemplate: "%s | Fisiosalud Daniel Moreno",
    defaultTitle: "Fisiosalud Daniel Moreno | Fisioterapia en Murcia, Álava",
    defaultDescription: "Clínica de fisioterapia en Murcia, Álava. Tratamiento de espalda, lesiones deportivas y contracturas. Valoración 4.6★ en Google. Atención urgente disponible. ☎ 672 22 24 51",
    keywords: [
      "fisioterapia Murcia",
      "fisioterapeuta Murcia Álava",
      "Fisiosalud Daniel Moreno",
      "tratamiento espalda Murcia",
      "fisioterapia deportiva Murcia",
      "contracturas musculares Murcia",
      "fisio urgencias Murcia",
      "dolor de espalda Murcia",
      "lesiones deportivas Álava",
      "fisioterapia manual Murcia",
      "clínica fisioterapia Murcia",
      "Daniel Moreno fisioterapeuta"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Fisiosalud Daniel Moreno",
    cif: "",
    registeredAddress: "C/ Puerta Nueva, 22 Entresuelo, Oficina 1, 30008 Murcia, España, Murcia, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Murcia"
  ],
  heroDescription: "En Fisiosalud Daniel Moreno encontrarás un enfoque profesional y cercano para tu recuperación. Tratamientos personalizados con técnicas manuales avanzadas que te devolverán la movilidad y eliminarán el dolor. Atención inmediata disponible, incluso en sábados y urgencias.",
  specialty: "Fisioterapia Manual Especializada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Contacta ahora con Fisiosalud Daniel Moreno y agenda tu primera valoración. Atención personalizada y resultados desde la primera sesión.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
