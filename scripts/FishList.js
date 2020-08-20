import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

export const FishList = () => {
	const contentElement = document.querySelector("#fishList");
	const fishes = useFish();

	// Generate all of the HTML for all of the fish
	let fishHTMLRepresentations = "";
	for (const fish of fishes) {
		fishHTMLRepresentations += Fish(fish);
	}
	console.log("fishHTMLRepresentations", fishHTMLRepresentations);
	// Add a section, and all of the fish to the DOM
	contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `;
};
