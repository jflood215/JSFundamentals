// Objects

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'},
            ]
            }
        },
        season2: {},
        season3: {}
    }

    console.log(netflix);

    console.log(netflix.season1.seasonInfo.episodeInfo[6].episodeName);

    // JSON --> JavaScript Object Notation

    let netflix = {
        id: 9,
        likes: 932,
        name: "The Good Place",
        seasonInfo: {
        season1: {
        numberOfEpisodes: 5,
        episodeInfo : [
        { episode: 1, episodeName: "Pilot"},
        { episode: 2, episodeName: "Flying"},
        { episode: 3, episodeName: "Tahani Al-Jamil"},
        { episode: 4, episodeName: "Jason Mendoza"},
        { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis"}
        ]
        },
        season2: {
        numberOfEpisodes: 6,
        episodeInfo : [
        { episode: 1, episodeName: "Everything is Great!"},
        { episode: 2, episodeName: "Dance Dance Resolution"},
        { episode: 3, episodeName: "Team Cockroach"},
        { episode: 4, episodeName: "Existential Crisis"},
        { episode: 5, episodeName: "The Trolley Problem"},
        { episode: 6, episodeName: "Janet and Michael"}
        ]
        },
        season3: {
        numberOfEpisodes: 5,
        episodeInfo : [
        { episode: 1, episodeName: "Everything Is Bonzer!"},
        { episode: 2, episodeName: "The Brainy Bunch"},
        { episode: 3, episodeName: "The Snowplow"},
        { episode: 4, episodeName: "Jeremy Bearimy"},
        { episode: 5, episodeName: "The Ballad of Donkey Doug"}
        ]
        }
        },
        description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
        };

        favoriteMovie = {
            nameOfMovie: 'Rounders',
            runTime : 121,
            genre: 'Drama', 
            characters: [
              { charOne: { name: 'Mike', age: 33, items: [{ itemOne: 'intelligence', itemTwo: 'risk taker'}]}},
              { charTwo: { name: 'Worm', age: 34, items: [{ itemOne: 'greedy', itemTwo: 'con artist'}]}}]}
              
              
              
              console.log(favoriteMovie.characters[1].charTwo.name);
              
            
          

          let me = {
            name: 'John',
            age: 35,
            job: 'WD',
            awesome: true
          }

          console.log(me);