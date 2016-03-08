/*
	fifteen.js
	Authors: Kyler Collins, Justin Lennox, Neal Raines, Neal Thacker
	Description: Contains the functions and event listeners for fifteen.html

 */

window.addEventListener("load", init);

function init() {
	//adds listener to shuffle button
	document.getElementById("shufflebutton").addEventListener("click", shuffle);

}

function shuffle() {
	alert("shuffling...");
}