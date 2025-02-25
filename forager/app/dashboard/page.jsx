import NavBar from '../../components/NavBar';
import SearchBar from '@/components/SearchBar';
import '../../styles/dashboard.css';

export default function DashboardPage() {
  return (
    <div className="page">
      <div className="header">
        <h1>Hi, Chantelle!</h1>
      </div>

      <SearchBar />
      <div className="collectionHeader">
        <h2>My Collection</h2>
        <div className="tabs">
          <button>Texas</button>
          <button>Favorites</button>
        </div>
      </div>

      <ul className="list">
        <li className="polaroidCard">
          <div className="polaroid">
            <img src="/assets/DeathCap.png" alt="Death Cap" />
            <img className="alert" src="/assets/Alert.png" alt="Alert" />
          </div>
          <div className="title">Death Cap</div>
        </li>
        <li className="polaroidCard">
          <div className="polaroid">
            <img src="/assets/PaddyStraw.png" alt="Paddy Straw" />
          </div>
          <div className="title">Paddy Straw</div>
        </li>
        <li className="polaroidCard">
          <div className="polaroid">
            <img src="/assets/DestroyingAngel.png" alt="Destroying Angel" />
            <img className="alert" src="/assets/Alert.png" alt="Alert" />
          </div>
          <div className="title">Destroying Angel</div>
        </li>
        <li className="polaroidCard">
          <div className="polaroid">
            <img src="/assets/FalseDeathCap.png" alt="False Death Cap" />
            <img className="alert" src="/assets/Alert.png" alt="Alert" />
          </div>
          <div className="title">False Death Cap</div>
        </li>
        <li className="polaroidCard">
          <div className="polaroid">
            <img src="/assets/Puffball.png" alt="Puffball" />
          </div>
          <div className="title">Puffball</div>
        </li>
      </ul>

      <NavBar />
    </div>
  );
}
