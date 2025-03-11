'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/MushroomsList.module.css';

export default function MushroomCard({ mushroom, showPercentage, largeTitle = false, small, onCardClick }) {
  const router = useRouter();
  const handleClick = () => {
    if (title === 'Death Cap') {
      router.push('/mushroom?showAttention=true');
    } else {
      if (onCardClick) {
        onCardClick(mushroom);
      }
    }
  };
  const { title, image, alert, percentage, badgeClass } = mushroom;
  return (
    <li className={styles.polaroidCard} onClick={handleClick}>
      <div className={`${styles.polaroid} ${small ? styles.smallPolaroid : ''}`}>
        <img src={image} alt={title} className={styles.polimg} />
        <div className={styles.badgeContainer}>
          {showPercentage && title === 'Death Cap' ? (
            <div className={styles.danger}>
              <div className={styles.dangerBubble}>
                <img src="/assets/Warning.png" alt="Warning" className={styles.warningIcon} />
                {percentage}% Match
              </div>
              <img src="/assets/Danger.png" alt="Danger" className={styles.dangerIcon} />
            </div>
          ) : (
            <>
              {showPercentage && (
                <div className={`${styles.badge} ${badgeClass ? styles[badgeClass] : ''}`}>
                  {percentage}%
                </div>
              )}
              {alert && (
                <img src="/assets/Alert.png" alt="Alert" className={styles.alertIcon} />
              )}
            </>
          )}

        </div>
      </div>
      <div className={`${styles.title} ${largeTitle ? styles.largeTitle : ''}`}>
        {title}
      </div>
    </li>
  );
}