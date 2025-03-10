import React from 'react';
import styles from '../styles/SearchBar.module.css';
import { FaFilter, FaSearch } from 'react-icons/fa';

export default function SearchBar({ 
  onFilterClick, 
  searchValue, 
  onSearchChange, 
  onClear 
}) {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <div className={styles.inputContainer}>
          <FaSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search for a mushroom" 
            value={searchValue}
            onChange={onSearchChange}
          />
          {searchValue && (
            <button className={styles.clearButton} onClick={onClear}>
              X
            </button>
          )}
        </div>
        <FaFilter className={styles.filterIcon} onClick={onFilterClick} />
      </div>
    </div>
  );
}