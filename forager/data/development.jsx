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
    percentage: 97,
    facts: {
        'Cap Diameter': '5-15cm',
        'Gill Color': 'White',
        'Stem Color': 'White',
        Habitat: 'Temperate regions',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic accusamus possimus reiciendis itaque, eum omnis dicta provident laboriosam culpa harum nulla facere voluptates, nemo architecto quae corporis. Impedit, sint!',
};


export const messagesData = {
    warning: {
        title: 'WARNING',
        icon: '/assets/Warning.png',
        text: 'This is a toxic species, proceed with caution.',
        color: '#FF5050',
    },
    attention: {
        title: 'ATTENTION!',
        icon: '/assets/Warning.png',
        text: `Our system can make mistakes! 
  Remember to verify important information and use your own judgement 
  to determine if any mushroom is safe. Be sure to use the “Report Error” 
  button if you suspect a mistake.`,
        color: '#FF5050',
    },
    percentages: {
        title: 'Percentages',
        icon: '/assets/Warning.png',
        text: `Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        color: '#6BC591',
      },
};



// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export { warningMessage, dummyData, mushrooms, filterData, comparisonTableData, singleMushroomData }; // Requires import {warningMessage, dummyData} from './data/development.js';
