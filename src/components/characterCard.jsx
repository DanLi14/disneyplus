const characterCard = (list) => {
    //This takes the character JSON object produced by https://api.disneyapi.dev/characters/:{id}

    //And will explicitly call JSON tags within it. I don't think stringifying it matters?

    //This would ALSO work with something like this:
    /**
     *  response.json()
            .then((list) => {
                for (let obj of list) {
                    console.log(obj);
                    makeCard(obj);
                }
            })
            .catch((error) => {
                console.error(error);
            });
     */
    //But that's using a fetch request with all the baggage it entails.


    // const imageData = list.imageURL;
    // const charURL = list.sourceURL;
    // const charName = list.name;
    // //These three just pass directly in. They're.. clean so to speak.

    // //The rest use functions for it explicitly.
    // const checkFilms = (list) => {
    //     if (list.films !== "[]") {
    //         return <li><p>Films: None</p></li>
    //     }
    //     //These functions do create the HTML tags though!
    //     else {
    //         return <li><p>Films: { list.films }</p></li>
    //     }
    // }

    // const films = checkFilms(list);

    // const checkShortFilms = (list) => {
    //     if (list.shortFilms !== "[]") {
    //         return <li><p>Short Films: None</p></li>
    //     }
    //     else {
    //         return <li><p>Short Films: {list.shortFilms}</p></li>
    //     }
    // }

    // const shortFilms = checkShortFilms(list);


    // const checkTvShows = (list) => {
    //     if (list.tvShows !== "[]") {
    //         return <li><p>Tv Shows: None</p></li>
    //     }
    //     else {
    //         return <li><p>Tv shows: {list.tvShows}</p></li>
    //     }
    // }

    // const tvShows = checkTvShows(list);

    // const checkVideoGames = (list) => {
    //     if (list.videoGames !== "[]") {
    //         return <li><p>Video Games: None</p></li>
    //     }
    //     else {
    //         return <li><p>Video Games: {list.videoGames}</p></li>
    //     }
    // }

    // const videoGames = checkVideoGames(list);

    // const checkParkAttractions = (list) => {
    //     if (list.parkAttractions !== "[]") {
    //         return <li><p>Disneyland attractions: None</p></li>
    //     }
    //     else {
    //         return <li><p>Disneyland attractions: {list.parkAttractions}</p></li>
    //     }
    // }

    // const parkAttractions = checkParkAttractions(list);

    // const checkAllies = (list) => {
    //     if (list.allies !== "[]") {
    //         return <li><p>Allies: None</p></li>
    //     }
    //     else {
    //         return <li><p>Allies: {list.allies}</p></li>
    //     }

    // }

    // const allies = checkAllies(list);

    // const checkEnemies = (list) => {
    //     if (list.enemies !== "[]") {
    //         return <li><p>Enemies: None</p></li>
    //     }
    //     else {
    //         return <li><p>Enemies: {list.enemies}</p></li>
    //     }

    // }

    // const enemies = checkEnemies(list);

    //It then just returns the full card within a div, which uses bootstrap.

    console.log(list)

    //   const getData = list.map(c =>
    //           <article class="card mb-3 ms-3 me-3">
    //           <div class="row">
    //               <section class="col-md-3">
    //                     <img
    //                         class="image-size"
    //                         style={{ height: '300px', width: '300px' }}
    //                         src={c.imageUrl}
    //                         alt={c.name}
    //                     />
    //               </section>
    //               <section class="col-md-9">
    //                   <div class="card-body">
    //                       <ul>
    //                           <li><p>Character name: {c.name}</p></li>
    //                             {c.films}
    //                             {c.shortFilms}
    //                             {c.tvShows}
    //                             {c.videoGames}
    //                             {c.allies}
    //                             {c.parkAttractions}
    //                             {c.enemies}
    //                           <li><a href={c.sourceUrl}>Learn more here!</a></li>
    //                         </ul>
    //                     </div>
    //                 </section>
    //             </div>
    //           </article>
    //       )

    //       {
    //     filteredList.map((tempVal) => (
    //       <div key={tempVal.id}>
    //         <h3>{tempVal.title}</h3>
    //         <input type="checkbox" checked={tempVal.completed} />
    //       </div>
    //     ))
    //   }


    return (
        <div>
            {/* {list.map((c) => (
              <article class="card mb-3 ms-3 me-3">
              <div class="row">
                  <section class="col-md-3">
                        <img
                            class="image-size"
                            style={{ height: '300px', width: '300px' }}
                            src={c.imageUrl}
                            alt={c.name}
                        />
                  </section>
                  <section class="col-md-9">
                      <div class="card-body">
                          <ul>
                              <li><p>Character name: {c.name}</p></li>
                                {c.films}
                                {c.shortFilms}
                                {c.tvShows}
                                {c.videoGames}
                                {c.allies}
                                {c.parkAttractions}
                                {c.enemies}
                              <li><a href={c.sourceUrl}>Learn more here!</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
              </article>)
          )} */}
            {/* <article class="card mb-3 ms-3 me-3">
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
            </article> */}
        </div>
    );
}

export default characterCard;