import ComparisonTable from '@/components/ComparisonTable';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';

export default function MushroomComparisonPage() {
  return (
    <div className="page">
      <Header title="Compare" />
      <h1>Mushroom Comparison Page</h1>
      <ComparisonTable />
      <NavBar />
    </div>
  );
}
