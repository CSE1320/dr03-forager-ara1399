import React from 'react';
import { filterData } from '../data/development';
import PillList from './PillList';
import styles from '../styles/FilterSettings.module.css';

export default function FilterSettings({ onClose, selectedFilters, toggleFilterItem }) {
  const categories = [
    { heading: "Tags", items: filterData.tags, category: "tags" },
    { heading: "Regions", items: filterData.regions, category: "regions" },
    { heading: "Category", items: filterData.categories, category: "categories" }
  ];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>FILTER</h2>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        {categories.map(({ heading, items, category }) => (
          <PillList
            key={category}
            heading={heading}
            items={items}
            category={category}
            selectedFilters={selectedFilters}
            toggleFilterItem={toggleFilterItem}
          />
        ))}
      </div>
    </div>
  );
}