/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
	console.log("fish", fish);
	return `
        <section class="fishList-card">
            <div>
            <img class="fish-image" src="image/${fish.image}" alt="${fish.imageAlt}" />
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
