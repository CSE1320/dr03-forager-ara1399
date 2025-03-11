import React from 'react';
import Link from 'next/link';
import styles from '../styles/PhotoSearch.module.css';

export default function PhotoSearch() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/dashboard">
          <button className={styles.backButton}>
            <img src="/assets/Back.png" alt="Back" />
          </button>
        </Link>
        <button className={styles.iconButton}>
          <img src="/assets/Flash.png" alt="Flash" />
        </button>
      </div>

      <div className={styles.focusSquare}></div>

      <div className={styles.bottomBar}>
        <Link href={`/dashboard`}>
          <button className={styles.iconButton}>
            <img src="/assets/Gallery.png" alt="Gallery" />
          </button>
        </Link>
        <Link href="/mushroom">
          <button className={styles.cameraButton}></button>
        </Link>
        <button className={styles.iconButton}>
          <img src="/assets/Retake.png" alt="Retake" />
        </button>
      </div>
    </div>
  );
}
