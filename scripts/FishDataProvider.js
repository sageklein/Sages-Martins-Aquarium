const fishCollection = [
	{
		image: "bluefish.jpeg",
		imageAlt: "Green",
		species: "Butter Fish",
		length: "6 in",
		food: "Biscuits",
		location: "4th Sea",
	},
	{
		image: "bluefish.jpg",
		imageAlt: "Green",
		species: "Orangello",
		length: "21 in",
		food: "Sugar",
		location: "The Sea",
	},
	{
		image: "orangefish.jpeg",
		imageAlt: "Green",
		species: "Aussie Slippery",
		length: "13 in",
		food: "small fish",
		location: "3rd Sea",
	},
];

export const useFish = () => {
return fishCollection.slice()
}