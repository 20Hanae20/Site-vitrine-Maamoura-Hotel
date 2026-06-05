'use client';

import React, { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show loader for 2.2 seconds then fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 800); // match CSS fade-out animation length
      return () => clearTimeout(removeTimer);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.loaderContainer} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        {/* Elegant geometric Moroccan outline */}
        <div className={styles.starInsignia}>
          <div className={styles.starLine}></div>
          <div className={styles.starLine2}></div>
        </div>
        <h1 className={styles.title}>Hôtel Maamoura</h1>
        <div className={styles.divider}></div>
        <p className={styles.subtitle}>Casablanca</p>
        <div className={styles.spinner}>
          <div className={styles.spinnerBar}></div>
        </div>
      </div>
    </div>
  );
}
