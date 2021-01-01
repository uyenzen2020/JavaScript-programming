/*
Hot Pics of Danny DeVito!
I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

"anime"
"meme"
"vines"
"roasts"
"Danny DeVito"
If it does, return "NO!". Otherwise, return "Safe watching!".

Examples
preventDistractions("vines that butter my eggroll") ➞ "NO!"

preventDistractions("Hot pictures of Danny DeVito") ➞ "NO!"

preventDistractions("How to ace BC Calculus in 5 Easy Steps") ➞ "Safe watching!"

 */

function preventDistractions(str) {
	return str
		.split(" ")
		.map(
			(i) =>
				i == "anime" ||
				i == "vines" ||
				i == "meme" ||
				i == "roasts" ||
				i == "Danny" ||
				i == "DeVito"
		)
		.every((i) => i == false)
		? "Safe watching!"
		: "NO!";
}
console.log(preventDistractions("vines that butter my eggroll")); //NO!
console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps")); //Safe watching!
console.log(preventDistractions("Hot pictures of Danny DeVito")); //NO!
