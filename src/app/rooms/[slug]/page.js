'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { translations } from '../../../locales/translations';
import { Users, Maximize2, ShieldCheck, ArrowLeft, Bed, Bath, Wifi, Snowflake, Coffee, Car, ChefHat, Waves, Tv, UtensilsCrossed, ArrowRight } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from './detail.module.css';

const amenityIcons = {
  'Lit King Size': Bed, 'Lit Queen Size': Bed, 'Lit simple': Bed,
  'Single bed': Bed, 'Queen size bed': Bed, 'King Size Bed': Bed,
  'سرير مفرد': Bed, 'سرير حجم كوين': Bed, 'سرير ملكي ضخم': Bed,
  '2 chambres': Bed, '2 bedrooms': Bed,
  'Chambre parentale séparée': Bed, 'Deuxième chambre séparée': Bed,
  'Separate master bedroom': Bed, 'Second separate bedroom': Bed,
  'غرفة ماستر منفصلة': Bed, 'غرفة أطفال منفصلة ثانية': Bed,
  'Salle de bain': Bath, 'Salle de bain privée': Bath, 'Salle de bain en tadelakt': Bath,
  'Salle de bain en marbre': Bath, 'Private bathroom': Bath, 'Marble bathroom': Bath,
  'Bathroom': Bath, 'حمام خاص': Bath, 'حمام': Bath,
  '2 salles de bain': Bath, '2 bathrooms': Bath, 'حمامين': Bath,
  'Climatisation': Snowflake, 'Air conditioning': Snowflake, 'تكييف': Snowflake, 'تكييف هواء': Snowflake,
  'Wifi': Wifi, 'Wi-Fi': Wifi,
  'Vue patio': Waves, 'Vue jardin': Waves, 'Patio view': Waves, 'Garden view': Waves,
  'إطلالة على البهو': Waves, 'إطلالة على الحديقة': Waves,
  'Balcon privé': Waves, 'Private balcony': Waves, 'Balcon': Waves,
  'Terrasse privée': Waves, 'Private terrace': Waves, 'Terrasse': Waves,
  'شرفة خاصة': Waves, 'شرفة مطلة على الحديقة': Waves,
  'Coffee machine': Coffee, 'Cafetière': Coffee,
  'Room service': ChefHat, 'Service concierge': ChefHat, 'Concierge service': ChefHat,
  'Service majordome': ChefHat, 'Butler service': ChefHat, 'خدمة خادم خاص': ChefHat,
  'Petit-déjeuner': Coffee, 'Breakfast': Coffee,
  'Salon traditionnel marocain': UtensilsCrossed, 'Salon privé': UtensilsCrossed,
  'Private lounge': UtensilsCrossed, 'صالون مغربي تقليدي': UtensilsCrossed,
  'صالون مع مدفأة': UtensilsCrossed, 'Living room with fireplace': UtensilsCrossed,
  'TV': Tv, 'Télévision': Tv,
};

function getAmenityIcon(amenity) {
  for (const [key, Icon] of Object.entries(amenityIcons)) {
    if (amenity.toLowerCase().includes(key.toLowerCase())) {
      return <Icon size={16} />;
    }
  }
  return <ShieldCheck size={16} />;
}

function DetailContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params?.slug || '';
  const langFromUrl = searchParams?.get('lang') || 'fr';
  const [language, setLanguage] = useState(langFromUrl);

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const parts = slug.split('-');
  const typeId = parts.slice(0, -1).join('-');
  const roomId = parts[parts.length - 1];

  const t = translations[language]?.rooms;
  const type = t?.types?.find((tp) => tp.id === typeId);
  const room = type?.rooms?.find((r) => r.id === roomId);

  if (!type || !room) {
    return (
      <div className={styles.notFound}>
        <h1>Room not found</h1>
        <Link href={`/?lang=${language}`}>Return to home</Link>
      </div>
    );
  }

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    const dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = newLang;
    router.replace(`/rooms/${slug}?lang=${newLang}`);
  };

  const reserveText = language === 'fr' ? 'Réserver maintenant' : language === 'en' ? 'Book now' : language === 'es' ? 'Reservar ahora' : 'احجز الآن';
  const backText = language === 'fr' ? 'Retour aux chambres' : language === 'en' ? 'Back to rooms' : language === 'es' ? 'Volver a las habitaciones' : 'العودة إلى الغرف';

  return (
    <>
      <Navbar
        translations={translations}
        currentLang={language}
        onLanguageChange={handleLanguageChange}
      />
      <main className={styles.main}>
        <div className={styles.splitLayout}>
          {/* Left: Image */}
          <div className={styles.imagePanel}>
            <Image
              src={room.image}
              alt={room.number}
              className={styles.roomImage}
              fill
              sizes="50vw"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className={styles.contentPanel}>
            <Link href={`/?lang=${language}#rooms`} className={styles.backBtn}>
              <ArrowLeft size={16} />
              <span>{backText}</span>
            </Link>

            <div className={styles.contentInner}>
              <span className={styles.roomBadge}>{type.title}</span>
              <h1 className={styles.roomTitle}>{room.number}</h1>
              <p className={styles.roomDesc}>{type.description}</p>

              {/* Stats */}
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <Users size={20} className={styles.statSvg} />
                  <div>
                    <span className={styles.statVal}>{room.capacity}</span>
                    <span className={styles.statLbl}>{language === 'fr' ? 'personnes' : language === 'en' ? 'guests' : language === 'es' ? 'personas' : 'أشخاص'}</span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <Maximize2 size={20} className={styles.statSvg} />
                  <div>
                    <span className={styles.statVal}>{room.area}m²</span>
                    <span className={styles.statLbl}>{language === 'fr' ? 'Surface' : language === 'en' ? 'Area' : language === 'es' ? 'Superficie' : 'المساحة'}</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className={styles.amenitiesSection}>
                <h3 className={styles.amenitiesTitle}>{t.amenities}</h3>
                <div className={styles.amenitiesList}>
                  {room.amenities.map((item, idx) => (
                    <div key={idx} className={styles.amenityTag}>
                      <span className={styles.amenityIcon}>{getAmenityIcon(item)}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price + Reserve */}
              <div className={styles.actionBar}>
                <div className={styles.priceBox}>
                  <span className={styles.priceVal}>{room.price}</span>
                  <span className={styles.priceLbl}>/ {t.pricePerNight}</span>
                </div>
                <button
                  className={styles.reserveBtn}
                  onClick={() => router.push(`/?lang=${language}#booking`)}
                >
                  <span>{reserveText}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer translations={translations} currentLang={language} />
    </>
  );
}

export default function RoomDetailPage() {
  return (
    <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
      <DetailContent />
    </Suspense>
  );
}
