import React from 'react';
import Link from 'next/link';
import styles from '../styles/PhotoSearch.module.css';

export default function PhotoSearch() {
  return (
    <div className={styles.container}>
      {/* Top bar overlay */}
      <div className={styles.topBar}>
      <Link href="/dashboard">
          <button className={styles.iconButton}>
            <img src="/assets/Back.png" alt="Back" />
          </button>
        </Link>
        <button className={styles.iconButton}>
          <img src="/assets/Flash.png" alt="Flash" />
        </button>
      </div>

      {/* Focus square in center */}
      <div className={styles.focusSquare}></div>

      {/* Bottom bar overlay */}
      <div className={styles.bottomBar}>
        <button className={styles.iconButton}>
          <img src="/assets/Gallery.png" alt="Gallery" />
        </button>
        <Link href="/dashboard">
            <button className={styles.cameraButton}></button>
        </Link>
        <button className={styles.iconButton}>
          <img src="/assets/Retake.png" alt="Retake" />
        </button>
      </div>
    </div>
  );
}
