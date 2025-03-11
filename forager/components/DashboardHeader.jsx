import React from 'react';
import styles from '../styles/DashboardHeader.module.css';

export default function DashboardHeader() {
    return (
        <div className={styles.dashboardHeader}>
            <img
                src="/assets/MushroomIcon.png"
                alt="Mushroom Icon"
                className={styles.mushIcon}
            />
            <div className={styles.textContainer}>
                <h1 className={styles.greeting}>
                    <span className={styles.smallHi}>Hi,</span>
                    <br />
                    Chantelle!
                </h1>
            </div>
            <div className={styles.profileCircle}>C</div>
        </div>
    );
}
