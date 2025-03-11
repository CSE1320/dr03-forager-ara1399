'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css';

export default function Header({ title }) {
  const router = useRouter();

  const handleBackClick = () => {
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
