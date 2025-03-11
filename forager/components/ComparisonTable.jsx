'use client';

import { useState, useRef } from 'react';
import React from 'react';
import { mushrooms, comparisonTableData } from '../data/development';
import MushroomCard from './MushroomCard';
import styles from '../styles/ComparisonTable.module.css';

export default function ComparisonTable() {
  const deathCap = mushrooms.find((m) => m.title === 'Death Cap');
  const { userPhoto, tableRows } = comparisonTableData;
  const [rows, setRows] = useState(tableRows);
  const inputRefs = useRef([]);

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };
    setRows(newRows);
  };

  const handleClearLeft = (index) => {
    handleRowChange(index, 'left', '');
    inputRefs.current[index].focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsRow}>
        <MushroomCard mushroom={userPhoto} showPercentage={false} small={false} largeTitle={true} />
        <MushroomCard mushroom={deathCap} showPercentage={true} small={false} largeTitle={true} />
      </div>
      <div className={styles.table}>
        {rows.map((row, idx) => (
          <div className={styles.row} key={idx}>
            <div className={styles.cellLeftWrapper}>
              <span
                className={styles.clearButton}
                onClick={() => handleClearLeft(idx)}
              >
                ✕
              </span>
              <input
                ref={(el) => (inputRefs.current[idx] = el)}
                className={styles.cellLeftInput}
                value={row.left}
                onChange={(e) => handleRowChange(idx, 'left', e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className={styles.cellLabel}>
              {row.label}
            </div>
            <div className={styles.cellRight}>
              {row.right}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}