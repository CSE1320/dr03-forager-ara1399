import React from 'react';
import styles from '../styles/Pill.module.css';

export default function Pill({ label, selected, onClick }) {
    return (
      <span
        className={`${styles.pill} ${selected ? styles.selected : ''}`}
        onClick={onClick}
      >
        {label}
      </span>
    );
  }
