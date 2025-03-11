import React from 'react';
import Pill from './Pill';
import styles from '../styles/PillList.module.css';

export default function PillList({
    heading,
    items = [],
    category,
    selectedFilters,
    toggleFilterItem,
}) {
    const isInteractive = typeof toggleFilterItem === 'function';

    return (
        <div className={styles.pillList}>
            {heading && <h3>{heading}</h3>}
            <div className={styles.pillContainer}>
                {items.map((item) => {
                    const isSelected = isInteractive
                        ? selectedFilters && category && selectedFilters[category]?.has(item)
                        : true;
                    return (
                        <Pill
                            key={item}
                            label={item}
                            selected={isSelected}
                            onClick={isInteractive ? () => toggleFilterItem(category, item) : undefined}
                        />
                    );
                })}
            </div>
        </div>
    );
}