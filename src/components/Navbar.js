'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar({ translations, currentLang, onLanguageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
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

  const selectLanguage = (lang) => {
    onLanguageChange(lang);
    setIsLangDropdownOpen(false);
  };

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'العربية' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={styles.logoContainer}>
          <svg className={styles.logoIcon} width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="14" height="14" rx="1" stroke="var(--primary-gold)" strokeWidth="1.2" transform="rotate(0 12 12)" />
            <rect x="5" y="5" width="14" height="14" rx="1" stroke="var(--primary-gold)" strokeWidth="1.2" transform="rotate(45 12 12)" />
            <circle cx="12" cy="12" r="3" stroke="var(--primary-gold)" strokeWidth="1" />
            <circle cx="12" cy="12" r="1" fill="var(--primary-gold)" />
          </svg>
          <div className={styles.logoTextWrapper}>
            <span className={styles.logoTitle}>Maamoura</span>
            <span className={styles.logoSubtitle}>{t.logoSubtitle}</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <ul className={styles.navLinks}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t.home}</a></li>
          <li><a href="#rooms" onClick={(e) => handleNavClick(e, 'rooms')}>{t.rooms}</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t.services}</a></li>
          <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>{t.gallery}</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.contact}</a></li>
        </ul>

        {/* Right Side Options */}
        <div className={styles.navActions}>
          {/* Language Selector */}
          <div className={styles.langSelector}>
            <button 
              className={styles.langBtn} 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              aria-label="Toggle Language"
            >
              <Globe size={18} />
              <span className={styles.activeLang}>{currentLang.toUpperCase()}</span>
            </button>

            {isLangDropdownOpen && (
              <ul className={styles.langDropdown}>
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button 
                      onClick={() => selectLanguage(lang.code)}
                      className={currentLang === lang.code ? styles.selectedLang : ''}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Reservation Button */}
          <a 
            href="#booking" 
            onClick={(e) => handleNavClick(e, 'booking')}
            className={styles.bookBtn}
          >
            <Calendar size={16} />
            <span>{t.book}</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            className={styles.hamburger} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <button 
          className={styles.closeBtn} 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Navigation Menu"
        >
          <X size={28} />
        </button>

        <ul className={styles.mobileNavLinks}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t.home}</a></li>
          <li><a href="#rooms" onClick={(e) => handleNavClick(e, 'rooms')}>{t.rooms}</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t.services}</a></li>
          <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>{t.gallery}</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.contact}</a></li>
          
          <div className={styles.mobileLangSection}>
            <p className={styles.mobileLangTitle}>
              <Globe size={16} style={{ marginRight: '6px' }} /> Language
            </p>
            <div className={styles.mobileLangGrid}>
              {languages.map((lang) => (
                <button 
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`${styles.mobileLangBtn} ${currentLang === lang.code ? styles.mobileLangBtnActive : ''}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}
