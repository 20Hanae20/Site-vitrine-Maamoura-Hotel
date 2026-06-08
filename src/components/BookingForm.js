import React, { useState, useEffect } from 'react';
import { Calendar, Users, Star, Car, ArrowRight, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './BookingForm.module.css';

export default function BookingForm({ translations, currentLang, selectedRoom }) {
  const t = translations[currentLang].booking;

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('family'); // Default to Suite Familiale
  const [transfer, setTransfer] = useState('none');
  const [cityChauffeur, setCityChauffeur] = useState(false);
  const [moroccoChauffeur, setMoroccoChauffeur] = useState(false);
  const [error, setError] = useState('');

  // Sync selectedRoom prop with internal roomType state
  useEffect(() => {
    if (selectedRoom) {
      setRoomType(selectedRoom);
    }
  }, [selectedRoom]);


  // Get current date string for min date validation (YYYY-MM-DD)
  const getTodayDateString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleBook = (e) => {
    e.preventDefault();
    setError('');

    if (!checkIn || !checkOut) {
      setError(currentLang === 'fr' ? 'Veuillez sélectionner vos dates de séjour.' 
            : currentLang === 'en' ? 'Please select your stay dates.'
            : currentLang === 'es' ? 'Por favor, seleccione las fechas de estancia.'
            : 'يرجى تحديد تواريخ الإقامة.');
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      setError(currentLang === 'fr' ? 'La date de départ doit être après la date d\'arrivée.' 
            : currentLang === 'en' ? 'Check-out date must be after check-in date.'
            : currentLang === 'es' ? 'La fecha de salida debe ser posterior a la de entrada.'
            : 'تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول.');
      return;
    }

    // Translate room and transfer selection labels for the WhatsApp text
    const selectedRoomLabel = t.roomOptions[roomType];
    const selectedTransferLabel = t.airportOptions[transfer];
    const yesLabel = currentLang === 'fr' ? 'Oui (+ chauffeur)' : currentLang === 'en' ? 'Yes (+ chauffeur)' : currentLang === 'es' ? 'Sí (+ chófer)' : 'نعم (+ سائق)';
    const noLabel = currentLang === 'fr' ? 'Non' : currentLang === 'en' ? 'No' : currentLang === 'es' ? 'No' : 'لا';

    const cityLabel = cityChauffeur ? yesLabel : noLabel;
    const moroccoLabel = moroccoChauffeur ? yesLabel : noLabel;

    // Compose message using the localized template
    let message = t.whatsappMessage
      .replace('{room}', selectedRoomLabel)
      .replace('{checkIn}', checkIn)
      .replace('{checkOut}', checkOut)
      .replace('{guests}', guests)
      .replace('{transfer}', selectedTransferLabel)
      .replace('{cityChauffeur}', cityLabel)
      .replace('{moroccoChauffeur}', moroccoLabel);

    // WhatsApp target link (using default target phone number from footer)
    const phone = "212699779600"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(url, '_blank');
  };

  return (
    <ScrollReveal>
      <section id="booking" className={styles.bookingSection}>
        <div className={styles.sectionHeader}>
        </div>

        <div className={styles.card}>
        {error && (
          <div className={styles.errorBanner}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleBook} className={styles.form}>
          <div className={styles.grid}>
            {/* Dates Grid */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <Calendar size={14} className={styles.icon} />
                {t.checkIn}
              </label>
              <input 
                type="date" 
                min={getTodayDateString()} 
                value={checkIn} 
                onChange={(e) => setCheckIn(e.target.value)} 
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <Calendar size={14} className={styles.icon} />
                {t.checkOut}
              </label>
              <input 
                type="date" 
                min={checkIn || getTodayDateString()} 
                value={checkOut} 
                onChange={(e) => setCheckOut(e.target.value)} 
                className={styles.input}
                required
              />
            </div>

            {/* Guests */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <Users size={14} className={styles.icon} />
                {t.guests}
              </label>
              <select 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                className={styles.select}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            {/* Room type selector */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <Star size={14} className={styles.icon} />
                {t.roomType}
              </label>
              <select 
                value={roomType} 
                onChange={(e) => setRoomType(e.target.value)} 
                className={styles.select}
              >
                <option value="traditional">{t.roomOptions.traditional}</option>
                <option value="family">{t.roomOptions.family}</option>
                <option value="royal">{t.roomOptions.royal}</option>
              </select>
            </div>

            {/* Airport Transfer options */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <Car size={14} className={styles.icon} />
                {t.airportTransfer}
              </label>
              <select 
                value={transfer} 
                onChange={(e) => setTransfer(e.target.value)} 
                className={styles.select}
              >
                <option value="none">{t.airportOptions.none}</option>
                <option value="arrival">{t.airportOptions.arrival}</option>
                <option value="departure">{t.airportOptions.departure}</option>
                <option value="both">{t.airportOptions.both}</option>
              </select>
            </div>
          </div>

          {/* Additional Luxury Services (Chauffeurs) */}
          <div className={styles.addservices}>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  checked={cityChauffeur} 
                  onChange={(e) => setCityChauffeur(e.target.checked)} 
                  className={styles.checkbox}
                />
                <span className={styles.checkboxDesign}></span>
                <span className={styles.checkboxText}>{t.chauffeurCity}</span>
              </label>
            </div>

            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  checked={moroccoChauffeur} 
                  onChange={(e) => setMoroccoChauffeur(e.target.checked)} 
                  className={styles.checkbox}
                />
                <span className={styles.checkboxDesign}></span>
                <span className={styles.checkboxText}>{t.chauffeurMorocco}</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitBtn}>
              <span>{t.submit}</span>
              <ArrowRight size={16} className={styles.submitArrow} />
            </button>
          </div>
        </form>
      </div>
    </section>
    </ScrollReveal>
  );
}
