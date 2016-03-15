/*
	fifteen.js
	Authors: Kyler Collins, Justin Lennox, Neal Raines, Neal Thacker
	Description: Contains the functions and event listeners for fifteen.html
 */

var emptyTop = 300;
var emptyLeft = 300;
var square1;
var square2;
var square3;
var square4;
var square5;
var square6;
var square7;
var square8;
var square9;
var square10;
var square11;
var square12;
var square13;
var square14;
var square15;
var square16;

var puzzleArray;

window.addEventListener("load", init);



function init() {
	//adds listener to shuffle button
	puzzleArray = document.getElementById("puzzlearea").getElementsByTagName("div");
	document.getElementById("shufflebutton").addEventListener("click", shuffle);
	setSquareVariables();
	addSquareListeners();
	setSquarePositions();
}

function shuffle() {
	var i;
	for(i = 0; i < 500; i++)
	{
		var square = Math.floor(Math.random() * 15);
		puzzleArray[square].click();
	}
}


function MouseOverSquare(squareNumber){
	if(CheckNeighborEmpty(squareNumber)){
		highlight(squareNumber);
	}
}

function MouseOffSquare(squareNumber){
	unhighlight(squareNumber);
}

function ClickSquare(squareNumber){
	move(squareNumber);
}

function highlight(squareNumber){
	puzzleArray[squareNumber - 1].style.borderColor = "red";
	puzzleArray[squareNumber - 1].style.color = "red";
}

function unhighlight(squareNumber){
	puzzleArray[squareNumber - 1].style.borderColor = "black";
	puzzleArray[squareNumber - 1].style.color = "black";
}

function move(squareNumber){
	if(CheckNeighborEmpty(squareNumber)){
		//create temp var for position
		var squareLeft = parseInt(puzzleArray[squareNumber - 1].style.left);
		var squareTop = parseInt(puzzleArray[squareNumber - 1].style.top);
		//alert(puzzleArray[squareNumber - 1].style.left);

		//move to empty position
		puzzleArray[squareNumber - 1].style.left = emptyLeft + "px";
		puzzleArray[squareNumber - 1].style.top = emptyTop + "px";

		//update where empty position is
		emptyLeft = squareLeft;
		emptyTop = squareTop;
	}
}

function CheckNeighborEmpty(squareNumber){

	//check if in same column
	if(parseInt(puzzleArray[squareNumber - 1].style.left) == emptyLeft)
	{
		var distanceTop = Math.abs(parseInt(puzzleArray[squareNumber - 1].style.top) - emptyTop)
		//check if 100 away row-wise
		if(distanceTop <= 100)
		{
			return true;
		}
	}

	//check if same row
	if(parseInt(puzzleArray[squareNumber - 1].style.top) == emptyTop)
	{
		var distanceLeft = Math.abs(parseInt(puzzleArray[squareNumber - 1].style.left) - emptyLeft)
		//check if 100 away column-wise
		if(distanceLeft <= 100)
		{
			return true;
		}
	}

}

function setSquareVariables(){
	square1 = document.getElementById("puzzlearea").getElementsByTagName("div")[0];
	square2 = document.getElementById("puzzlearea").getElementsByTagName("div")[1];
	square3 = document.getElementById("puzzlearea").getElementsByTagName("div")[2];
	square4 = document.getElementById("puzzlearea").getElementsByTagName("div")[3];
	square5 = document.getElementById("puzzlearea").getElementsByTagName("div")[4];
	square6 = document.getElementById("puzzlearea").getElementsByTagName("div")[5];
	square7 = document.getElementById("puzzlearea").getElementsByTagName("div")[6];
	square8 = document.getElementById("puzzlearea").getElementsByTagName("div")[7];
	square9 = document.getElementById("puzzlearea").getElementsByTagName("div")[8];
	square10 = document.getElementById("puzzlearea").getElementsByTagName("div")[9];
	square11 = document.getElementById("puzzlearea").getElementsByTagName("div")[10];
	square12 = document.getElementById("puzzlearea").getElementsByTagName("div")[11];
	square13 = document.getElementById("puzzlearea").getElementsByTagName("div")[12];
	square14 = document.getElementById("puzzlearea").getElementsByTagName("div")[13];
	square15 = document.getElementById("puzzlearea").getElementsByTagName("div")[14];
}

