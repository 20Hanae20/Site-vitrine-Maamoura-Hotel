'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Maximize2, ShieldCheck, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './Rooms.module.css';

export default function Rooms({ translations, currentLang, onSelectRoom }) {
  const t = translations[currentLang].rooms;
  const [selectedTypeId, setSelectedTypeId] = useState(t.types[0].id);

  const selectedType = t.types.find(type => type.id === selectedTypeId);
  const roomsToDisplay = selectedType?.rooms || [];

  const handleBookNow = (roomNumber) => {
    if (onSelectRoom) {
      onSelectRoom(selectedTypeId, roomNumber);
    }
  };

  const getCapacityLabel = (capacity) => {
    if (capacity === 1) {
      return currentLang === 'fr' ? '1 personne' :
             currentLang === 'en' ? '1 guest' :
             currentLang === 'es' ? '1 persona' : '1 شخص';
    }
    return `${capacity} ${
      currentLang === 'fr' ? 'personnes' :
      currentLang === 'en' ? 'guests' :
      currentLang === 'es' ? 'personas' : 'أشخاص'
    }`;
  };

  return (
    <ScrollReveal>
      <section id="rooms" className={styles.roomsSection}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>
            {currentLang === 'fr' && "Hébergements"}
            {currentLang === 'en' && "Accommodations"}
            {currentLang === 'es' && "Alojamientos"}
            {currentLang === 'ar' && "الإقامة"}
          </span>
          <h2 className={styles.title}>{t.title}</h2>
          <div className={styles.ornament}></div>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* Type Filter Buttons */}
        <div className={styles.filterContainer}>
          {t.types.map((type) => (
            <button
              key={type.id}
              className={`${styles.filterBtn} ${selectedTypeId === type.id ? styles.filterBtnActive : ''}`}
              onClick={() => setSelectedTypeId(type.id)}
            >
              <span className={styles.filterBtnTitle}>{type.title}</span>
              <span className={styles.filterBtnDesc}>{type.description}</span>
            </button>
          ))}
        </div>

        {/* Type Description */}
        <div className={styles.typeHeader}>
          <h3 className={styles.typeTitle}>{selectedType?.title}</h3>
          <p className={styles.typeDescription}>{selectedType?.description}</p>
        </div>

        {/* Rooms Grid */}
        <div className={styles.roomsGrid}>
          {roomsToDisplay.map((room, index) => (
            <ScrollReveal key={room.id} delay={index * 0.08}>
              <div className={styles.roomCard}>
                {/* Image Container */}
                <div className={styles.imageContainer}>
                  <Image
                    src={room.image}
                    alt={room.number}
                    className={styles.roomImage}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className={styles.priceOverlay}>
                    <span className={styles.price}>{room.price}</span>
                    <span className={styles.priceLabel}>{t.pricePerNight}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h4 className={styles.roomNumber}>{room.number}</h4>

                  {/* Room Stats */}
                  <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                      <Users size={16} className={styles.statIcon} />
                      <span className={styles.statText}>{getCapacityLabel(room.capacity)}</span>
                    </div>
                    <div className={styles.stat}>
                      <Maximize2 size={16} className={styles.statIcon} />
                      <span className={styles.statText}>{room.area}m²</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className={styles.amenitiesContainer}>
                    <h5 className={styles.amenitiesTitle}>{t.amenities}</h5>
                    <div className={styles.amenitiesList}>
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className={styles.amenityItem}>
                          <ShieldCheck size={12} className={styles.amenityIcon} />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    <button className={styles.detailsBtn}>
                      <span>{t.viewDetails}</span>
                      <ChevronRight size={16} className={styles.btnIcon} />
                    </button>
                    <button
                      className={styles.reserveBtn}
                      onClick={() => handleBookNow(room.number)}
                    >
                      {t.reserve}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
