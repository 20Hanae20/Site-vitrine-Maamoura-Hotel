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
       simple: "Chambre simple",
        double: "Chambre Double",
        suite: "Suite Familiale"
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
    about: {
      badge: "À Propos de Nous",
      title: "Bienvenue à l'Hôtel Maamoura",
      subtitle: "Une oasis de sérénité au cœur de Casablanca.",
      storyTitle: "Notre Histoire",
      storyParagraphs: [
        "L'Hôtel Maamoura est un hôtel 3 étoiles situé au cœur de Casablanca, dans le quartier historique de la Médina Sidi Belyout.",
        "Inspiré de l'architecture marocaine traditionnelle, notre établissement allie authenticité et confort moderne afin d'offrir une expérience chaleureuse et raffinée.",
        "Avec ses 60 chambres climatisées et équipées, son restaurant, son accueil attentif et ses services personnalisés, l'hôtel accompagne chaque voyageur tout au long de son séjour.",
        "Depuis votre arrivée jusqu'à votre départ, notre équipe veille à transformer votre visite en un souvenir inoubliable."
      ],
      storyBtn: "Découvrir notre histoire",
      valuesTitle: "Nos Valeurs",
      values: [
        { title: "Authenticité", desc: "Une décoration inspirée du patrimoine marocain et de l'art traditionnel." },
        { title: "Excellence", desc: "Un service personnalisé et une attention particulière à chaque détail." },
        { title: "Hospitalité", desc: "Un accueil chaleureux pour que chaque visiteur se sente comme chez lui." }
      ],
      stats: [
        { target: 5000, isPlus: true, suffix: "", label: "Voyageurs satisfaits" },
        { target: 60, isPlus: false, suffix: "", label: "Chambres élégantes" },
        { target: 3, isPlus: false, suffix: "étoiles", label: "Hôtel" },
        { target: 24, isPlus: false, suffix: "/7", label: "Service disponible" }
      ],
      info: {
        title: "Informations",
        items: [
          "Check-in : 12h00 – 23h59",
          "Check-out : jusqu'à 12h00",
          "Licence : 20000HT0596",
          "Petit-déjeuner continental servi chaque jour"
        ]
      },
      equipment: {
        title: "Équipements",
        items: [
          "Wi-Fi gratuit dans les espaces publics",
          "Parking disponible",
          "Coffre-fort",
          "Ascenseur"
        ]
      },
      roomsAmenities: {
        title: "Chambres",
        items: [
          "Climatisation",
          "TV satellite",
          "Coin dressing",
          "Articles de toilette gratuits",
          "Réveil AM/FM"
        ]
      }
    },
    rooms: {
      title: "Nos Chambres & Suites",
      subtitle: "Un raffinement traditionnel allié au confort moderne absolu",
      viewDetails: "Voir les détails",
      reserve: "Réserver",
      amenities: "Équipements",
      pricePerNight: "Par nuit",
      types: [
        {
          id: "simple",
          title: "Chambre Simple",
          description: "Chambres élégantes et intimistes, parfaitement adaptées au voyageur seul.",
          rooms: [
            {
              id: "101",
              number: "Chambre 101",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/double/image.png",
              amenities: ["Lit simple", "Salle de bain privée", "Climatisation", "Vue patio"]
            },
            {
              id: "102",
              number: "Chambre 102",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/double/image1.png",
              amenities: ["Lit simple", "Salle de bain privée", "Climatisation", "Vue patio"]
            },
            {
              id: "103",
              number: "Chambre 103",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["Lit simple", "Salle de bain privée", "Climatisation", "Vue jardin"]
            },
            {
              id: "104",
              number: "Chambre 104",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/lhotel.png",
              amenities: ["Lit simple", "Salle de bain privée", "Climatisation", "Vue patio"]
            },
            {
              id: "105",
              number: "Chambre 105",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/p2.png",
              amenities: ["Lit simple", "Salle de bain privée", "Climatisation", "Vue jardin"]
            },
            {
              id: "106",
              number: "Chambre 106",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["Lit simple", "Salle de bain privée", "Climatisation", "Vue patio"]
            }
          ]
        },
        {
          id: "double",
          title: "Chambre Double",
          description: "Espaces raffinés pour les couples, avec un confort moderne et une atmosphère chaleureuse.",
          rooms: [
            {
              id: "201",
              number: "Chambre 201",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["Lit Queen Size", "Salle de bain en marbre", "Climatisation", "Balcon privé"]
            },
            {
              id: "202",
              number: "Chambre 202",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["Lit Queen Size", "Salle de bain en marbre", "Climatisation", "Balcon privé"]
            },
            {
              id: "203",
              number: "Chambre 203",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["Lit Queen Size", "Salle de bain en marbre", "Climatisation", "Vue jardin"]
            },
            {
              id: "204",
              number: "Chambre 204",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["Lit Queen Size", "Salle de bain en marbre", "Climatisation", "Balcon privé"]
            },
            {
              id: "205",
              number: "Chambre 205",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["Lit Queen Size", "Salle de bain en marbre", "Climatisation", "Vue jardin"]
            },
            {
              id: "206",
              number: "Chambre 206",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["Lit Queen Size", "Salle de bain en marbre", "Climatisation", "Balcon privé"]
            }
          ]
        },
        {
          id: "suite",
          title: "Suite Familiale",
          description: "Des suites luxueuses offrant espace, raffinement et intimité pour les familles.",
          rooms: [
            {
              id: "301",
              number: "Suite 301",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/familia/image.png",
              amenities: ["2 chambres", "Salon privé", "2 salles de bain", "Terrasse", "Service concierge"]
            },
            {
              id: "302",
              number: "Suite 302",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/familia/image1.png",
              amenities: ["2 chambres", "Salon privé", "2 salles de bain", "Terrasse", "Service concierge"]
            },
            {
              id: "303",
              number: "Suite 303",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/familia/f4.jpeg",
              amenities: ["2 chambres", "Salon privé", "2 salles de bain", "Terrasse", "Service concierge"]
            },
            {
              id: "304",
              number: "Suite 304",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/familia/image3.png",
              amenities: ["2 chambres", "Salon privé", "2 salles de bain", "Terrasse", "Service concierge"]
            },
            
          ]
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
    location: {
      address: "59 Rue Ibn Batouta, Casablanca, Maroc",
      phoneValue: "+212600000000",
      emailValue: "contact@hotelmaamoura.com",
      googleMapsDestination: "59 Rue Ibn Batouta, Casablanca, Maroc",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1!2d-7.6114!3d33.5883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2b1c2e4f5a6%3A0x0!2s59%20Rue%20Ibn%20Batouta%2C%20Casablanca!5e0!3m2!1sfr!2sma",
      description: "Idéalement situé au cœur de Casablanca, l'Hôtel Maamoura vous accueille dans un cadre d'exception à quelques pas des principaux quartiers d'affaires et de loisirs de la ville."
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
        simple: "Simple Room",
        double: "Double Room",
        suite: "Family Suite (with parental privacy separation)"
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
    about: {
      badge: "About Us",
      title: "Welcome to Hôtel Maamoura",
      subtitle: "An oasis of serenity in the heart of Casablanca.",
      storyTitle: "Our Story",
      storyParagraphs: [
        "Hôtel Maamoura is a 3-star hotel located in the heart of Casablanca, in the historic district of Médina Sidi Belyout.",
        "Inspired by traditional Moroccan architecture, our establishment combines authenticity and modern comfort to offer a warm and refined experience.",
        "With its 60 air-conditioned and well-equipped rooms, restaurant, attentive welcome, and personalized services, the hotel accompanies every traveler throughout their stay.",
        "From your arrival until your departure, our team is dedicated to turning your visit into an unforgettable memory."
      ],
      storyBtn: "Discover our story",
      valuesTitle: "Our Values",
      values: [
        { title: "Authenticity", desc: "A decor inspired by Moroccan heritage and traditional art." },
        { title: "Excellence", desc: "Personalized service with special attention to every detail." },
        { title: "Hospitality", desc: "A warm welcome so every guest feels at home." }
      ],
      stats: [
        { target: 5000, isPlus: true, suffix: "", label: "Satisfied travelers" },
        { target: 60, isPlus: false, suffix: "", label: "Elegant rooms" },
        { target: 3, isPlus: false, suffix: "stars", label: "Hotel" },
        { target: 24, isPlus: false, suffix: "/7", label: "Service available" }
      ],
      info: {
        title: "Information",
        items: [
          "Check-in: 12:00 PM – 11:59 PM",
          "Check-out: until 12:00 PM",
          "License: 20000HT0596",
          "Continental breakfast served daily"
        ]
      },
      equipment: {
        title: "Equipment",
        items: [
          "Free Wi-Fi in public areas",
          "Parking available",
          "Safety deposit box",
          "Elevator"
        ]
      },
      roomsAmenities: {
        title: "Rooms",
        items: [
          "Air conditioning",
          "Satellite TV",
          "Dressing area",
          "Free toiletries",
          "AM/FM alarm clock"
        ]
      }
    },
    rooms: {
      title: "Our Rooms & Suites",
      subtitle: "Traditional refinement combined with absolute modern comfort",
      viewDetails: "View Details",
      reserve: "Reserve",
      amenities: "Amenities",
      pricePerNight: "Per night",
      types: [
        {
          id: "simple",
          title: "Simple Room",
          description: "Elegant private rooms designed for the solo traveler.",
          rooms: [
            {
              id: "101",
              number: "Room 101",
              price: "€120",
              capacity: 1,
              area: 18,
              image: "/images/lhotel.png",
              amenities: ["Single bed", "Private bathroom", "Air conditioning", "Patio view"]
            },
            {
              id: "102",
              number: "Room 102",
              price: "€120",
              capacity: 1,
              area: 18,
              image: "/images/p2.png",
              amenities: ["Single bed", "Private bathroom", "Air conditioning", "Patio view"]
            },
            {
              id: "103",
              number: "Room 103",
              price: "€120",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["Single bed", "Private bathroom", "Air conditioning", "Garden view"]
            },
            {
              id: "104",
              number: "Room 104",
              price: "€120",
              capacity: 1,
              area: 18,
              image: "/images/lhotel.png",
              amenities: ["Single bed", "Private bathroom", "Air conditioning", "Patio view"]
            },
            {
              id: "105",
              number: "Room 105",
              price: "€120",
              capacity: 1,
              area: 18,
              image: "/images/p2.png",
              amenities: ["Single bed", "Private bathroom", "Air conditioning", "Garden view"]
            },
            {
              id: "106",
              number: "Room 106",
              price: "€120",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["Single bed", "Private bathroom", "Air conditioning", "Patio view"]
            }
          ]
        },
        {
          id: "double",
          title: "Double Room",
          description: "Refined spaces for couples with modern comfort and warm ambiance.",
          rooms: [
            {
              id: "201",
              number: "Room 201",
              price: "€180",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["Queen size bed", "Marble bathroom", "Air conditioning", "Private balcony"]
            },
            {
              id: "202",
              number: "Room 202",
              price: "€180",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["Queen size bed", "Marble bathroom", "Air conditioning", "Private balcony"]
            },
            {
              id: "203",
              number: "Room 203",
              price: "€180",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["Queen size bed", "Marble bathroom", "Air conditioning", "Garden view"]
            },
            {
              id: "204",
              number: "Room 204",
              price: "€180",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["Queen size bed", "Marble bathroom", "Air conditioning", "Private balcony"]
            },
            {
              id: "205",
              number: "Room 205",
              price: "€180",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["Queen size bed", "Marble bathroom", "Air conditioning", "Garden view"]
            },
            {
              id: "206",
              number: "Room 206",
              price: "€180",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["Queen size bed", "Marble bathroom", "Air conditioning", "Private balcony"]
            }
          ]
        },
        {
          id: "suite",
          title: "Family Suite",
          description: "Luxurious suites offering space and refinement for family stays.",
          rooms: [
            {
              id: "301",
              number: "Suite 301",
              price: "€320",
              capacity: 4,
              area: 50,
              image: "/images/zalige2.jpg",
              amenities: ["2 bedrooms", "Private lounge", "2 bathrooms", "Terrace", "Concierge service"]
            },
            {
              id: "302",
              number: "Suite 302",
              price: "€320",
              capacity: 4,
              area: 50,
              image: "/images/lhotel.png",
              amenities: ["2 bedrooms", "Private lounge", "2 bathrooms", "Terrace", "Concierge service"]
            },
            {
              id: "303",
              number: "Suite 303",
              price: "€320",
              capacity: 4,
              area: 50,
              image: "/images/p2.png",
              amenities: ["2 bedrooms", "Private lounge", "2 bathrooms", "Terrace", "Concierge service"]
            },
            {
              id: "304",
              number: "Suite 304",
              price: "€320",
              capacity: 4,
              area: 50,
              image: "/images/zalige2.jpg",
              amenities: ["2 bedrooms", "Private lounge", "2 bathrooms", "Terrace", "Concierge service"]
            },
            {
              id: "305",
              number: "Suite 305",
              price: "€320",
              capacity: 4,
              area: 50,
              image: "/images/lhotel.png",
              amenities: ["2 bedrooms", "Private lounge", "2 bathrooms", "Terrace", "Concierge service"]
            },
            {
              id: "306",
              number: "Suite 306",
              price: "€320",
              capacity: 4,
              area: 50,
              image: "/images/p2.png",
              amenities: ["2 bedrooms", "Private lounge", "2 bathrooms", "Terrace", "Concierge service"]
            }
          ]
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
    location: {
      address: "59 Rue Ibn Batouta, Casablanca, Morocco",
      phoneValue: "+212600000000",
      emailValue: "contact@hotelmaamoura.com",
      googleMapsDestination: "59 Rue Ibn Batouta, Casablanca, Morocco",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1!2d-7.6114!3d33.5883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2b1c2e4f5a6%3A0x0!2s59%20Rue%20Ibn%20Batouta%2C%20Casablanca!5e0!3m2!1sen!2sma",
      description: "Ideally located in the heart of Casablanca, Hôtel Maamoura welcomes you in an exceptional setting just steps from the city's main business and leisure districts."
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
        simple: "غرفة مفردة",
        double: "غرفة مزدوجة",
        suite: "جناح عائلي (مع فصل تام لخصوصية الوالدين)"
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
    about: {
      badge: "معلومات عنا",
      title: "مرحباً بكم في فندق المعمورة",
      subtitle: "واحة من السكينة في قلب الدار البيضاء.",
      storyTitle: "قصتنا",
      storyParagraphs: [
        "فندق المعمورة هو فندق 3 نجوم يقع في قلب الدار البيضاء، في الحي التاريخي للمدينة سيدي بليوط.",
        "مستوحى من العمارة المغربية التقليدية، يمزج فندقنا بين الأصالة والراحة العصرية لتقديم تجربة دافئة وراقية.",
        "بفضل 60 غرفة مكيفة ومجهزة تجهيزاً كاملاً، ومطعم، واستقبال يقظ، وخدمات شخصية، يرافق الفندق كل مسافر طوال إقامته.",
        "من وصولك حتى مغادرتك، يحرص فريقنا على تحويل زيارتك إلى ذكرى لا تنسى."
      ],
      storyBtn: "اكتشف قصتنا",
      valuesTitle: "قيمنا",
      values: [
        { title: "الأصالة", desc: "ديكور مستوحى من التراث المغربي والفن التقليدي." },
        { title: "التميز", desc: "خدمة شخصية واهتمام خاص بكل التفاصيل." },
        { title: "الضيافة", desc: "استقبال دافئ ليشعر كل زائر وكأنه في منزله." }
      ],
      stats: [
        { target: 5000, isPlus: true, suffix: "", label: "مسافر راضٍ" },
        { target: 60, isPlus: false, suffix: "", label: "غرفة راقية" },
        { target: 3, isPlus: false, suffix: "نجوم", label: "فندق" },
        { target: 24, isPlus: false, suffix: "/7", label: "خدمة متوفرة" }
      ],
      info: {
        title: "معلومات",
        items: [
          "تسجيل الوصول: 12:00 – 23:59",
          "تسجيل المغادرة: حتى 12:00",
          "الرخصة: 20000HT0596",
          "إفطار كونتيننتال يُقدم يومياً"
        ]
      },
      equipment: {
        title: "التجهيزات",
        items: [
          "واي فاي مجاني في الأماكن العامة",
          "موقف سيارات متوفر",
          "خزينة أمان",
          "مصعد"
        ]
      },
      roomsAmenities: {
        title: "الغرف",
        items: [
          "تكييف الهواء",
          "تلفاز فضائي",
          "منطقة ملابس",
          "مستلزمات استحمام مجانية",
          "منبه AM/FM"
        ]
      }
    },
    rooms: {
      title: "غرفنا وأجنحتنا",
      subtitle: "رقي تقليدي يمتزج بالراحة العصرية المطلقة",
      viewDetails: "اكتشف الغرفة",
      reserve: "احجز",
      amenities: "المرافق",
      pricePerNight: "لكل ليلة",
      types: [
        {
          id: "simple",
          title: "غرفة بسيطة",
          description: "غرف أنيقة وخاصة مثالية للمسافر الفردي.",
          rooms: [
            {
              id: "101",
              number: "الغرفة 101",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/lhotel.png",
              amenities: ["سرير مفرد", "حمام خاص", "تكييف", "إطلالة على البهو"]
            },
            {
              id: "102",
              number: "الغرفة 102",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/p2.png",
              amenities: ["سرير مفرد", "حمام خاص", "تكييف", "إطلالة على البهو"]
            },
            {
              id: "103",
              number: "الغرفة 103",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["سرير مفرد", "حمام خاص", "تكييف", "إطلالة على الحديقة"]
            },
            {
              id: "104",
              number: "الغرفة 104",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/lhotel.png",
              amenities: ["سرير مفرد", "حمام خاص", "تكييف", "إطلالة على البهو"]
            },
            {
              id: "105",
              number: "الغرفة 105",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/p2.png",
              amenities: ["سرير مفرد", "حمام خاص", "تكييف", "إطلالة على الحديقة"]
            },
            {
              id: "106",
              number: "الغرفة 106",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["سرير مفرد", "حمام خاص", "تكييف", "إطلالة على البهو"]
            }
          ]
        },
        {
          id: "double",
          title: "غرفة مزدوجة",
          description: "مساحات راقية للأزواج مع أجواء دافئة وراحة عصرية.",
          rooms: [
            {
              id: "201",
              number: "الغرفة 201",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["سرير كوين", "حمام رخامي", "تكييف", "شرفة خاصة"]
            },
            {
              id: "202",
              number: "الغرفة 202",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["سرير كوين", "حمام رخامي", "تكييف", "شرفة خاصة"]
            },
            {
              id: "203",
              number: "الغرفة 203",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["سرير كوين", "حمام رخامي", "تكييف", "إطلالة على الحديقة"]
            },
            {
              id: "204",
              number: "الغرفة 204",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["سرير كوين", "حمام رخامي", "تكييف", "شرفة خاصة"]
            },
            {
              id: "205",
              number: "الغرفة 205",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["سرير كوين", "حمام رخامي", "تكييف", "إطلالة على الحديقة"]
            },
            {
              id: "206",
              number: "الغرفة 206",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["سرير كوين", "حمام رخامي", "تكييف", "شرفة خاصة"]
            }
          ]
        },
        {
          id: "suite",
          title: "الجناح العائلي",
          description: "أجنحة فخمة تجمع بين الفخامة والمساحة المثالية للعائلات.",
          rooms: [
            {
              id: "301",
              number: "الجناح 301",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/zalige2.jpg",
              amenities: ["غرفتان", "صالون خاص", "حمامين", "شرفة", "خدمة كونسيرج"]
            },
            {
              id: "302",
              number: "الجناح 302",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/lhotel.png",
              amenities: ["غرفتان", "صالون خاص", "حمامين", "شرفة", "خدمة كونسيرج"]
            },
            {
              id: "303",
              number: "الجناح 303",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/p2.png",
              amenities: ["غرفتان", "صالون خاص", "حمامين", "شرفة", "خدمة كونسيرج"]
            },
            {
              id: "304",
              number: "الجناح 304",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/zalige2.jpg",
              amenities: ["غرفتان", "صالون خاص", "حمامين", "شرفة", "خدمة كونسيرج"]
            },
            {
              id: "305",
              number: "الجناح 305",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/lhotel.png",
              amenities: ["غرفتان", "صالون خاص", "حمامين", "شرفة", "خدمة كونسيرج"]
            },
            {
              id: "306",
              number: "الجناح 306",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/p2.png",
              amenities: ["غرفتان", "صالون خاص", "حمامين", "شرفة", "خدمة كونسيرج"]
            }
          ]
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
    location: {
      address: "59 شارع ابن بطوطة، الدار البيضاء، المغرب",
      phoneValue: "+212600000000",
      emailValue: "contact@hotelmaamoura.com",
      googleMapsDestination: "59 Rue Ibn Batouta, Casablanca, Maroc",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1!2d-7.6114!3d33.5883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2b1c2e4f5a6%3A0x0!2s59%20Rue%20Ibn%20Batouta%2C%20Casablanca!5e0!3m2!1sfr!2sma",
      description: "يقع فندق المعمورة في قلب الدار البيضاء، في موقع مثالي على بعد خطوات من أهم أحياء الأعمال والترفيه في المدينة."
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
        simple: "Habitación Simple",
        double: "Habitación Doble",
        suite: "Suite Familiar (con separación para privacidad parental)"
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
    about: {
      badge: "Sobre Nosotros",
      title: "Bienvenido al Hôtel Maamoura",
      subtitle: "Un oasis de serenidad en el corazón de Casablanca.",
      storyTitle: "Nuestra Historia",
      storyParagraphs: [
        "El Hôtel Maamoura es un hotel de 3 estrellas situado en el corazón de Casablanca, en el histórico barrio de la Médina Sidi Belyout.",
        "Inspirado en la arquitectura tradicional marroquí, nuestro establecimiento combina autenticidad y confort moderno para ofrecer una experiencia cálida y refinada.",
        "Con sus 60 habitaciones climatizadas y equipadas, restaurante, recepción atenta y servicios personalizados, el hotel acompaña a cada viajero durante toda su estancia.",
        "Desde su llegada hasta su partida, nuestro equipo se esfuerza por convertir su visita en un recuerdo inolvidable."
      ],
      storyBtn: "Descubrir nuestra historia",
      valuesTitle: "Nuestros Valores",
      values: [
        { title: "Autenticidad", desc: "Una decoración inspirada en el patrimonio marroquí y el arte tradicional." },
        { title: "Excelencia", desc: "Un servicio personalizado y una atención especial a cada detalle." },
        { title: "Hospitalidad", desc: "Una cálida bienvenida para que cada huésped se sienta como en casa." }
      ],
      stats: [
        { target: 5000, isPlus: true, suffix: "", label: "Viajeros satisfechos" },
        { target: 60, isPlus: false, suffix: "", label: "Habitaciones elegantes" },
        { target: 3, isPlus: false, suffix: "estrellas", label: "Hotel" },
        { target: 24, isPlus: false, suffix: "/7", label: "Servicio disponible" }
      ],
      info: {
        title: "Información",
        items: [
          "Check-in: 12:00 – 23:59",
          "Check-out: hasta las 12:00",
          "Licencia: 20000HT0596",
          "Desayuno continental servido a diario"
        ]
      },
      equipment: {
        title: "Equipamiento",
        items: [
          "Wi-Fi gratuito en áreas públicas",
          "Estacionamiento disponible",
          "Caja fuerte",
          "Ascensor"
        ]
      },
      roomsAmenities: {
        title: "Habitaciones",
        items: [
          "Aire acondicionado",
          "TV satélite",
          "Vestidor",
          "Artículos de aseo gratuitos",
          "Despertador AM/FM"
        ]
      }
    },
    rooms: {
      title: "Nuestras Habitaciones & Suites",
      subtitle: "Refinamiento tradicional combinado con el máximo confort moderno",
      viewDetails: "Descubrir habitación",
      reserve: "Reservar",
      amenities: "Servicios",
      pricePerNight: "Por noche",
      types: [
        {
          id: "simple",
          title: "Habitación Simple",
          description: "Habitaciones discretas y elegantes, ideales para el viajero individual.",
          rooms: [
            {
              id: "101",
              number: "Habitación 101",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/lhotel.png",
              amenities: ["Cama individual", "Baño privado", "Aire acondicionado", "Vista al patio"]
            },
            {
              id: "102",
              number: "Habitación 102",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/p2.png",
              amenities: ["Cama individual", "Baño privado", "Aire acondicionado", "Vista al patio"]
            },
            {
              id: "103",
              number: "Habitación 103",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["Cama individual", "Baño privado", "Aire acondicionado", "Vista al jardín"]
            },
            {
              id: "104",
              number: "Habitación 104",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/lhotel.png",
              amenities: ["Cama individual", "Baño privado", "Aire acondicionado", "Vista al patio"]
            },
            {
              id: "105",
              number: "Habitación 105",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/p2.png",
              amenities: ["Cama individual", "Baño privado", "Aire acondicionado", "Vista al jardín"]
            },
            {
              id: "106",
              number: "Habitación 106",
              price: "120€",
              capacity: 1,
              area: 18,
              image: "/images/zalige2.jpg",
              amenities: ["Cama individual", "Baño privado", "Aire acondicionado", "Vista al patio"]
            }
          ]
        },
        {
          id: "double",
          title: "Habitación Doble",
          description: "Espacios refinados para parejas con una atmósfera cálida y moderna.",
          rooms: [
            {
              id: "201",
              number: "Habitación 201",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["Cama Queen Size", "Baño de mármol", "Aire acondicionado", "Balcón privado"]
            },
            {
              id: "202",
              number: "Habitación 202",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["Cama Queen Size", "Baño de mármol", "Aire acondicionado", "Balcón privado"]
            },
            {
              id: "203",
              number: "Habitación 203",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["Cama Queen Size", "Baño de mármol", "Aire acondicionado", "Vista al jardín"]
            },
            {
              id: "204",
              number: "Habitación 204",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/p2.png",
              amenities: ["Cama Queen Size", "Baño de mármol", "Aire acondicionado", "Balcón privado"]
            },
            {
              id: "205",
              number: "Habitación 205",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/zalige2.jpg",
              amenities: ["Cama Queen Size", "Baño de mármol", "Aire acondicionado", "Vista al jardín"]
            },
            {
              id: "206",
              number: "Habitación 206",
              price: "180€",
              capacity: 2,
              area: 28,
              image: "/images/lhotel.png",
              amenities: ["Cama Queen Size", "Baño de mármol", "Aire acondicionado", "Balcón privado"]
            }
          ]
        },
        {
          id: "suite",
          title: "Suite Familiar",
          description: "Suites de lujo con espacio para toda la familia.",
          rooms: [
            {
              id: "301",
              number: "Suite 301",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/zalige2.jpg",
              amenities: ["2 dormitorios", "Sala privada", "2 baños", "Terraza", "Servicio de concierge"]
            },
            {
              id: "302",
              number: "Suite 302",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/lhotel.png",
              amenities: ["2 dormitorios", "Sala privada", "2 baños", "Terraza", "Servicio de concierge"]
            },
            {
              id: "303",
              number: "Suite 303",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/p2.png",
              amenities: ["2 dormitorios", "Sala privada", "2 baños", "Terraza", "Servicio de concierge"]
            },
            {
              id: "304",
              number: "Suite 304",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/zalige2.jpg",
              amenities: ["2 dormitorios", "Sala privada", "2 baños", "Terraza", "Servicio de concierge"]
            },
            {
              id: "305",
              number: "Suite 305",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/lhotel.png",
              amenities: ["2 dormitorios", "Sala privada", "2 baños", "Terraza", "Servicio de concierge"]
            },
            {
              id: "306",
              number: "Suite 306",
              price: "320€",
              capacity: 4,
              area: 50,
              image: "/images/p2.png",
              amenities: ["2 dormitorios", "Sala privada", "2 baños", "Terraza", "Servicio de concierge"]
            }
          ]
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
    location: {
      address: "59 Rue Ibn Batouta, Casablanca, Maroc",
      phoneValue: "+212600000000",
      emailValue: "contact@hotelmaamoura.com",
      googleMapsDestination: "59 Rue Ibn Batouta, Casablanca, Maroc",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d-7.627!3d33.578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2b0c8f4a6e2%3A0x7b3c9d1e5f2a4b6c!2s59 Rue Ibn Batouta, Casablanca, Maroc!5e0!3m2!1sfr!2sma",
      description: "Idealmente situado en el corazón de Casablanca, el Hôtel Maamoura le recibe en un entorno excepcional a pocos pasos de los principales distritos de negocios y ocio de la ciudad."
    },
    footer: {
      address: "59 Rue Ibn Batouta, Casablanca, Maroc",
      phone: "Teléfono: +212 6 00 00 00 00",
      email: "Correo: contact@hotelmaamoura.com",
      rights: "© 2026 Hôtel Maamoura. Todos los derechos reservados. Inspirado en el prestigio del arte tradicional marroquí."
    }
  }
};
