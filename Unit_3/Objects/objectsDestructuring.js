//! Objects Destructuring
let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated', // key value pairs
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17' 
            },
            {
                episode_title: "Bart the Genius",
                aired: '1990-01-01'
            },
        ],
        "season two": [/* ... */],
        "season three": [/* ... */]
    },
    currently_running: true,
    characters: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ]
}

const { characters, seasons } = theSimpsons;
// console.log(characters);
characters.push('Neo');
// console.log(theSimpsons); 
characters[5] = 'Moe'; // modify this value to become correct or change it 
// console.log(theSimpsons);

const { currently_running : on_air } = theSimpsons;

// console.log(on_air);
// console.log(theSimpsons.currently_running);

//! Spread with Objects
const simpsonsCharacters= {
    simpsonHouse:  [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ],
    moesTavern: ['Moe', 'Barney']
};

const generalLocations = {
    park: 'statue',
    beach: 'beach',
    lake: '3 eyed fish'
}

const locations = {
    ...simpsonsCharacters, // brings the characters name into this object.
    dmv: [ 'Patty', 'Selma'],
    ...generalLocations // this is bringing down or converging the list without having to write everything out again
}

// console.log(locations);
console.log(locations.simpsonHouse);