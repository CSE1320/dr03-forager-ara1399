'use client';

import { useState } from 'react';
import MushroomList from '@/components/MushroomsList';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import FilterSettings from '@/components/FilterSettings';
import '../../styles/dashboard.css';
import PillList from '@/components/PillList';
import { filterData } from '@/data/development';

export default function DashboardPage() {
  const { myCollection } = filterData;
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };
  return (
    <div className="page">
      <div className="header">
        <h1>Hi, Chantelle!</h1>
      </div>

      <SearchBar onFilterClick={handleFilterClick} />

      <div className="collectionHeader">
        <h2>My Collection</h2>
        <div className="tabs">
          <PillList items={myCollection} />
        </div>
      </div>

      <MushroomList showPercentage={false} excludeDeathCap={false} small={true} />
      {showFilter && (
        <FilterSettings onClose={handleCloseFilter} />
      )}
      <NavBar />
    </div>
  );
}