function addSquareListeners(){
	square1.addEventListener("mouseover", function(){
		MouseOverSquare(1);
	});
	square1.addEventListener("mouseout", function(){
		MouseOffSquare(1);
	});
	square1.addEventListener("click", function(){
		ClickSquare(1);
	});
	square2.addEventListener("mouseover", function(){
		MouseOverSquare(2);
	});
	square2.addEventListener("mouseout", function(){
		MouseOffSquare(2);
	});
	square2.addEventListener("click", function(){
		ClickSquare(2);
	});
	square3.addEventListener("mouseover", function(){
		MouseOverSquare(3);
	});
	square3.addEventListener("mouseout", function(){
		MouseOffSquare(3);
	});
	square3.addEventListener("click", function(){
		ClickSquare(3);
	});
	square4.addEventListener("mouseover", function(){
		MouseOverSquare(4);
	});
	square4.addEventListener("mouseout", function(){
		MouseOffSquare(4);
	});
	square4.addEventListener("click", function(){
		ClickSquare(4);
	});
	square5.addEventListener("mouseover", function(){
		MouseOverSquare(5);
	});
	square5.addEventListener("mouseout", function(){
		MouseOffSquare(5);
	});
	square5.addEventListener("click", function(){
		ClickSquare(5);
	});
	square6.addEventListener("mouseover", function(){
		MouseOverSquare(6);
	});
	square6.addEventListener("mouseout", function(){
		MouseOffSquare(6);
	});
	square6.addEventListener("click", function(){
		ClickSquare(6);
	});
	square7.addEventListener("mouseover", function(){
		MouseOverSquare(7);
	});
	square7.addEventListener("mouseout", function(){
		MouseOffSquare(7);
	});
	square7.addEventListener("click", function(){
		ClickSquare(7);
	});
	square8.addEventListener("mouseover", function(){
		MouseOverSquare(8);
	});
	square8.addEventListener("mouseout", function(){
		MouseOffSquare(8);
	});
	square8.addEventListener("click", function(){
		ClickSquare(8);
	});
	square9.addEventListener("mouseover", function(){
		MouseOverSquare(9);
	});square9.addEventListener("mouseout", function(){
		MouseOffSquare(9);
	});
	square9.addEventListener("click", function(){
		ClickSquare(9);
	});
	square10.addEventListener("mouseover", function(){
		MouseOverSquare(10);
	});
	square10.addEventListener("mouseout", function(){
		MouseOffSquare(10);
	});
	square10.addEventListener("click", function(){
		ClickSquare(10);
	});
	square11.addEventListener("mouseover", function(){
		MouseOverSquare(11);
	});
	square11.addEventListener("mouseout", function(){
		MouseOffSquare(11);
	});
	square11.addEventListener("click", function(){
		ClickSquare(11);
	});
	square12.addEventListener("mouseover", function(){
		MouseOverSquare(12);
	});
	square12.addEventListener("mouseout", function(){
		MouseOffSquare(12);
	});
	square12.addEventListener("click", function(){
		ClickSquare(12);
	});
	square13.addEventListener("mouseover", function(){
		MouseOverSquare(13);
	});
	square13.addEventListener("mouseout", function(){
		MouseOffSquare(13);
	});
	square13.addEventListener("click", function(){
		ClickSquare(13);
	});
	square14.addEventListener("mouseover", function(){
		MouseOverSquare(14);
	});
	square14.addEventListener("mouseout", function(){
		MouseOffSquare(14);
	});
	square14.addEventListener("click", function(){
		ClickSquare(14);
	});
	square15.addEventListener("mouseover", function(){
		MouseOverSquare(15);
	});
	square15.addEventListener("mouseout", function(){
		MouseOffSquare(15);
	});
	square15.addEventListener("click", function(){
		ClickSquare(15);
	});
}

function setSquarePositions(){
	var i;
	var topPositions = [0, 0, 0, 0, 100, 100, 100, 100, 200, 200, 200, 200, 300, 300, 300];
	var leftPositions = [0, 100, 200, 300, 0, 100, 200, 300, 0, 100, 200, 300, 0, 100, 200];
	for(i = 0; i < puzzleArray.length; i++)
	{
		puzzleArray[i].style.top = topPositions[i] + "px";
		puzzleArray[i].style.left = leftPositions[i] + "px";
	}

}