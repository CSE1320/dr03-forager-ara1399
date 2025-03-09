import React from 'react';
import styles from '../styles/Pill.module.css';

export default function Pill({ label }) {
    return <span className={styles.pill}>{label}</span>;
}
