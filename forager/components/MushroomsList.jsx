import React from 'react';
import MushroomCard from './MushroomCard';
import styles from '../styles/MushroomsList.module.css';

export default function MushroomList({ mushrooms = [], showPercentage = false, excludeDeathCap = false, small = false, onCardClick }) {
  const filteredMushrooms = excludeDeathCap
    ? mushrooms.filter(m => m.title !== 'Death Cap')
    : mushrooms;

  return (
    <div className={styles.mushroomList}>
      <ul className={styles.list}>
        {filteredMushrooms.map((mushroom) => (
          <MushroomCard
            key={mushroom.id}
            mushroom={mushroom}
            showPercentage={showPercentage}
            small={small}
            onCardClick={onCardClick}  // Pass down onCardClick
          />
        ))}
      </ul>
    </div>
  );
}
