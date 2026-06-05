'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ translations, currentLang }) {
  const t = translations[currentLang].hero;

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = roomsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Luxury video background URL representing serene Moroccan riad / courtyard pool
  const videoUrl = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054117ebecf9cb190204aa70ecaf636&profile_id=165&oauth2_token_id=57447761";

  return (
    <header id="home" className={styles.hero}>
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video 
          className={styles.video}
          autoPlay 
          loop 
          muted 
          playsInline 
          src={videoUrl}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <span className={styles.welcome}>{t.welcome}</span>
        <h1 className={styles.title}>{t.slogan}</h1>
        <p className={styles.subtitle}>{t.subSlogan}</p>
        
        <button onClick={scrollToRooms} className={styles.ctaBtn}>
          {t.cta}
        </button>
      </div>

      {/* Scroll Down Mouse Indicator */}
      <button onClick={scrollToBooking} className={styles.scrollIndicator} aria-label="Scroll Down">
        <span className={styles.mouse}>
          <span className={styles.wheel}></span>
        </span>
        <ChevronDown className={styles.arrow} size={20} />
      </button>
    </header>
  );
}
