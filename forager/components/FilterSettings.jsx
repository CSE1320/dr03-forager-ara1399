import React from 'react';
import { filterData } from '../data/development';
import PillList from './PillList';
import styles from '../styles/FilterSettings.module.css';

export default function FilterSettings({ onClose, selectedFilters, toggleFilterItem }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>FILTER</h2>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>

        <PillList
          heading="Tags"
          items={filterData.tags}
          category="tags"
          selectedFilters={selectedFilters}
          toggleFilterItem={toggleFilterItem}
        />

        <PillList
          heading="Regions"
          items={filterData.regions}
          category="regions"
          selectedFilters={selectedFilters}
          toggleFilterItem={toggleFilterItem}
        />

        <PillList
          heading="Category"
          items={filterData.categories}
          category="categories"
          selectedFilters={selectedFilters}
          toggleFilterItem={toggleFilterItem}
        />
      </div>
    </div>
  );
}