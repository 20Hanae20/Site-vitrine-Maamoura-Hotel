'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Train, Plane, ShoppingBag, TreePine, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './Location.module.css';

const LANTERN_LEFT = (
  <svg viewBox="0 0 60 200" className={styles.lanternSvg} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b27f24" stopOpacity="0.6"/>
        <stop offset="50%" stopColor="#dfa83d" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#b27f24" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c6c42" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#0c6c42" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#0c6c42" stopOpacity="0.4"/>
      </linearGradient>
    </defs>
    <rect x="22" y="0" width="16" height="8" rx="2" fill="url(#lg)"/>
    <rect x="18" y="8" width="24" height="4" rx="1" fill="url(#lg2)"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="none" stroke="url(#lg)" strokeWidth="1.5"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="rgba(178,127,36,0.06)"/>
    <line x1="30" y1="12" x2="30" y2="52" stroke="rgba(223,168,61,0.3)" strokeWidth="0.5"/>
    <circle cx="30" cy="20" r="3" fill="rgba(223,168,61,0.4)"/>
    <circle cx="30" cy="30" r="2" fill="rgba(223,168,61,0.3)"/>
    <circle cx="30" cy="40" r="2.5" fill="rgba(223,168,61,0.35)"/>
    <rect x="20" y="55" width="20" height="3" rx="1" fill="url(#lg)"/>
    <path d="M25 58 L20 70 L40 70 L35 58" fill="rgba(178,127,36,0.15)" stroke="url(#lg)" strokeWidth="1"/>
    <rect x="22" y="70" width="16" height="8" rx="2" fill="url(#lg2)"/>
    <line x1="30" y1="78" x2="30" y2="90" stroke="url(#lg)" strokeWidth="1.5"/>
    <circle cx="30" cy="95" r="3" fill="url(#lg)" opacity="0.6"/>
  </svg>
);

const LANTERN_RIGHT = (
  <svg viewBox="0 0 60 200" className={styles.lanternSvgRight} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b27f24" stopOpacity="0.6"/>
        <stop offset="50%" stopColor="#dfa83d" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#b27f24" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="rg2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c6c42" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#0c6c42" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#0c6c42" stopOpacity="0.4"/>
      </linearGradient>
    </defs>
    <rect x="22" y="0" width="16" height="8" rx="2" fill="url(#rg)"/>
    <rect x="18" y="8" width="24" height="4" rx="1" fill="url(#rg2)"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="none" stroke="url(#rg)" strokeWidth="1.5"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="rgba(178,127,36,0.06)"/>
    <line x1="30" y1="12" x2="30" y2="52" stroke="rgba(223,168,61,0.3)" strokeWidth="0.5"/>
    <circle cx="30" cy="20" r="3" fill="rgba(223,168,61,0.4)"/>
    <circle cx="30" cy="30" r="2" fill="rgba(223,168,61,0.3)"/>
    <circle cx="30" cy="40" r="2.5" fill="rgba(223,168,61,0.35)"/>
    <rect x="20" y="55" width="20" height="3" rx="1" fill="url(#rg)"/>
    <path d="M25 58 L20 70 L40 70 L35 58" fill="rgba(178,127,36,0.15)" stroke="url(#rg)" strokeWidth="1"/>
    <rect x="22" y="70" width="16" height="8" rx="2" fill="url(#rg2)"/>
    <line x1="30" y1="78" x2="30" y2="90" stroke="url(#rg)" strokeWidth="1.5"/>
    <circle cx="30" cy="95" r="3" fill="url(#rg)" opacity="0.6"/>
  </svg>
);

const contactItems = (t, lang) => [
  {
    icon: MapPin,
    label: lang === 'fr' ? 'Adresse' : lang === 'en' ? 'Address' : lang === 'es' ? 'Dirección' : 'العنوان',
    value: t.address,
    href: `https://www.google.com/maps/search/${encodeURIComponent(t.address)}`,
    external: true,
  },
  {
    icon: Phone,
    label: lang === 'fr' ? 'Téléphone' : lang === 'en' ? 'Phone' : lang === 'es' ? 'Teléfono' : 'الهاتف',
    value: t.phoneValue,
    href: `tel:${t.phoneValue}`,
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: t.emailValue,
    href: `mailto:${t.emailValue}`,
    external: false,
  },
  {
    icon: Clock,
    label: lang === 'fr' ? 'Réception 24/7' : lang === 'en' ? 'Reception 24/7' : lang === 'es' ? 'Recepción 24/7' : 'استقبال 24/7',
    value: lang === 'fr' ? 'Service client disponible en permanence'
           : lang === 'en' ? 'Customer service always available'
           : lang === 'es' ? 'Servicio al cliente siempre disponible'
           : 'خدمة العملاء متاحة دائمًا',
    href: null,
    external: false,
  },
];

