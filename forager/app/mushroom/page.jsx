import MushroomList from '@/components/MushroomsList';
import NavBar from '@/components/NavBar';
import '../../styles/mushroom.css';

export default function MushroomPage() {
  return (
    <div>
      <h1>Mushroom Collection</h1>
      <h2>Similar Matches</h2>
      {/* For similar matches, exclude Death Cap and show percentages */}
      <MushroomList showPercentage={true} excludeDeathCap={true} />
      <NavBar />
    </div>
  );
}
