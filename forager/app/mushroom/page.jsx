'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import MushroomList from '@/components/MushroomsList';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { mushrooms } from '@/data/development';
import Header from '@/components/Header';
import Mushroom from '@/components/Mushroom';
import styles from '../../styles/mushroom.module.css';
import MessageBox from '@/components/MessageBox';

export default function MushroomPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [popupType, setPopupType] = useState(null);
  useEffect(() => {
    if (searchParams.get('showAttention') === 'true') {
      setPopupType("red");
    }
  }, [searchParams]);

  const handleClosePopup = () => {
    setPopupType(null);
    router.replace('/mushroom');
  };

  const handleCardClick = (mushroom) => {
    setPopupType(mushroom.title === 'Death Cap' ? "red" : "green");
  };

  return (
    <div className={styles.mushroomPage}>
      <Header title="Match Results" />
      <div className={styles.reportContainer}>
        <span className={styles.expectedText}>Not what you expected?</span>
        <button className={styles.reportButton}>Report Error {'>'}</button>
      </div>
      <MessageBox messageKey="warning" dismissible={false} />

      {popupType && (
        <div className={styles.overlay}>
          <MessageBox
            messageKey={popupType === "red" ? "attention" : "percentages"}
            onClose={handleClosePopup}
            dismissible={true}
          />
        </div>
      )}

      <div className={styles.buttonContainer}>
        <Link href="/comparison" className={styles.compareLink}>
          Compare {'>'}
        </Link>
      </div>

      <Mushroom />

      <h2 className={styles.similarMatches}>Similar Matches</h2>
      <MushroomList
        mushrooms={mushrooms}
        showPercentage={true}
        excludeDeathCap={true}
        onCardClick={handleCardClick}
      />

      <NavBar />
    </div>
  );
}