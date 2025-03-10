'use client';

import React, { useState } from 'react';
import { messagesData } from '../data/development';
import styles from '../styles/MessageBox.module.css';

export default function MessageBox({ messageKey, onClose, dismissible = false }) {
    const [visible, setVisible] = useState(true);
    const { title, icon, text, color } = messagesData[messageKey] || {};

    if (!visible || !title) return null;

    const handleClose = () => {
        setVisible(false);
        if (dismissible && onClose) onClose();
    };

    return (
        <div className={styles.message} style={{ backgroundColor: color }}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <img src={icon} alt="icon" className={styles.icon} />
                    <h1>{title}</h1>
                </div>
                {dismissible && (
                    <button className={styles.closeButton} onClick={handleClose}>
                        X
                    </button>
                )}
            </div>
            <p>{text}</p>
        </div>
    );
}