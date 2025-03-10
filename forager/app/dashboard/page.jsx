'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import FilterSettings from '@/components/FilterSettings';
import MushroomList from '@/components/MushroomsList';
import PillList from '@/components/PillList';
import '../../styles/dashboard.module.css';
import { mushrooms } from '@/data/development';
import Header from '@/components/Header';

export default function DashboardPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    tags: new Set(),
    regions: new Set(),
    categories: new Set(),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilterItem = (category, item) => {
    setSelectedFilters((prev) => {
      const updated = new Set(prev[category]);
      updated.has(item) ? updated.delete(item) : updated.add(item);
      return { ...prev, [category]: updated };
    });
  };

  const myCollection = [
    ...selectedFilters.tags,
    ...selectedFilters.regions,
    ...selectedFilters.categories,
  ];

  const displayedMushrooms = searchQuery
    ? mushrooms.filter(mushroom =>
      mushroom.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : mushrooms;

  return (
    <div className="page">
      <Header title="Hi Chantelle!" />
      <SearchBar
        onFilterClick={() => setShowFilter(true)}
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onClear={() => setSearchQuery("")}
      />
      <div className="collectionHeader">
        <h2>My Collection</h2>
        <div className="tabs">
          <PillList items={myCollection} heading="" />
        </div>
      </div>
      <MushroomList mushrooms={displayedMushrooms} showPercentage={false} small={true} />
      {showFilter && (
        <FilterSettings
          onClose={() => setShowFilter(false)}
          selectedFilters={selectedFilters}
          toggleFilterItem={toggleFilterItem}
        />
      )}
      <NavBar />
    </div>
  );
}