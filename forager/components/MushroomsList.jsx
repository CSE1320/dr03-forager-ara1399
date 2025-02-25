import React from 'react';
import styles from '../styles/MushroomsList.module.css';

export default function MushroomList() {
  return (
    <div className={styles.mushroomList}>
      <h2>Similar Matches</h2>
      <ul className={styles.list}>
        <li className={styles.polaroidCard}>
          <div className={styles.polaroid}>
            <img src="/assets/PaddyStraw.png" alt="Paddy Straw" />
            <div className={styles.badge}>90%</div>
          </div>
          <div className={styles.title}>Paddy Straw</div>
        </li>

        <li className={styles.polaroidCard}>
          <div className={styles.polaroid}>
            <img src="/assets/DestroyingAngel.png" alt="Destroying Angel" />
            <div className={`${styles.badge} ${styles.eighty}`}>80%
              <img src="/assets/Alert.png" alt="Alert" className={styles.alertIcon} />
            </div>
          </div>
          <div className={styles.title}>Destroying Angel</div>
        </li>

        <li className={styles.polaroidCard}>
          <div className={styles.polaroid}>
            <img src="/assets/FalseDeathCap.png" alt="False Death Cap" />
            <div className={`${styles.badge} ${styles.seventy}`}>70%
              <img src="/assets/Alert.png" alt="Alert" className={styles.alertIcon} />
            </div>
          </div>
          <div className={styles.title}>False Death Cap</div>
        </li>

        <li className={styles.polaroidCard}>
          <div className={styles.polaroid}>
            <img src="/assets/Puffball.png" alt="Puffball" />
            <div className={`${styles.badge} ${styles.sixty}`}>60%</div>
          </div>
          <div className={styles.title}>Puffball</div>
        </li>
      </ul>
    </div>
  );
}
