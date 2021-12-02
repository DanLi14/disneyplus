const characterCard = (data) => {
    //This takes the character JSON object produced by https://api.disneyapi.dev/characters/:{id}

    //And will explicitly call JSON tags within it. I don't think stringifying it matters?

    //This would ALSO work with something like this:
    /**
     *  response.json()
            .then((data) => {
                for (let obj of data) {
                    console.log(obj);
                    makeCard(obj);
                }
            })
            .catch((error) => {
                console.error(error);
            });
     */
    //But that's using a fetch request with all the baggage it entails.


    const imageData = data.imageURL;
    const charURL = data.sourceURL;
    const charName = data.name;
    //These three just pass directly in. They're.. clean so to speak.

    //The rest use functions for it explicitly.
    const checkFilms = (data) => {
        if (data.films != "[]") {
            return <li><p>Films: None</p></li>
        }
        //These functions do create the HTML tags though!
        else {
            return <li><p>Films: { data.films }</p></li>
        }
    }

    const films = checkFilms(data);

    const checkShortFilms = (data) => {
        if (data.shortFilms = "[]") {
            return <li><p>Short Films: None</p></li>
        }
        else {
            return <li><p>Short Films: {data.shortFilms}</p></li>
        }
    }
    
    const shortFilms = checkShortFilms(data);


    const checkTvShows = (data) => {
        if (data.tvShows = "[]") {
            return <li><p>Tv Shows: None</p></li>
        }
        else {
            return <li><p>Tv shows: {data.tvShows}</p></li>
        }
    }

    const tvShows = checkTvShows(data);

    const checkVideoGames = (data) => {
        if (data.videoGames = "[]") {
            return <li><p>Video Games: None</p></li>
        }
        else {
            return <li><p>Video Games: {data.videoGames}</p></li>
        }
    }

    const videoGames = checkVideoGames(data);

    const checkParkAttractions = (data) => {
        if (data.parkAttractions = "[]") {
            return <li><p>Disneyland attractions: None</p></li>
        }
        else {
            return <li><p>Disneyland attractions: {data.parkAttractions}</p></li>
        }
    }

    const parkAttractions = checkParkAttractions(data);

    const checkAllies = (data) => {
        if (data.allies = "[]") {
            return <li><p>Allies: None</p></li>
        }
        else {
            return <li><p>Allies: {data.allies}</p></li>
        }

    }

    const allies = checkAllies(data);

    const checkEnemies = (data) => {
        if (data.enemies = "[]") {
            return <li><p>Enemies: None</p></li>
        }
        else {
            return <li><p>Enemies: {data.enemies}</p></li>
        }

    }

    const enemies = checkEnemies(data);

    //It then just returns the full card within a div, which uses bootstrap.
    return (
        <div>
            <article class="card mb-3 ms-3 me-3">
                <div class="row">
                    <section class="col-md-3">
                        <img
                            class="image-size"
                            style={{ height: '300px', width: '300px' }}
                            src={imageData}
                            alt="orange"
                        />
                    </section>
                    <section class="col-md-9">
                        <div class="card-body">
                            <ul>
                                <li><p>Character name: {charName}</p></li>
                                <li><p></p></li>
                                {films}
                                {shortFilms}
                                {tvShows}
                                {videoGames}
                                {allies}
                                {parkAttractions}
                                {enemies}
                                <li><a href={charURL}>Learn more here!</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}