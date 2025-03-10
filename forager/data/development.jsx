// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const mushrooms = [
    {
        id: 1,
        title: 'Death Cap',
        image: '/assets/DeathCap.png',
        alert: true,
        percentage: 97,
        badgeClass: 'eighty',
    },
    {
        id: 2,
        title: 'Paddy Straw',
        image: '/assets/PaddyStraw.png',
        alert: false,
        percentage: 90,
        badgeClass: '',
    },
    {
        id: 3,
        title: 'Destroying Angel',
        image: '/assets/DestroyingAngel.png',
        alert: true,
        percentage: 80,
        badgeClass: 'eighty',
    },
    {
        id: 4,
        title: 'False Death Cap',
        image: '/assets/FalseDeathCap.png',
        alert: true,
        percentage: 70,
        badgeClass: 'seventy',
    },
    {
        id: 5,
        title: 'Puffball',
        image: '/assets/Puffball.png',
        alert: false,
        percentage: 60,
        badgeClass: 'sixty',
    },
];

const filterData = {
    tags: ['Favorites', 'Recent'],
    regions: ['Texas', 'North America', 'Asia', 'Europe', 'Africa'],
    categories: ['Poisonous', 'Medicinal', 'Mythical', 'Good for Broths'],
};

const comparisonTableData = {
    userPhoto: {
        id: 'userPhoto',
        title: 'Your Photo',
        image: '/assets/BG.png',
        alert: false,
        percentage: null,
        badgeClass: '',
    },

    tableRows: [
        { label: 'Cap Shape', left: 'Flat', right: 'Flat' },
        { label: 'Cap Color', left: 'Brown', right: 'Yellow' },
        { label: 'Cap Texture', left: 'Smooth', right: 'Smooth' },
        { label: 'Gills Type', left: 'Free', right: 'Free' },
        { label: 'Gills Color', left: 'White', right: 'White' },
        { label: 'Stem Shape', left: 'Slender', right: 'Slender' },
        { label: 'Stem Color', left: 'White', right: 'White' },
        { label: 'Stem Ring', left: 'Absent', right: 'Absent' },
        { label: 'Habitat', left: '?', right: 'Near oak/beech' },
    ],
};

const singleMushroomData = {
    name: 'Death Cap',
    scientificName: 'Amanita phalloides',
    image: '/assets/DeathCap.png',
    facts: {
        'Cap Diameter': '5-15cm',
        'Gill Color': 'White',
        'Stem Color': 'White',
        Habitat: 'Temperate regions',
    },
};


// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export { warningMessage, dummyData, mushrooms, filterData, comparisonTableData, singleMushroomData }; // Requires import {warningMessage, dummyData} from './data/development.js';
