import React from 'react';
import Pill from './Pill';
import styles from '../styles/PillList.module.css';

export default function PillList({
    heading,
    items = [],
    category,          // e.g. "tags", "regions", or "categories"
    selectedFilters,   // interactive mode: a Set for the given category
    toggleFilterItem,  // interactive mode: function to toggle selection
}) {
    // If toggleFilterItem is not provided, we assume read-only mode and mark all items as selected.
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