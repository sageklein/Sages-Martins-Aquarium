/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
	{
		givenName: "Bart",
		length: 5,
		diet: "crustaceans",
		species: "Clownfish",
		harvestLocation: "Petco",
		image: "bluefish.jpg",
	},
	{
		givenName: "Big Mac",
		length: 6,
		diet: "jellyfish",
		species: "Giant sunfish",
		harvestLocation: "Sam's Club Reef",
		image: "stripefish.jpeg",
	},
	{
		givenName: "Squigle",
		length: 2,
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck",
		image: "pinkfish.jpeg",
	},
	{
		givenName: "Hammy",
		length: 4,
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot",
		image: "orangefish.jpeg",
	},
	{
		givenName: "Tiny",
		length: 1,
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck",
		image: "bluefish.jpg",
	},
	{
		givenName: "Nemo",
		species: "Clownfish",
		length: 1.5,
		diet: "Copepods",
		harvestLocation: "Orlando, FL",
		image: "bluefish.jpg",
	},
	{
		givenName: "Torch",
		species: "Flame Angelfish",
		length: 3,
		diet: "Mealworms",
		harvestLocation: "San Jose, CA",
		image: "bluefish.jpg",
	},
	{
		givenName: "Rocky",
		species: "Blue Damselfish",
		length: 5,
		diet: "Copepods",
		harvestLocation: "Destin, FL",
		image: "bluefish.jpg",
	},
	{
		givenName: "Rudy",
		species: "Copperband Butterflyfish",
		length: "5",
		diet: "Mealworms",
		harvestLocation: "Costa Rica",
		image: "bluefish.jpg",
	},
	{
		givenName: "Simba",
		species: "Lionfish",
		length: 6,
		diet: "Mealworms",
		harvestLocation: "Argentina",
		image: "bluefish.jpg",
	},
	{
		givenName: "Mr. Freeze",
		species: "Blue Tang",
		length: 6,
		diet: "Mealworms",
		harvestLocation: "Costa Rica",
		image: "bluefish.jpg",
	},
	{
		givenName: "Frodo",
		species: "Yellow Tang",
		length: 15,
		diet: "Mealworms",
		harvestLocation: "Honolulu, HI",
		image: "bluefish.jpg",
	},
];

// export a function that will return a copy of the original array
// this uses the slice method to make the copy
// slice reference https://www.w3schools.com/jsref/jsref_slice_array.asp
export const useFish = () => {
    return fishCollection.slice();
}

export const makeMostHolyFish = () => {
	//3,6,9
	const mostHolyFishArray = [];

	for(const theFish of fishCollection){
		if(theFish.length % 3 === 0){
			mostHolyFishArray.push(theFish);
		}
	}
	console.log("mostHolyFishArray", mostHolyFishArray);
	return mostHolyFishArray;
}

export const makeSoldierFish = () => {
	//5,10,   20,
	const soldierArray = [];
	for(const fishObj of fishCollection){
		//divisible by 5 but don't include the 3
		if(fishObj.length % 5 === 0 && fishObj.length % 3 !== 0){
			soldierArray.push(fishObj);
		}

	}
	console.log("soldierArray", soldierArray);
	return soldierArray;
}

export const makeUnworthy = () => {
	//not divisible by 3 or 5
	const unworthyArray = [];
	for (const fishObj of fishCollection){
		if(fishObj.length % 5 !== 0 && fishObj.length % 3 !== 0){
			unworthyArray.push(fishObj);
		}
	}
	console.log("unworthyArray", unworthyArray);
	return unworthyArray;

}