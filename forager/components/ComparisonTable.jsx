import React from 'react';
import { mushrooms, comparisonTableData } from '../data/development';
import MushroomCard from './MushroomCard';
import styles from '../styles/ComparisonTable.module.css';

export default function ComparisonTable() {
  const deathCap = mushrooms.find((m) => m.title === 'Death Cap');
  const { userPhoto, tableRows } = comparisonTableData;

  return (
    <div className={styles.container}>

      {/* Two polaroid cards side by side */}
      <div className={styles.cardsRow}>
        {/* Left: no percentage bubble */}
        <MushroomCard mushroom={userPhoto} showPercentage={false} small={false} />

        {/* Right: show 97% bubble (if Death Cap has percentage=97) */}
        <MushroomCard mushroom={deathCap} showPercentage={true} small={false} />
      </div>

      {/* Comparison table */}
      <div className={styles.table}>
        {tableRows.map((row, idx) => (
          <div className={styles.row} key={idx}>
            <div className={styles.cellLeft}>{row.left}</div>
            <div className={styles.cellLabel}>{row.label}</div>
            <div className={styles.cellRight}>{row.right}</div>
          </div>
        ))}
      </div>
    </div>
  );
}