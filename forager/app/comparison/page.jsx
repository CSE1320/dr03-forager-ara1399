import ComparisonTable from '@/components/ComparisonTable';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import MessageBox from '../../components/MessageBox';

export default function MushroomComparisonPage() {
  return (
    <div className="page">
      <Header title="Compare" />
      <h1>Mushroom Comparison Page</h1>
      <MessageBox messageKey="warning" dismissible={false} />
      <ComparisonTable />
      <NavBar />
    </div>
  );
}
