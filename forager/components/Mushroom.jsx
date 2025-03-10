'use client'; // If using Next.js App Router, this enables onClick handlers

import React from 'react';
import styles from '../styles/Mushroom.module.css';

export default function Mushroom() {
    return (
        <div className={styles.container}>
            {/* Polaroid-style image block */}
            <div className={styles.imageContainer}>
                <img src="/assets/DeathCap.png" alt="Death Cap" />
            </div>

            {/* Mushroom name + scientific name */}
            <div className={styles.name}>
                <span>Death Cap</span>
                <button className={styles.addButton}>+</button>
            </div>
            <p className={styles.scientificName}>Amanita phalloides</p>

            {/* Fast Facts box */}
            <div className={styles.factsBox}>
                <p><strong>Cap Diameter:</strong> 5-15cm</p>
                <p><strong>Gill Color:</strong> White</p>
                <p><strong>Stem Color:</strong> White</p>
                <p><strong>Habitat:</strong> Temperate regions</p>
            </div>
        </div>
    );
}
