const pokemons = [
    {
        id: 25,
        name: "Pikachu",
        type: 'Electric',
        averageWeight: {
            value: 6.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    },
    {
        id: 4,
        name: "Charmander",
        type: 'Fire',
        averageWeight: {
            value: 8.5,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
    },
    {
        id: 10,
        name: "Caterpie",
        type: 'Bug',
        averageWeight: {
            value: 2.9,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
    },
    {
        id: 23,
        name: "Ekans",
        type: 'Poison',
        averageWeight: {
            value: 6.9,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
    },
    {
        id: 65,
        name: "Alakazam",
        type: 'Psychic',
        averageWeight: {
            value: 48.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
    },
    {
        id: 151,
        name: "Mew",
        type: 'Psychic',
        averageWeight: {
            value: 4.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
    },
    {
        id: 78,
        name: "Rapidash",
        type: 'Fire',
        averageWeight: {
            value: 95.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
    },
    {
        id: 143,
        name: "Snorlax",
        type: 'Normal',
        averageWeight: {
            value: 460.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
    },
    {
        id: 148,
        name: "Dragonair",
        type: 'Dragon',
        averageWeight: {
            value: 16.5,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
    },
    {
        id: 7,
        name: "Squirtle",
        type: 'Water',
        averageWeight: {
            value: 9.0,
            measurementUnit: "kg"
        },
        image: "https://archives.bulbagarden.net/media/upload/5/59/Spr_5b_007.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
    },
    {
        id: 5,
        name: "Charmeleon",
        type: 'Fire',
        averageWeight: {
            value: 19.0,
            measurementUnit: "kg"
        },
        image: "https://archives.bulbagarden.net/media/upload/0/09/Spr_5b_005.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)"
    },
    {
        id: 6,
        name: "Charizard",
        type: 'Fire/Flying',
        averageWeight: {
            value: 90.5,
            measurementUnit: "kg"
        },
        image: "https://archives.bulbagarden.net/media/upload/e/e1/Spr_5b_006.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)"
    },
    {
        id: 8,
        name: "Wartortle",
        type: 'Water',
        averageWeight: {
            value: 22.5,
            measurementUnit: "kg"
        },
        image: "https://archives.bulbagarden.net/media/upload/0/0b/Spr_5b_008.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)"
    },
    {
        id: 9,
        name: "Blastoise",
        type: 'Water',
        averageWeight: {
            value: 85.5,
            measurementUnit: "kg"
        },
        image: "https://archives.bulbagarden.net/media/upload/3/3d/Spr_5b_009.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)"
    },
    {
        id: 172,
        name: "Pichu",
        type: 'Eletric',
        averageWeight: {
            value: 2,
            measurementUnit: "kg"
        },
        image: "https://archives.bulbagarden.net/media/upload/0/03/Spr_5b2_172.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pichu_(Pok%C3%A9mon)"
    },
    {
        id: 26,
        name: "Raichu",
        type: 'Eletric/Psychic',
        averageWeight: {
            value: 30.0,
            measurementUnit: "kg"
        },
        image: "https://archives.bulbagarden.net/media/upload/0/0e/Spr_5b_026_f.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)"
    },
  ];
  
  export default pokemons;