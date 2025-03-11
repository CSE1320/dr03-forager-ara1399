'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import FilterSettings from '@/components/FilterSettings';
import MushroomList from '@/components/MushroomsList';
import PillList from '@/components/PillList';
import '../../styles/dashboard.module.css';
import { mushrooms } from '@/data/development';
import Header from '@/components/Header';
import DashboardHeader from '@/components/DashboardHeader';

export default function DashboardPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    tags: new Set(),
    regions: new Set(),
    categories: new Set(),
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [displayedMushrooms, setDisplayedMushrooms] = useState(mushrooms);

  useEffect(() => {
    let filteredMushrooms = mushrooms;

    if (selectedFilters.tags.has('Favorites')) {
      const storedFavorites = localStorage.getItem('favorites');
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      filteredMushrooms = filteredMushrooms.filter(mushroom =>
        favorites.includes(mushroom.title)
      );
    }

    if (searchQuery) {
      filteredMushrooms = filteredMushrooms.filter(mushroom =>
        mushroom.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setDisplayedMushrooms(filteredMushrooms);
  }, [selectedFilters, searchQuery]);

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

  return (
    <div className="page">
      <DashboardHeader />
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