import MushroomList from '@/components/MushroomsList';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { mushrooms } from '@/data/development';
import '../../styles/mushroom.css';
import Header from '@/components/Header';
import Mushroom from '@/components/Mushroom';

export default function MushroomPage() {
  return (
    <div>
      <Header title="Match Results" />
      <h2>
        <Link href="/comparison">
          <button>Go to Mushroom Comparison Page</button>
        </Link>
      </h2>
      <Mushroom />
      <h2>Similar Matches</h2>
      <MushroomList mushrooms={mushrooms} showPercentage={true} excludeDeathCap={true} />
      <NavBar />
    </div>
  );
}
