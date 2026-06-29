'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import BookingForm from './BookingForm';
import styles from './Hero.module.css';

export default function Hero({ translations, currentLang, selectedRoom }) {
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

  return (
    <ScrollReveal duration={1}>
      <header id="home" className={styles.hero}>
        {/* Background Image is applied via CSS background-url */}
        <div className={styles.overlay}></div>

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
          <div className={styles.bookingWrapper}>
            <BookingForm 
              translations={translations} 
              currentLang={currentLang} 
              selectedRoom={selectedRoom}
            />
          </div>      </header>
    </ScrollReveal>
  );
}