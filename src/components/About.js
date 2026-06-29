'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Heart, Gem, HandHeart, ChevronRight,
  Users, Building2, Star, Clock,
  Wifi, ShieldCheck,
  Snowflake, Tv, Bath, AlarmClock,
  MapPin, Sparkles, BedDouble, Smile
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './About.module.css';

const LANTERN = (
  <svg viewBox="0 0 60 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b27f24" stopOpacity="0.6"/>
        <stop offset="50%" stopColor="#dfa83d" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#b27f24" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="ag2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c6c42" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#0c6c42" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#0c6c42" stopOpacity="0.4"/>
      </linearGradient>
    </defs>
    <rect x="22" y="0" width="16" height="8" rx="2" fill="url(#ag)"/>
    <rect x="18" y="8" width="24" height="4" rx="1" fill="url(#ag2)"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="none" stroke="url(#ag)" strokeWidth="1.5"/>
    <path d="M15 12 Q15 12 18 30 L18 45 Q18 55 30 58 Q42 55 42 45 L42 30 Q45 12 45 12" fill="rgba(178,127,36,0.06)"/>
    <line x1="30" y1="12" x2="30" y2="52" stroke="rgba(223,168,61,0.3)" strokeWidth="0.5"/>
    <circle cx="30" cy="20" r="3" fill="rgba(223,168,61,0.4)"/>
    <circle cx="30" cy="30" r="2" fill="rgba(223,168,61,0.3)"/>
    <circle cx="30" cy="40" r="2.5" fill="rgba(223,168,61,0.35)"/>
    <rect x="20" y="55" width="20" height="3" rx="1" fill="url(#ag)"/>
    <path d="M25 58 L20 70 L40 70 L35 58" fill="rgba(178,127,36,0.15)" stroke="url(#ag)" strokeWidth="1"/>
    <rect x="22" y="70" width="16" height="8" rx="2" fill="url(#ag2)"/>
    <line x1="30" y1="78" x2="30" y2="90" stroke="url(#ag)" strokeWidth="1.5"/>
    <circle cx="30" cy="95" r="3" fill="url(#ag)" opacity="0.6"/>
  </svg>
);

function AnimatedCounter({ target, suffix = '', isPlus = false, isInline = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displayNumber = typeof target === 'number' ? count.toLocaleString() : target;

  if (isInline) {
    return (
      <span ref={ref} className={styles.statInline}>
        <span className={styles.statNumber}>
          {displayNumber}
          {isPlus && <span className={styles.statPlus}>+</span>}
        </span>
        {suffix && <span className={styles.statSuffix}> {suffix}</span>}
      </span>
    );
  }

  return (
    <span ref={ref} className={styles.statNumber}>
      {displayNumber}
      {isPlus && <span className={styles.statPlus}>+</span>}
      {suffix && <span className={styles.statSuffix}> {suffix}</span>}
    </span>
  );
}

const storyIcons = [MapPin, Sparkles, BedDouble, Smile];
const valueIcons = [Heart, Gem, HandHeart];
const statIcons = [Users, Building2, Star, Clock];

export default function About({ translations, currentLang }) {
  const t = translations[currentLang].about;
  const tInfo = translations[currentLang].about.info;
  const tEquipment = translations[currentLang].about.equipment;
  const tRooms = translations[currentLang].about.roomsAmenities;

  return (
    <ScrollReveal>
      <section id="about" className={styles.section}>
        <div className={styles.bgDecoration} />

        <div className={styles.lanternLeft}>{LANTERN}</div>
        <div className={styles.lanternRight}>{LANTERN}</div>

        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.badge}>{t.badge}</span>
            <h2 className={styles.title}>{t.title}</h2>
            <div className={styles.ornament} />
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>

          {/* Story - Two Columns */}
          <div className={styles.storyGrid}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageFrameCorner} />
                <div className={styles.imageFrameCorner2} />
                <Image
                  src="/images/lhotel.jpg"
                  alt="Hôtel Maamoura"
                  className={styles.aboutImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <div className={styles.imageAccent} />
            </div>
            <div className={styles.textCol}>
              <h3 className={styles.storyTitle}>{t.storyTitle}</h3>
              {t.storyParagraphs.map((p, i) => {
                const Icon = storyIcons[i];
                return (
                  <div key={i} className={styles.storyLine}>
                    <span className={styles.storyIconBox}><Icon size={16} /></span>
                    <p className={styles.storyDesc}>{p}</p>
                  </div>
                );
              })}
              <button className={styles.storyBtn}>
                <span>{t.storyBtn}</span>
                <ChevronRight size={16} className={styles.btnIcon} />
              </button>
            </div>
          </div>

          {/* Values */}
          <div className={styles.valuesSection}>
            <h3 className={styles.valuesTitle}>{t.valuesTitle}</h3>
            <div className={styles.valuesGrid}>
              {t.values.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <ScrollReveal key={i} delay={i * 0.12}>
                    <div className={styles.valueCard}>
                      <div className={styles.valueIconBox}>
                        <Icon size={28} />
                      </div>
                      <h4 className={styles.valueCardTitle}>{v.title}</h4>
                      <p className={styles.valueCardDesc}>{v.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsSection}>
            {t.stats.map((stat, i) => {
              const Icon = statIcons[i];
              const isInline = stat.suffix === '/7';
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={styles.statCard}>
                    <div className={styles.statIconRow}>
                      <Icon size={20} />
                    </div>
                    <AnimatedCounter
                      target={stat.target}
                      isPlus={stat.isPlus}
                      suffix={stat.suffix}
                      isInline={isInline}
                    />
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Practical Info */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h4 className={styles.infoCardTitle}>
                <Clock size={18} className={styles.infoCardIcon} />
                {tInfo.title}
              </h4>
              <ul className={styles.infoList}>
                {tInfo.items.map((item, i) => (
                  <li key={i} className={styles.infoItem}>
                    <span className={styles.infoDot} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h4 className={styles.infoCardTitle}>
                <Wifi size={18} className={styles.infoCardIcon} />
                {tEquipment.title}
              </h4>
              <ul className={styles.infoList}>
                {tEquipment.items.map((item, i) => (
                  <li key={i} className={styles.infoItem}>
                    <span className={styles.infoDot} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h4 className={styles.infoCardTitle}>
                <Building2 size={18} className={styles.infoCardIcon} />
                {tRooms.title}
              </h4>
              <ul className={styles.infoList}>
                {tRooms.items.map((item, i) => (
                  <li key={i} className={styles.infoItem}>
                    <span className={styles.infoDot} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
