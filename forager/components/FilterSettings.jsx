import React from 'react';
import { filterData } from '../data/development';
import PillList from './PillList';
import styles from '../styles/FilterSettings.module.css';

export default function FilterSettings({ onClose }) {
    return (
        <div className={styles.filterSettings}>
            <div className={styles.header}>
                <h2>FILTER</h2>
                <button className={styles.closeButton} onClick={onClose}>X</button>
            </div>

            <PillList heading="Tags" items={filterData.tags} />
            <PillList heading="Regions" items={filterData.regions} />
            <PillList heading="Category" items={filterData.categories} />
        </div>
    );
}