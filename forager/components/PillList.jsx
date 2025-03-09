import React from 'react';
import Pill from './Pill';
import styles from '../styles/PillList.module.css';

export default function PillList({ heading, items = [] }) {
    return (
        <div className={styles.pillList}>
            {heading && <h3>{heading}</h3>}
            <div className={styles.pillContainer}>
                {items.map((item, idx) => (
                    <Pill key={idx} label={item} />
                ))}
            </div>
        </div>
    );
}
