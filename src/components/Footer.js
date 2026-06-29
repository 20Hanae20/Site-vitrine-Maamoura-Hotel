'use client';

import React from 'react';
import { MapPin, Phone, Mail, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './Footer.module.css';

export default function Footer({ translations, currentLang }) {
  const t = translations[currentLang].footer;
  const tNav = translations[currentLang].nav;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollReveal>
      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={styles.logoContainer}>
              <svg className={styles.logoIcon} width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="14" height="14" rx="1" stroke="var(--primary-gold)" strokeWidth="1.2" transform="rotate(0 12 12)" />
                <rect x="5" y="5" width="14" height="14" rx="1" stroke="var(--primary-gold)" strokeWidth="1.2" transform="rotate(45 12 12)" />
                <circle cx="12" cy="12" r="3" stroke="var(--primary-gold)" strokeWidth="1" />
                <circle cx="12" cy="12" r="1" fill="var(--primary-gold)" />
              </svg>
              <div className={styles.logoTextWrapper}>
                <span className={styles.logoTitle}>Maamoura</span>
                <span className={styles.logoSubtitle}>{tNav.logoSubtitle}</span>
              </div>
            </a>
            <p className={styles.brandDesc}>
              {currentLang === 'fr' && "Un havre de paix inspiré de l'héritage traditionnel de Casablanca, mariant le calme absolu et l'art de vivre."}
              {currentLang === 'en' && "A haven of peace inspired by the traditional heritage of Casablanca, blending absolute calm and the art of living."}
              {currentLang === 'es' && "Un remanso de paz inspirado en la herencia tradicional de Casablanca, que combina la calma absoluta y el arte de vivir."}
              {currentLang === 'ar' && "ملاذ للسلام مستوحى من التراث التقليدي للدار البيضاء، يجمع بين الهدوء المطلق وفن العيش الأصيل."}
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="TripAdvisor">
                <Award size={18} />
              </a>
            </div>
          </div>

          {/* Quick links Col */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>
              {currentLang === 'fr' && "Navigation"}
              {currentLang === 'en' && "Navigation"}
              {currentLang === 'es' && "Navegación"}
              {currentLang === 'ar' && "التنقل"}
            </h4>
            <ul className={styles.linksList}>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{tNav.home}</a></li>
              <li><a href="#rooms" onClick={(e) => handleNavClick(e, 'rooms')}>{tNav.rooms}</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{tNav.services}</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>{tNav.gallery}</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>{t.address}</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+212522452967">{t.phone}</a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <a href="mailto:hotelmaamoura@yahoo.com">{t.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.rights}>{t.rights}</p>
        </div>
      </div>
      </footer>
    </ScrollReveal>
  );
}
