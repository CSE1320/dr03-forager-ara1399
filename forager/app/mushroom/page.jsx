import Link from 'next/link';
import NavBar from '../../components/NavBar';
import MushroomList from '@/components/MushroomsList';

export default function MushroomPage() {
  return (
    <div className="page">
      <h1>Mushroom Page</h1>
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>
      <MushroomList />
      <NavBar />
    </div>
  );
}
