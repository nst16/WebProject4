/*

	fifteen.js
	Authors: Kyler Collins, Justin Lennox, Neal Raines, Neal Thacker
	Description: Contains the functions and event listeners for fifteen.html

 */

window.addEventListener("load", init);

var emptyTop = 300;
var emptyLeft = 300;

function init() {
	//adds listener to shuffle button
	document.getElementById("shufflebutton").addEventListener("click", shuffle);
}

function shuffle() {
	//array of all div child elements
	var puzzleArray = document.getElementById("puzzlearea").getElementsByTagName("div");
	
	var newLeftPosInt;
	var newLeftPosString;
	var newTopPosInt;
	var newTopPosString;
	
	for (i = 0; i < 1000; i++)
	{
		var side = Math.floor((Math.random() * 4) + 1);
		//1 = top, 2 = right, 3 = bottom, 4 = left
		
		if (side == 1 && (0 <= (emptyTop - 100) <= 300))
		{
			emptyTop = emptyTop - 100;
			//code to find and swap element above empty space here
		}
		else if (side == 2 && (0 <= (emptyLeft + 100) <= 300))
		{
			emptyLeft = emptyLeft + 100;
			//code to find and swap element to the right of empty space here
		}
		else if (side == 3 && (0 <= (emptyTop + 100) <= 300))
		{
			emptyTop = emptyTop + 100;
			//code to find and swap element below empty space here
		}
		else if (side == 4 && (0 <= (emptyLeft - 100) <= 300))
		{
			emptyLeft = emptyLeft - 100;
			//code to find and swap element to the left of empty space here
		}
	}
}