'use client';

import React, { useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import styles from './MusicPlayer.module.css';

export default function MusicPlayer({ currentLang }) {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load the YouTube Iframe API script if not already loaded
    let addedScript = false;
    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!window.YT && !existingScript) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.id = 'yt-iframe-api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else if (document.head) {
        document.head.appendChild(tag);
      } else {
        // Fallback: append to documentElement to avoid throwing
        document.documentElement.appendChild(tag);
      }
      addedScript = true;
    }

    let isMounted = true;

    const initPlayer = () => {
      // Create player object
      new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'jRuyMhUy_n8',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          loop: 1,
          playlist: 'jRuyMhUy_n8'
        },
        events: {
          onReady: (event) => {
            if (isMounted) {
              event.target.setVolume(volume * 100);
              setPlayer(event.target);
            }
          },
          onStateChange: (event) => {
            if (isMounted) {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
                setIsPlaying(false);
              }
            }
          }
        }
      });
    };

    // Poll for YT object readiness
    const checkYT = setInterval(() => {
      if (window.YT && window.YT.Player) {
        initPlayer();
        clearInterval(checkYT);
      }
    }, 100);

    return () => {
      // Cleanup: mark unmounted, clear interval, destroy player if present, and remove script if we added it
      isMounted = false;
      clearInterval(checkYT);

      try {
        if (player && typeof player.destroy === 'function') {
          player.destroy();
        }
      } catch (err) {
        // ignore cleanup errors
      }

      if (addedScript) {
        const s = document.getElementById('yt-iframe-api');
        if (s && s.parentNode) {
          s.parentNode.removeChild(s);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (player) {
      player.setVolume(volume * 100);
    }
  }, [volume, player]);

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (player) {
      player.setVolume(newVol * 100);
      if (newVol > 0 && isMuted) {
        player.unMute();
        setIsMuted(false);
      }
    }
  };

  return (
    <div className={styles.musicWidget}>
      {showTooltip && (
        <div className={styles.tooltip}>
          {currentLang === 'fr' && "Musique de Oud Paisible 🪕"}
          {currentLang === 'en' && "Peaceful Oud Music 🪕"}
          {currentLang === 'ar' && "طرب العود الهادئ 🪕"}
          {currentLang === 'es' && "Música Oud Relajante 🪕"}
        </div>
      )}
      
      <div className={styles.playerContainer}>
        <button 
          onClick={togglePlay} 
          className={`${styles.mainBtn} ${isPlaying ? styles.pulse : ''}`}
          aria-label="Play/Pause Background Music"
        >
          {isPlaying ? (
            <div className={styles.waveform}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          ) : (
            <Music className={styles.musicIcon} size={18} />
          )}
        </button>

        <div className={styles.controlsDrawer}>
          <button onClick={togglePlay} className={styles.controlBtn}>
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          
          <button onClick={toggleMute} className={styles.controlBtn}>
            {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05" 
            value={isMuted ? 0 : volume} 
            onChange={handleVolumeChange} 
            className={styles.volumeSlider}
          />
        </div>
      </div>

      {/* Off-screen YouTube Iframe container */}
      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <div id="youtube-player"></div>
      </div>
    </div>
  );
}