const distanceItems = (lang) => [
  {
    icon: Train,
    time: '700 m',
    desc: lang === 'fr' ? 'de la Gare de Casa-Port'
         : lang === 'en' ? 'from Casa-Port Station'
         : lang === 'es' ? 'de la Estación Casa-Port'
         : 'من محطة كازا-بورت',
  },
  {
    icon: Plane,
    time: '35 km',
    desc: lang === 'fr' ? "de l'aéroport Mohammed V"
         : lang === 'en' ? "from Mohammed V Airport"
         : lang === 'es' ? "del Aeropuerto Mohammed V"
         : 'من مطار محمد الخامس',
  },
  {
    icon: ShoppingBag,
    time: '4,7 km',
    desc: lang === 'fr' ? "d'Anfaplace Shopping Center"
         : lang === 'en' ? "from Anfaplace Shopping Center"
         : lang === 'es' ? "del Anfaplace Shopping Center"
         : 'من مركز أنفابليس التجاري',
  },
  {
    icon: TreePine,
    time: '15 min',
    desc: lang === 'fr' ? 'de la Corniche d\'Ain Diab'
         : lang === 'en' ? 'from Ain Diab Corniche'
         : lang === 'es' ? 'de la Corniche de Ain Diab'
         : 'من كورنيش عين الدياب',
  },
];

export default function Location({ translations, currentLang }) {
  const t = translations[currentLang].location;
  const contacts = contactItems(t, currentLang);
  const distances = distanceItems(currentLang);

  const handleMapClick = () => {
    const dest = encodeURIComponent(t.googleMapsDestination);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <ScrollReveal>
      <section id="location" className={styles.section}>
        <div className={styles.container}>
          {LANTERN_LEFT}
          {LANTERN_RIGHT}

          <div className={styles.header}>
            <span className={styles.badge}>
              {currentLang === 'fr' ? 'Notre Localisation'
               : currentLang === 'en' ? 'Our Location'
               : currentLang === 'es' ? 'Nuestra Ubicación'
               : 'موقعنا'}
            </span>
            <h2 className={styles.title}>
              {currentLang === 'fr' ? 'Au cœur de Casablanca'
               : currentLang === 'en' ? 'In the Heart of Casablanca'
               : currentLang === 'es' ? 'En el Corazón de Casablanca'
               : 'في قلب الدار البيضاء'}
            </h2>
            <div className={styles.ornament} />
            <p className={styles.subtitle}>{t.description}</p>
          </div>

          <div className={styles.grid}>
            {/* Left Column - Contact Info */}
            <div className={styles.contactColumn}>
              {contacts.map((item, idx) => {
                const Icon = item.icon;
                const content = (
                  <div className={styles.contactCard}>
                    <div className={styles.iconBox}>
                      <Icon size={22} />
                    </div>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener,noreferrer' : undefined}
                      className={styles.contactLink}
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={idx} className={styles.contactWrapper}>{content}</div>;
              })}

              <button onClick={handleMapClick} className={styles.mapButton}>
                <MapPin size={20} />
                <span>
                  {currentLang === 'fr' ? 'Itinéraire sur Google Maps'
                   : currentLang === 'en' ? 'Directions on Google Maps'
                   : currentLang === 'es' ? 'Itinerario en Google Maps'
                   : 'الاتجاهات على خرائط Google'}
                </span>
                <ExternalLink size={16} className={styles.btnIcon} />
              </button>
            </div>

            {/* Right Column - Map + Distance Cards */}
            <div className={styles.mapColumn}>
              <div className={styles.mapCard}>
                <div className={styles.mapWrapper}>
                  <iframe
                    src={t.mapEmbedUrl}
                    className={styles.map}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Maamoura Casablanca"
                  />
                  <div className={styles.mapMarker}>
                    <div className={styles.markerInner}>
                      <MapPin size={18} fill="#0c6c42" color="#b27f24" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.distanceGrid}>
                {distances.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className={styles.distanceCard}>
                      <div className={styles.distanceIconBox}>
                        <Icon size={20} />
                      </div>
                      <div className={styles.distanceInfo}>
                        <span className={styles.distanceTime}>{item.time}</span>
                        <span className={styles.distanceDesc}>{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
