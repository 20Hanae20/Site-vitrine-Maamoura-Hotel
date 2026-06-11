'use client';

import React, { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import styles from './Gallery.module.css';

const LANTERN = (
  <svg viewBox="0 0 60 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b27f24" stopOpacity="0.6"/>
        <stop offset="50%" stopColor="#dfa83d" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#b27f24" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="gg2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c6c42" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#0c6c42" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#0c6c42" stopOpacity="0.4"/>
      </linearGradient>
    </defs>
    <rect x="22" y="0" width="16" height="8" rx="2" fill="url(#gg)"/>
    <rect x="18" y="8" width="24" height="4" rx="1" fill="url(#gg2)"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="none" stroke="url(#gg)" strokeWidth="1.5"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="rgba(178,127,36,0.06)"/>
    <line x1="30" y1="12" x2="30" y2="52" stroke="rgba(223,168,61,0.3)" strokeWidth="0.5"/>
    <circle cx="30" cy="20" r="3" fill="rgba(223,168,61,0.4)"/>
    <circle cx="30" cy="30" r="2" fill="rgba(223,168,61,0.3)"/>
    <circle cx="30" cy="40" r="2.5" fill="rgba(223,168,61,0.35)"/>
    <rect x="20" y="55" width="20" height="3" rx="1" fill="url(#gg)"/>
    <path d="M25 58 L20 70 L40 70 L35 58" fill="rgba(178,127,36,0.15)" stroke="url(#gg)" strokeWidth="1"/>
    <rect x="22" y="70" width="16" height="8" rx="2" fill="url(#gg2)"/>
    <line x1="30" y1="78" x2="30" y2="90" stroke="url(#gg)" strokeWidth="1.5"/>
    <circle cx="30" cy="95" r="3" fill="url(#gg)" opacity="0.6"/>
  </svg>
);

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Gallery({ translations, currentLang }) {
  const t = translations[currentLang].gallery;
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    { id: 1, category: 'hotel', title: 'Patio Central avec Fontaine', url: "/images/Hotele/hot1.jpg" },
    { id: 2, category: 'rooms', title: 'Suite Familiale - Salon Privé', url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200" },
    { id: 3, category: 'wellness', title: 'Hammam Traditionnel Marocain', url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200" },
    { id: 4, category: 'hotel', title: 'Zellige & Architecture', url: "/images/Hotele/hot2.jpg" },
    { id: 5, category: 'rooms', title: 'Suite Royale - Chambre', url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200" },
    { id: 6, category: 'hotel', title: 'Jardin & Patio', url: "/images/Hotele/hot3.jpg" },
    { id: 7, category: 'hotel', title: 'Entrée & Réception', url: "/images/Hotele/hot4.jpg" },
    { id: 10, category: 'hotel', title: 'Entrée & Réception', url: "/images/Hotele/hot5.jpg" },
        { id: 11, category: 'hotel', title: 'Entrée & Réception', url: "/images/Hotele/hot6.jpg" },


    { id: 8, category: 'rooms', title: 'Chambre Double - Vue Patio', url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200" },
    { id: 9, category: 'wellness', title: 'Salon de Détente', url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200" },
  ];

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const currentItem = filtered[currentIndex] || filtered[0];

  const goTo = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const goNext = useCallback(() => {
    if (filtered.length === 0) return;
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    if (filtered.length === 0) return;
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
    setDirection(0);
  };

  const openLightbox = (id) => {
    const index = galleryItems.findIndex(item => item.id === id);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (dir) => {
    if (lightboxIndex === null) return;
    let newIndex = lightboxIndex + dir;
    if (newIndex < 0) newIndex = galleryItems.length - 1;
    if (newIndex >= galleryItems.length) newIndex = 0;
    setLightboxIndex(newIndex);
  };

  return (
    <ScrollReveal>
      <section id="gallery" className={styles.section}>
        <div className={styles.bgDecoration} />
        <div className={styles.lanternLeft}>{LANTERN}</div>
        <div className={styles.lanternRight}>{LANTERN}</div>

        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.badge}>Art & Lumière</span>
            <h2 className={styles.title}>{t.title}</h2>
            <div className={styles.ornament} />
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>

          {/* Filter Buttons */}
          <div className={styles.filters}>
            {['all', 'hotel', 'rooms', 'wellness'].map(f => (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.activeFilter : ''}`}
              >
                {f === 'all' ? t.all : f === 'hotel' ? t.hotel : f === 'rooms' ? t.rooms : t.wellness}
              </button>
            ))}
          </div>

          {/* Carousel */}
          {filtered.length > 0 && (
            <div className={styles.carousel}>
              <button onClick={goPrev} className={`${styles.arrow} ${styles.arrowLeft}`} aria-label="Previous">
                <ChevronLeft size={22} />
              </button>

              <div className={styles.stage}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentItem.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className={styles.slide}
                  >
                    <div className={styles.imageWrap} onClick={() => openLightbox(currentItem.id)}>
                      <img src={currentItem.url} alt={currentItem.title} className={styles.image} />
                      <div className={styles.imageOverlay}>
                        <Maximize2 size={22} className={styles.zoomIcon} />
                      </div>
                      <div className={styles.imageCaption}>
                        <span>{currentItem.title}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button onClick={goNext} className={`${styles.arrow} ${styles.arrowRight}`} aria-label="Next">
                <ChevronRight size={22} />
              </button>

              {/* Dots */}
              <div className={styles.dots}>
                {filtered.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => goTo(i)}
                    className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* View All Button */}
          <div className={styles.viewAllWrap}>
            <button onClick={() => openLightbox(filtered[0]?.id)} className={styles.viewAllBtn}>
              <ImageIcon size={16} />
              <span>
                {currentLang === 'fr' ? 'Voir toutes les photos'
                 : currentLang === 'en' ? 'View all photos'
                 : currentLang === 'es' ? 'Ver todas las fotos'
                 : 'عرض جميع الصور'}
              </span>
              <ChevronRight size={16} className={styles.viewAllIcon} />
            </button>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close">
              <X size={32} />
            </button>
            <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }} aria-label="Previous">
              <ChevronLeft size={32} />
            </button>
            <div className={styles.lbContent} onClick={(e) => e.stopPropagation()}>
              <img src={galleryItems[lightboxIndex].url} alt={galleryItems[lightboxIndex].title} className={styles.lbImg} />
              <div className={styles.lbCaption}>{galleryItems[lightboxIndex].title}</div>
            </div>
            <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }} aria-label="Next">
              <ChevronRight size={32} />
            </button>
            <div className={styles.lbCounter}>
              {lightboxIndex + 1} / {galleryItems.length}
            </div>
          </div>
        )}
      </section>
    </ScrollReveal>
  );
}
