'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import styles from './Gallery.module.css';

export default function Gallery({ translations, currentLang }) {
  const t = translations[currentLang].gallery;
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'hotel',
      title: 'Patio Central',
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      category: 'rooms',
      title: 'Suite Familiale - Salon',
      url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      category: 'wellness',
      title: 'Hammam Traditionnel',
      url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      category: 'hotel',
      title: 'Architecture Zellige',
      url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      category: 'rooms',
      title: 'Suite Royale - Détail',
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      category: 'hotel',
      title: 'Jardin & Piscine',
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (id) => {
    const index = galleryItems.findIndex(item => item.id === id);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    let newIndex = lightboxIndex + direction;
    if (newIndex < 0) newIndex = galleryItems.length - 1;
    if (newIndex >= galleryItems.length) newIndex = 0;
    setLightboxIndex(newIndex);
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Art & Lumière</span>
          <h2 className={styles.title}>{t.title}</h2>
          <div className={styles.ornament}></div>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* Filter Navigation */}
        <div className={styles.filters}>
          <button 
            onClick={() => setActiveFilter('all')} 
            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.activeFilter : ''}`}
          >
            {t.all}
          </button>
          <button 
            onClick={() => setActiveFilter('hotel')} 
            className={`${styles.filterBtn} ${activeFilter === 'hotel' ? styles.activeFilter : ''}`}
          >
            {t.hotel}
          </button>
          <button 
            onClick={() => setActiveFilter('rooms')} 
            className={`${styles.filterBtn} ${activeFilter === 'rooms' ? styles.activeFilter : ''}`}
          >
            {t.rooms}
          </button>
          <button 
            onClick={() => setActiveFilter('wellness')} 
            className={`${styles.filterBtn} ${activeFilter === 'wellness' ? styles.activeFilter : ''}`}
          >
            {t.wellness}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.card} onClick={() => openLightbox(item.id)}>
              <img src={item.url} alt={item.title} className={styles.image} loading="lazy" />
              <div className={styles.overlay}>
                <Maximize2 size={24} className={styles.zoomIcon} />
                <h4 className={styles.cardTitle}>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={32} />
          </button>
          
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={36} />
          </button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryItems[lightboxIndex].url} 
              alt={galleryItems[lightboxIndex].title} 
              className={styles.lightboxImg} 
            />
            <div className={styles.caption}>
              {galleryItems[lightboxIndex].title}
            </div>
          </div>
          
          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            aria-label="Next Image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
