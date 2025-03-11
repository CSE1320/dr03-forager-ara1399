'use client';

import { useState } from 'react';
import React from 'react';
import styles from '../styles/Mushroom.module.css';
import { singleMushroomData } from '../data/development';

export default function Mushroom() {
    const { name, scientificName, image, text, facts, percentage } = singleMushroomData;
    const [added, setAdded] = useState(false);

    const handleAddClick = () => {
        const updateFavorites = (favorites) => {
            if (!favorites.includes(name)) {
                favorites.push(name);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
        };

        const stored = localStorage.getItem('favorites');
        const favorites = stored ? JSON.parse(stored) : [];
        updateFavorites(favorites);

        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt="Death Cap" className={styles.deathCap} />
                {name === 'Death Cap' && percentage && (
                    <div className={styles.danger}>
                        <div className={styles.dangerBubble}>
                            <img src="/assets/Warning.png" alt="Danger" className={styles.dangerIcon} />
                            {percentage}% Match
                        </div>
                        <img src="/assets/Danger.png" alt="Danger" className={styles.dangerIcon} />
                    </div>
                )}
            </div>

            <div className={styles.name}>
                <div className={styles.nameText}>
                    <span>{name}</span>
                    <span className={styles.scientificName}>{scientificName}</span>
                </div>
                <button
                    className={styles.addButton}
                    onClick={handleAddClick}
                >
                    {added ? '✓' : '+'}
                </button>
            </div>

            <div className={styles.factsBox}>
                <h3>Fast Facts</h3>
                <p>Cap Diameter: {facts['Cap Diameter']}</p>
                <p>Gill Color: {facts['Gill Color']}</p>
                <p>Stem Color: {facts['Stem Color']}</p>
                <p>Habitat: {facts['Habitat']}</p>
            </div>

            <p className={styles.additionalText}>{text}</p>
        </div>
    );
}