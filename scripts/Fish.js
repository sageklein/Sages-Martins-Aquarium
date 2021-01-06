/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
        return `  
        <section class="fishList-card">
                <div class="card-container">
                <img class="fish-image" src="images/${fish.image}" alt="${fish.species}">
                </div>
                <ul>
                <li>Name: ${fish.givenName}</li>
                <li>Species: ${fish.species}</li>
                <li>Length: ${fish.length}</li>
                <li>Location: ${fish.location}</li>
                <li>Food: ${fish.food}</li>
                </ul>
        </section>`;
};
