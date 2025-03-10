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

  const [attentionVisible, setAttentionVisible] = useState(false);

  useEffect(() => {
    if (searchParams.get('showAttention') === 'true') {
      setAttentionVisible(true);
    }
  }, [searchParams]);

  const handleCloseAttention = () => {
    setAttentionVisible(false);
    // Remove ?showAttention=true from the URL
    router.replace('/mushroom');
  };
  return (
    <div className={styles.mushroomPage}>
      <Header title="Match Results" />
      {attentionVisible && (
        <div className={styles.overlay}>
          <MessageBox messageKey="attention" onClose={handleCloseAttention} dismissible={true} />
        </div>
      )}
      <MessageBox messageKey="warning" />
      <div className={styles.buttonContainer}>
        <Link href="/comparison" className={styles.compareLink}>
          Compare
        </Link>
      </div>
      <Mushroom />
      <h2 className={styles.similarMatches}>Similar Matches</h2>
      <MushroomList mushrooms={mushrooms} showPercentage={true} excludeDeathCap={true} />
      <NavBar />
    </div>
  );
}
