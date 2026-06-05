'use client';

import React from 'react';
import { Users, Bed, ShieldCheck, ChevronRight } from 'lucide-react';
import styles from './Rooms.module.css';

export default function Rooms({ translations, currentLang, onSelectRoom }) {
  const t = translations[currentLang].rooms;

  const roomImages = {
    traditional: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    family: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800",
    royal: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
  };

  const handleBookNow = (roomId) => {
    // Call the selection callback which handles updating booking form selection and scroll
    onSelectRoom(roomId);
  };

  return (
    <section id="rooms" className={styles.roomsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.badge}>Hébergements</span>
        <h2 className={styles.title}>{t.title}</h2>
        <div className={styles.ornament}></div>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.grid}>
        {t.types.map((room) => (
          <div 
            key={room.id} 
            className={`${styles.card} ${room.id === 'family' ? styles.featuredCard : ''}`}
          >
            {room.id === 'family' && (
              <div className={styles.featuredBadge}>
                {currentLang === 'fr' && "Idéal Famille"}
                {currentLang === 'en' && "Family Choice"}
                {currentLang === 'es' && "Ideal Familia"}
                {currentLang === 'ar' && "خيار العائلات"}
              </div>
            )}
            
            <div className={styles.imageWrapper}>
              <img 
                src={roomImages[room.id]} 
                alt={room.title}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.priceTag}>{room.price}</div>
            </div>

            <div className={styles.details}>
              <h3 className={styles.roomTitle}>{room.title}</h3>
              
              <p className={styles.desc}>{room.desc}</p>
              
              <div className={styles.specs}>
                <div className={styles.specItem}>
                  <Users size={16} className={styles.specIcon} />
                  <span>{t.maxGuests.replace('{count}', room.capacity)}</span>
                </div>
                <div className={styles.specItem}>
                  <Bed size={16} className={styles.specIcon} />
                  <span>{room.id === 'family' ? '2 Lits doubles + 1 Lit simple' : room.id === 'royal' ? '1 Lit King Size' : '1 Lit Queen Size'}</span>
                </div>
              </div>

              <div className={styles.featuresList}>
                {room.features.map((feat, index) => (
                  <div key={index} className={styles.featureTag}>
                    <ShieldCheck size={12} className={styles.checkIcon} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleBookNow(room.id)}
                className={`${styles.bookBtn} ${room.id === 'family' ? styles.featuredBtn : ''}`}
              >
                <span>{t.viewDetails}</span>
                <ChevronRight size={16} className={styles.btnArrow} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
