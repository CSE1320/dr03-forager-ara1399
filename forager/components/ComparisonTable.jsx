'use client';

import { useState } from 'react';
import React from 'react';
import { mushrooms, comparisonTableData } from '../data/development';
import MushroomCard from './MushroomCard';
import styles from '../styles/ComparisonTable.module.css';

export default function ComparisonTable() {
  const deathCap = mushrooms.find((m) => m.title === 'Death Cap');
  const { userPhoto, tableRows } = comparisonTableData;
  const [rows, setRows] = useState(tableRows);

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };
    setRows(newRows);
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardsRow}>
        <MushroomCard mushroom={userPhoto} showPercentage={false} small={false} />
        <MushroomCard mushroom={deathCap} showPercentage={true} small={false} />
      </div>
      <div className={styles.table}>
        {rows.map((row, idx) => (
          <div className={styles.row} key={idx}>
            <input
              className={styles.cellLeft}
              value={row.left}
              onChange={(e) => handleRowChange(idx, 'left', e.target.value)}
            />
            <div className={styles.cellLabel}>{row.label}</div>
            <input
              className={styles.cellRight}
              value={row.right}
              onChange={(e) => handleRowChange(idx, 'right', e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}