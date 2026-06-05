export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      rooms: "Suites & Chambres",
      services: "Services Privés",
      gallery: "Galerie",
      contact: "Contact",
      book: "Réserver",
      logoSubtitle: "HÔTEL CASABLANCA"
    },
    hero: {
      welcome: "Hôtel Maamoura",
      slogan: "Une oasis de calme et de tradition au cœur de la ville blanche",
      subSlogan: "L'élégance intemporelle inspirée de l'art de vivre traditionnel marocain.",
      cta: "Découvrir nos Suites"
    },
    booking: {
      title: "Réserver votre séjour",
      checkIn: "Date d'arrivée",
      checkOut: "Date de départ",
      guests: "Voyageurs",
      roomType: "Hébergement",
      roomOptions: {
        traditional: "Chambre Traditionnelle",
        royal: "Suite Royale",
        family: "Suite Familiale (avec séparation parentale)"
      },
      airportTransfer: "Transfert Aéroport",
      airportOptions: {
        none: "Sans transfert",
        arrival: "Arrivée uniquement",
        departure: "Départ uniquement",
        both: "Arrivée & Départ"
      },
      chauffeurCity: "Visite de la ville avec chauffeur",
      chauffeurMorocco: "Séjour au Maroc avec chauffeur (Flexible)",
      submit: "Vérifier la disponibilité sur WhatsApp",
      whatsappMessage: "Bonjour Hôtel Maamoura, je souhaite réserver un séjour :\n\n🏨 Hébergement : {room}\n📅 Arrivée : {checkIn}\n📅 Départ : {checkOut}\n👥 Voyageurs : {guests}\n🚗 Transfert Aéroport : {transfer}\n🗺️ Visite Ville avec Chauffeur : {cityChauffeur}\n🚙 Séjour Maroc avec Chauffeur : {moroccoChauffeur}\n\nMerci de me confirmer la disponibilité."
    },
    rooms: {
      title: "Nos Chambres & Suites",
      subtitle: "Un raffinement traditionnel allié au confort moderne absolu",
      viewDetails: "Découvrir la chambre",
      maxGuests: "Capacité : {count} personnes",
      types: [
        {
          id: "traditional",
          title: "Chambre Traditionnelle",
          desc: "Un cocon de sérénité orné de plâtres sculptés à la main et de zelliges ancestraux. Parfait pour une immersion calme.",
          capacity: 2,
          price: "À partir de 120€ / nuit",
          features: ["Lit Queen Size", "Salle de bain en tadelakt", "Climatisation", "Vue patio"]
        },
        {
          id: "family",
          title: "Suite Familiale",
          desc: "Un espace luxueux conçu spécialement pour les familles, offrant une véritable séparation des chambres pour préserver l'intimité parentale tout en gardant les enfants à proximité.",
          capacity: 5,
          price: "À partir de 250€ / nuit",
          features: ["Chambre parentale séparée", "Deuxième chambre séparée", "Salon traditionnel marocain", "2 salles de bain", "Terrasse privée"]
        },
        {
          id: "royal",
          title: "Suite Royale",
          desc: "L'incarnation suprême du luxe traditionnel. De grands volumes, un lit King Size majestueux et des détails artisanaux dignes des plus grands palais.",
          capacity: 3,
          price: "À partir de 380€ / nuit",
          features: ["Lit King Size", "Salon avec cheminée", "Baignoire en cuivre", "Balcon sur jardin", "Service majordome"]
        }
      ]
    },
    services: {
      title: "Expériences & Chauffeurs Privés",
      subtitle: "Un service haut de gamme et personnalisé pour découvrir le Maroc à votre rythme",
      items: [
        {
          title: "Transfert Aéroport",
          desc: "Dès votre atterrissage et jusqu'à votre départ, profitez d'un accueil VIP chaleureux et d'un trajet serein à bord de nos véhicules de luxe climatisés.",
          highlight: "Arrivée & Départ"
        },
        {
          title: "Visite de Ville avec Chauffeur",
          desc: "Explorez les secrets de la ville blanche, ses monuments historiques, ses boulevards vibrants et ses quartiers emblématiques en toute liberté avec un chauffeur dédié.",
          highlight: "Chauffeur privé à la journée"
        },
        {
          title: "Séjour au Maroc avec Chauffeur",
          desc: "Concevez un itinéraire sur mesure à travers le Maroc (désert, montagnes de l'Atlas, côte atlantique). Voyagez en toute flexibilité avec un chauffeur expérimenté à votre disposition.",
          highlight: "Itinéraire 100% flexible"
        }
      ]
    },
    gallery: {
      title: "Notre Galerie",
      subtitle: "L'art, la lumière et l'architecture traditionnelle marocaine en images",
      all: "Tout",
      hotel: "Hôtel",
      rooms: "Suites",
      wellness: "Bien-être"
    },
    footer: {
      address: "Adresse : 45 Boulevard Moulay Youssef, Casablanca, Maroc",
      phone: "Téléphone : +212 6 00 00 00 00",
      email: "Email : contact@hotelmaamoura.com",
      rights: "© 2026 Hôtel Maamoura. Tous droits réservés. Inspiré du prestige de l'art traditionnel marocain."
    }
  },
  en: {
    nav: {
      home: "Home",
      rooms: "Suites & Rooms",
      services: "Private Services",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book Now",
      logoSubtitle: "CASABLANCA HOTEL"
    },
    hero: {
      welcome: "Hôtel Maamoura",
      slogan: "An oasis of calm and tradition in the heart of the White City",
      subSlogan: "Timeless elegance inspired by the traditional Moroccan art of living.",
      cta: "Discover our Suites"
    },
    booking: {
      title: "Book your stay",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      guests: "Guests",
      roomType: "Accommodation",
      roomOptions: {
        traditional: "Traditional Room",
        royal: "Royal Suite",
        family: "Family Suite (with parental privacy separation)"
      },
      airportTransfer: "Airport Transfer",
      airportOptions: {
        none: "No transfer",
        arrival: "Arrival only",
        departure: "Departure only",
        both: "Arrival & Departure"
      },
      chauffeurCity: "City tour with chauffeur",
      chauffeurMorocco: "Morocco flexible tour with chauffeur",
      submit: "Check Availability on WhatsApp",
      whatsappMessage: "Hello Hôtel Maamoura, I would like to book a stay:\n\n🏨 Accommodation: {room}\n📅 Arrival: {checkIn}\n📅 Departure: {checkOut}\n👥 Guests: {guests}\n🚗 Airport Transfer: {transfer}\n🗺️ City Tour with Chauffeur: {cityChauffeur}\n🚙 Morocco Tour with Chauffeur: {moroccoChauffeur}\n\nThank you for confirming availability."
    },
    rooms: {
      title: "Our Rooms & Suites",
      subtitle: "Traditional refinement combined with absolute modern comfort",
      viewDetails: "View Details",
      maxGuests: "Capacity: {count} guests",
      types: [
        {
          id: "traditional",
          title: "Traditional Room",
          desc: "A cocoon of serenity adorned with hand-carved plaster and ancestral zellige tiling. Perfect for a quiet immersion.",
          capacity: 2,
          price: "From €120 / night",
          features: ["Queen Size Bed", "Tadelakt bathroom", "Air conditioning", "Patio view"]
        },
        {
          id: "family",
          title: "Family Suite",
          desc: "A luxurious space designed specifically for families, offering physical room separation to preserve parents' privacy while keeping children close.",
          capacity: 5,
          price: "From €250 / night",
          features: ["Separate master bedroom", "Second separate bedroom", "Traditional Moroccan salon", "2 bathrooms", "Private terrace"]
        },
        {
          id: "royal",
          title: "Royal Suite",
          desc: "The ultimate embodiment of traditional luxury. Spacious rooms, majestic King Size bed, and artisanal details worthy of the finest palaces.",
          capacity: 3,
          price: "From €380 / night",
          features: ["King Size Bed", "Living room with fireplace", "Copper bathtub", "Balcony overlooking the garden", "Butler service"]
        }
      ]
    },
    services: {
      title: "Experiences & Private Chauffeurs",
      subtitle: "High-end, personalized service to discover Morocco at your own pace",
      items: [
        {
          title: "Airport Transfer",
          desc: "From landing to departure, enjoy a warm VIP welcome and a peaceful journey in our premium air-conditioned vehicles.",
          highlight: "Arrival & Departure"
        },
        {
          title: "City Tour with Chauffeur",
          desc: "Explore the secrets of the White City, its historical monuments, vibrant neighborhoods, and iconic architecture with your own dedicated driver.",
          highlight: "Full-day private chauffeur"
        },
        {
          title: "Morocco Stay with Chauffeur",
          desc: "Design a tailor-made journey across Morocco (desert, Atlas mountains, Atlantic coast). Travel with ultimate flexibility.",
          highlight: "100% flexible itinerary"
        }
      ]
    },
    gallery: {
      title: "Our Gallery",
      subtitle: "Art, light, and traditional Moroccan architecture in pictures",
      all: "All",
      hotel: "Hotel",
      rooms: "Suites",
      wellness: "Wellness"
    },
    footer: {
      address: "Address: 45 Moulay Youssef Boulevard, Casablanca, Morocco",
      phone: "Phone: +212 6 00 00 00 00",
      email: "Email: contact@hotelmaamoura.com",
      rights: "© 2026 Hôtel Maamoura. All rights reserved. Inspired by the prestige of Moroccan traditional art."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      rooms: "الأجنحة والغرف",
      services: "الخدمات الخاصة",
      gallery: "المعرض",
      contact: "اتصل بنا",
      book: "احجز الآن",
      logoSubtitle: "فندق الدار البيضاء"
    },
    hero: {
      welcome: "فندق المعمورة",
      slogan: "واحة من الهدوء والأصالة في قلب المدينة البيضاء",
      subSlogan: "أناقة خالدة مستوحاة من نمط العيش التقليدي المغربي العريق.",
      cta: "اكتشف أجنحتنا"
    },
    booking: {
      title: "احجز إقامتك",
      checkIn: "تاريخ الوصول",
      checkOut: "تاريخ المغادرة",
      guests: "عدد الضيوف",
      roomType: "نوع الإقامة",
      roomOptions: {
        traditional: "غرفة تقليدية",
        royal: "جناح ملكي",
        family: "جناح عائلي (مع فصل تام لخصوصية الوالدين)"
      },
      airportTransfer: "توصيل المطار",
      airportOptions: {
        none: "بدون توصيل",
        arrival: "وصول فقط",
        departure: "مغادرة فقط",
        both: "وصول ومغادرة"
      },
      chauffeurCity: "جولة في المدينة مع سائق",
      chauffeurMorocco: "رحلة مرنة في المغرب مع سائق",
      submit: "التحقق من التوفر عبر الواتساب",
      whatsappMessage: "مرحباً فندق المعمورة، أود حجز إقامة:\n\n🏨 الإقامة: {room}\n📅 الوصول: {checkIn}\n📅 المغادرة: {checkOut}\n👥 الضيوف: {guests}\n🚗 توصيل المطار: {transfer}\n🗺️ جولة المدينة مع سائق: {cityChauffeur}\n🚙 جولة المغرب مع سائق: {moroccoChauffeur}\n\nشكراً لتأكيد التوفر."
    },
    rooms: {
      title: "غرفنا وأجنحتنا",
      subtitle: "رقي تقليدي يمتزج بالراحة العصرية المطلقة",
      viewDetails: "اكتشف الغرفة",
      maxGuests: "السعة: {count} أشخاص",
      types: [
        {
          id: "traditional",
          title: "غرفة تقليدية",
          desc: "ملاذ من الطمأنينة مزين بنقوش الجبس اليدوية والزليج التقليدي العريق. مثالية لتجربة هادئة.",
          capacity: 2,
          price: "ابتداءً من 120€ / ليلة",
          features: ["سرير حجم كوين", "حمام من التادلاكت", "تكييف هواء", "إطلالة على البهو"]
        },
        {
          id: "family",
          title: "الجناح العائلي",
          desc: "مساحة فاخرة مصممة خصيصاً للعائلات، وتوفر غرفاً منفصلة تماماً للحفاظ على خصوصية الوالدين مع إبقاء الأطفال بالقرب.",
          capacity: 5,
          price: "ابتداءً من 250€ / ليلة",
          features: ["غرفة ماستر منفصلة", "غرفة أطفال منفصلة ثانية", "صالون مغربي تقليدي", "حمامين", "شرفة خاصة"]
        },
        {
          id: "royal",
          title: "الجناح الملكي",
          desc: "التجسيد الأسمى للفخامة التقليدية. مساحات شاسعة، سرير ملكي فاخر، وتفاصيل حرفية تليق بأرقى القصور.",
          capacity: 3,
          price: "ابتداءً من 380€ / ليلة",
          features: ["سرير ملكي ضخم", "صالون مع مدفأة", "حوض استحمام نحاسي", "شرفة مطلة على الحديقة", "خدمة خادم خاص"]
        }
      ]
    },
    services: {
      title: "الخبرات والسائقين الخاصين",
      subtitle: "خدمة راقية ومخصصة لاكتشاف المغرب بالوتيرة التي تناسبك",
      items: [
        {
          title: "توصيل المطار",
          desc: "منذ لحظة هبوط طائرتكم وحتى مغادرتكم، استمتعوا باستقبال VIP حار ورحلة هادئة على متن سياراتنا الفاخرة والمكيفة.",
          highlight: "وصول ومغادرة"
        },
        {
          title: "جولة في المدينة مع سائق",
          desc: "استكشف أسرار المدينة البيضاء، معالمها التاريخية، أحيائها النابضة بالحياة وهندستها المعمارية الرائعة بكل حرية مع سائق مخصص.",
          highlight: "سائق خاص طوال اليوم"
        },
        {
          title: "رحلة في المغرب مع سائق",
          desc: "صمم مساراً مخصصاً لك عبر المغرب (الصحراء، جبال الأطلس، الساحل الأطلسي) مع سائق ذو خبرة تحت تصرفكم.",
          highlight: "مسار مرن 100%"
        }
      ]
    },
    gallery: {
      title: "معرضنا",
      subtitle: "الفن والضوء والهندسة المعمارية المغربية التقليدية بالصور",
      all: "الكل",
      hotel: "الفندق",
      rooms: "الأجنحة",
      wellness: "الاستجمام"
    },
    footer: {
      address: "العنوان: 45 شارع مولاي يوسف، الدار البيضاء، المغرب",
      phone: "الهاتف: +212 6 00 00 00 00",
      email: "البريد الإلكتروني: contact@hotelmaamoura.com",
      rights: "© 2026 فندق المعمورة. جميع الحقوق محفوظة. مستوحى من هيبة الفن المغربي التقليدي."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      rooms: "Suites & Habitaciones",
      services: "Servicios Privados",
      gallery: "Galería",
      contact: "Contacto",
      book: "Reservar",
      logoSubtitle: "HOTEL CASABLANCA"
    },
    hero: {
      welcome: "Hôtel Maamoura",
      slogan: "Un oasis de calma y tradición en el corazón de la Ciudad Blanca",
      subSlogan: "Elegancia atemporal inspirada en el arte de vivir tradicional marroquí.",
      cta: "Descubrir nuestras Suites"
    },
    booking: {
      title: "Reserve su estancia",
      checkIn: "Fecha de entrada",
      checkOut: "Fecha de salida",
      guests: "Huéspedes",
      roomType: "Alojamiento",
      roomOptions: {
        traditional: "Habitación Tradicional",
        royal: "Suite Real",
        family: "Suite Familiar (con separación para privacidad parental)"
      },
      airportTransfer: "Traslado al Aeropuerto",
      airportOptions: {
        none: "Sin traslado",
        arrival: "Solo llegada",
        departure: "Solo salida",
        both: "Llegada & Salida"
      },
      chauffeurCity: "Visita de la ciudad con chófer",
      chauffeurMorocco: "Estancia en Marruecos con chófer (Flexible)",
      submit: "Verificar disponibilidad en WhatsApp",
      whatsappMessage: "Hola Hôtel Maamoura, deseo reservar una estancia:\n\n🏨 Alojamiento: {room}\n📅 Entrada: {checkIn}\n📅 Salida: {checkOut}\n👥 Huéspedes: {guests}\n🚗 Traslado Aeropuerto: {transfer}\n🗺️ Visita Ciudad con Chófer: {cityChauffeur}\n🚙 Tour Marruecos con Chófer: {moroccoChauffeur}\n\nGracias por confirmarme disponibilidad."
    },
    rooms: {
      title: "Nuestras Habitaciones & Suites",
      subtitle: "Refinamiento tradicional combinado con el máximo confort moderno",
      viewDetails: "Descubrir habitación",
      maxGuests: "Capacidad: {count} personas",
      types: [
        {
          id: "traditional",
          title: "Habitación Tradicional",
          desc: "Un capullo de serenidad adornado con yeso tallado a mano y azulejos zellige ancestrales. Perfecto para una inmersión tranquila.",
          capacity: 2,
          price: "Desde 120€ / noche",
          features: ["Cama Queen Size", "Baño en tadelakt", "Aire acondicionado", "Vista al patio"]
        },
        {
          id: "family",
          title: "Suite Familiar",
          desc: "Un espacio lujoso diseñado especialmente para familias, que ofrece una verdadera separación física de habitaciones para preservar la privacidad de los padres manteniendo a los niños cerca.",
          capacity: 5,
          price: "Desde 250€ / noche",
          features: ["Dormitorio principal independiente", "Segundo dormitorio independiente", "Salón tradicional marroquí", "2 baños", "Terraza privada"]
        },
        {
          id: "royal",
          title: "Suite Real",
          desc: "La encarnación suprema del lujo tradicional. Amplios espacios, cama King Size majestuosa y detalles artesanales dignos de los palacios más distinguidos.",
          capacity: 3,
          price: "Desde 380€ / noche",
          features: ["Cama King Size", "Salón con chimenea", "Bañera de cobre", "Balcón con vistas al jardín", "Servicio de mayordomo"]
        }
      ]
    },
    services: {
      title: "Experiencias & Chóferes Privados",
      subtitle: "Un servicio exclusivo y personalizado para descubrir Marruecos a su propio ritmo",
      items: [
        {
          title: "Traslado al Aeropuerto",
          desc: "Desde su aterrizaje hasta su partida, disfrute de una cálida bienvenida VIP y de un viaje tranquilo en nuestros vehículos de alta gama climatizados.",
          highlight: "Llegada & Salida"
        },
        {
          title: "Visita de la Ciudad con Chófer",
          desc: "Explore en total libertad los secretos de la Ciudad Blanca, sus monumentos históricos, sus vibrantes avenidas y sus barrios emblemáticos con un conductor dedicado.",
          highlight: "Chófer privado todo el día"
        },
        {
          title: "Estancia en Marruecos con Chófer",
          desc: "Diseñe un viaje a medida a través de Marruecos (desierto, montañas del Atlas, costa atlántica) con total flexibilidad y un conductor experimentado a su servicio.",
          highlight: "Itinerario 100% flexible"
        }
      ]
    },
    gallery: {
      title: "Nuestra Galería",
      subtitle: "El arte, la luz y la arquitectura tradicional marroquí en imágenes",
      all: "Todo",
      hotel: "Hotel",
      rooms: "Suites",
      wellness: "Bienestar"
    },
    footer: {
      address: "Dirección: 45 Boulevard Moulay Youssef, Casablanca, Marruecos",
      phone: "Teléfono: +212 6 00 00 00 00",
      email: "Correo: contact@hotelmaamoura.com",
      rights: "© 2026 Hôtel Maamoura. Todos los derechos reservados. Inspirado en el prestigio del arte tradicional marroquí."
    }
  }
};
