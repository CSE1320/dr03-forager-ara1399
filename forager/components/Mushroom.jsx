'use client';

import React from 'react';
import styles from '../styles/Mushroom.module.css';
import { singleMushroomData } from '../data/development';

export default function Mushroom() {
    const { name, scientificName, image, text, facts } = singleMushroomData;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt="Death Cap" />
            </div>

            <div className={styles.name}>
                <div className={styles.nameText}>
                    <span>{name}</span>
                    <span className={styles.scientificName}>{scientificName}</span>
                </div>
                <button className={styles.addButton}>+</button>
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