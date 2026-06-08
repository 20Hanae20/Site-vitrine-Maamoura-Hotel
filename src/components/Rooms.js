'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Maximize2, ShieldCheck, ChevronRight, Bed, Bath, Snowflake, Wifi, Waves, Coffee, ChefHat, Tv, UtensilsCrossed, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './Rooms.module.css';

const amenityIcons = {
  'Lit King Size': Bed, 'Lit Queen Size': Bed, 'Lit simple': Bed,
  'Single bed': Bed, 'Queen size bed': Bed, 'King Size Bed': Bed,
  'Chambre parentale séparée': Bed, 'Deuxième chambre séparée': Bed,
  'Separate master bedroom': Bed, 'Second separate bedroom': Bed,
  '2 chambres': Bed, '2 bedrooms': Bed,
  'Salle de bain': Bath, 'Salle de bain privée': Bath, 'Salle de bain en tadelakt': Bath,
  'Salle de bain en marbre': Bath, 'Private bathroom': Bath, 'Marble bathroom': Bath,
  '2 salles de bain': Bath, '2 bathrooms': Bath, 'حمام': Bath, 'حمام خاص': Bath, 'حمامين': Bath,
  'Climatisation': Snowflake, 'Air conditioning': Snowflake, 'تكييف': Snowflake,
  'Wifi': Wifi, 'Wi-Fi': Wifi,
  'Vue patio': Waves, 'Vue jardin': Waves, 'Patio view': Waves, 'Garden view': Waves,
  'Balcon privé': Waves, 'Private balcony': Waves, 'Balcon': Waves,
  'Terrasse privée': Waves, 'Private terrace': Waves, 'Terrasse': Waves,
  'Coffee machine': Coffee, 'Cafetière': Coffee, 'Petit-déjeuner': Coffee, 'Breakfast': Coffee,
  'Room service': ChefHat, 'Service concierge': ChefHat, 'Concierge service': ChefHat,
  'Service majordome': ChefHat, 'Butler service': ChefHat,
  'Salon traditionnel marocain': UtensilsCrossed, 'Salon privé': UtensilsCrossed,
  'Private lounge': UtensilsCrossed, 'Living room with fireplace': UtensilsCrossed,
  'TV': Tv, 'Télévision': Tv,
};

function getAmenityIcon(amenity) {
  for (const [key, Icon] of Object.entries(amenityIcons)) {
    if (amenity.toLowerCase().includes(key.toLowerCase())) {
      return <Icon size={14} />;
    }
  }
  return <ShieldCheck size={14} />;
}

export default function Rooms({ translations, currentLang, onSelectRoom }) {
  const t = translations[currentLang].rooms;
  const [selectedTypeId, setSelectedTypeId] = useState(t.types[0].id);
  const [detailRoom, setDetailRoom] = useState(null);

  const selectedType = t.types.find(type => type.id === selectedTypeId);
  const roomsToDisplay = selectedType?.rooms || [];

  const handleBookNow = (roomNumber) => {
    if (onSelectRoom) {
      onSelectRoom(selectedTypeId, roomNumber);
    }
    setDetailRoom(null);
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
                          <span className={styles.amenityCardIcon}>{getAmenityIcon(amenity)}</span>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    <button className={styles.detailsBtn} onClick={() => setDetailRoom(room)}>
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

        {/* Modal Popup */}
        {detailRoom && (
          <div className={styles.overlay} onClick={() => setDetailRoom(null)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setDetailRoom(null)}>
                <X size={18} />
              </button>
              {/* Left: Image */}
              <div className={styles.modalImageWrap}>
                <Image
                  src={detailRoom.image}
                  alt={detailRoom.number}
                  className={styles.modalImg}
                  fill
                  sizes="50vw"
                  priority
                />
              </div>
              {/* Right: Content */}
              <div className={styles.modalContent}>
                <span className={styles.modalBadge}>{selectedType?.title}</span>
                <h2 className={styles.modalTitle}>{detailRoom.number}</h2>
                <p className={styles.modalDesc}>{selectedType?.description}</p>

                <div className={styles.modalStats}>
                  <div className={styles.modalStat}>
                    <Users size={18} className={styles.modalStatIcon} />
                    <div>
                      <span className={styles.modalStatVal}>{detailRoom.capacity}</span>
                      <span className={styles.modalStatLbl}>
                        {currentLang === 'fr' ? 'personnes' : currentLang === 'en' ? 'guests' : currentLang === 'es' ? 'personas' : 'أشخاص'}
                      </span>
                    </div>
                  </div>
                  <div className={styles.modalStat}>
                    <Maximize2 size={18} className={styles.modalStatIcon} />
                    <div>
                      <span className={styles.modalStatVal}>{detailRoom.area}m²</span>
                      <span className={styles.modalStatLbl}>
                        {currentLang === 'fr' ? 'Surface' : currentLang === 'en' ? 'Area' : currentLang === 'es' ? 'Superficie' : 'المساحة'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.modalAmenities}>
                  <h4 className={styles.modalAmenitiesTitle}>{t.amenities}</h4>
                  <div className={styles.modalAmenitiesList}>
                    {detailRoom.amenities.map((item, idx) => (
                      <div key={idx} className={styles.modalAmenity}>
                        <span className={styles.modalAmenityIcon}>{getAmenityIcon(item)}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.modalAction}>
                  <div className={styles.modalPrice}>
                    <span className={styles.modalPriceVal}>{detailRoom.price}</span>
                    <span className={styles.modalPriceLbl}>/ {t.pricePerNight}</span>
                  </div>
                  <button className={styles.modalReserveBtn} onClick={() => handleBookNow(detailRoom.number)}>
                    {t.reserve}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </ScrollReveal>
  );
}
