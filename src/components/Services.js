'use client';

import React from 'react';
import { Plane, Compass, Map, CheckCircle2 } from 'lucide-react';
import styles from './Services.module.css';

export default function Services({ translations, currentLang }) {
  const t = translations[currentLang].services;

  const icons = [
    <Plane key="plane" className={styles.cardIcon} size={32} />,
    <Compass key="compass" className={styles.cardIcon} size={32} />,
    <Map key="map" className={styles.cardIcon} size={32} />
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      {/* Decorative Background Moroccan arch */}
      <div className={styles.bgDecoration}></div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Services d'Élite</span>
          <h2 className={styles.title}>{t.title}</h2>
          <div className={styles.ornament}></div>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.items.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                {icons[index]}
              </div>
              
              <span className={styles.highlightBadge}>{service.highlight}</span>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
              
              <div className={styles.bulletList}>
                {index === 0 && (
                  <>
                    <div className={styles.bulletItem}>
                      <CheckCircle2 size={14} className={styles.bulletIcon} />
                      <span>{currentLang === 'fr' ? 'Accueil personnalisé pancarte VIP' : 'Personalized welcome sign VIP'}</span>
                    </div>
                    <div className={styles.bulletItem}>
                      <CheckCircle2 size={14} className={styles.bulletIcon} />
                      <span>{currentLang === 'fr' ? 'Berlines & Van luxe climatisés' : 'Premium air-conditioned sedan & vans'}</span>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className={styles.bulletItem}>
                      <CheckCircle2 size={14} className={styles.bulletIcon} />
                      <span>{currentLang === 'fr' ? 'Disponibilité 8h - 20h' : 'Availability 8am - 8pm'}</span>
                    </div>
                    <div className={styles.bulletItem}>
                      <CheckCircle2 size={14} className={styles.bulletIcon} />
                      <span>{currentLang === 'fr' ? 'Chauffeur bilingue expérimenté' : 'Experienced bilingual driver'}</span>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className={styles.bulletItem}>
                      <CheckCircle2 size={14} className={styles.bulletIcon} />
                      <span>{currentLang === 'fr' ? 'Itinéraire modifiable en temps réel' : 'Real-time modifiable itinerary'}</span>
                    </div>
                    <div className={styles.bulletItem}>
                      <CheckCircle2 size={14} className={styles.bulletIcon} />
                      <span>{currentLang === 'fr' ? 'Toutes villes du Maroc desservies' : 'All cities across Morocco covered'}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
