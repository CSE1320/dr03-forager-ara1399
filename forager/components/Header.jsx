'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // or next/router if you're in pages router
import styles from '../styles/Header.module.css';

export default function Header({ title }) {
  const router = useRouter();

  const handleBackClick = () => {
    // By default, go back in history. 
    // If you need a specific route, you can do router.push('/dashboard') etc.
    router.back();
  };

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={handleBackClick}>
        <img src="/assets/Back.png" alt="Back" />
      </button>
      <h1 className={styles.headerTitle}>{title}</h1>
    </div>
  );
}
