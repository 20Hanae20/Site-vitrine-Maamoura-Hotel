'use client';

import React, { useState, useEffect } from 'react';
import { translations } from '../locales/translations';

// Components
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import MusicPlayer from '../components/MusicPlayer';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  const [language, setLanguage] = useState('fr');
  const [selectedRoom, setSelectedRoom] = useState('family');

  // React to language change to adjust document dir for Arabic RTL
  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const handleSelectRoom = (roomId) => {
    setSelectedRoom(roomId);
    
    // Smooth scroll to booking form
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

  return (
    <>
      {/* Luxury Loading Animation */}
      <Loader />

      {/* Floating Music Widget */}
      <MusicPlayer currentLang={language} />

      {/* Header / Navigation */}
      <Navbar 
        translations={translations} 
        currentLang={language} 
        onLanguageChange={setLanguage} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Welcome Hero Area with booking overlay */}
        <Hero 
          translations={translations} 
          currentLang={language} 
          selectedRoom={selectedRoom}
        />

        {/* Accommodation Section */}
        <Rooms 
          translations={translations} 
          currentLang={language} 
          onSelectRoom={handleSelectRoom}
        />

        {/* Private Driver / Chauffeur Services */}
        <Services 
          translations={translations} 
          currentLang={language} 
        />

        {/* Immersive Photo Gallery */}
        <Gallery 
          translations={translations} 
          currentLang={language} 
        />
      </main>

      {/* Footer Contact Info */}
      <Footer 
        translations={translations} 
        currentLang={language} 
      />
    </>
  );
}
