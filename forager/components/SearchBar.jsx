import React from 'react';
import styles from '../styles/SearchBar.module.css';
import { FaFilter, FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search for a mushroom" />
      </div>
      <FaFilter className={styles.filterIcon} />
    </div>
  );
}
