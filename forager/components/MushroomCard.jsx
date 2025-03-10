'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/MushroomsList.module.css';

export default function MushroomCard({ mushroom, showPercentage, small }) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/mushroom?showAttention=true');
  };
  const { title, image, alert, percentage, badgeClass } = mushroom;
  return (
    <li className={styles.polaroidCard} onClick={handleClick}>
      <div className={`${styles.polaroid} ${small ? styles.smallPolaroid : ''}`}>
        <img src={image} alt={title} />
        <div className={styles.badgeContainer}>
          {showPercentage && (
            <div className={`${styles.badge} ${badgeClass ? styles[badgeClass] : ''}`}>
              {percentage}%
            </div>
          )}
          {alert && (
            <img src="/assets/Alert.png" alt="Alert" className={styles.alertIcon} />
          )}
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </li>
  );
}