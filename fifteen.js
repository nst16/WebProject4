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
}

function shuffle() {
	//array of all div child elements
	
	/* to get the left position of a child div use:
		puzzleArray[<child number 0-14.].style.left' */
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


function MouseOverSquare(squareNumber){
    if(CheckNeighborEmpty(squareNumber)){
        highlight(squareNumber);
    }
}

function MouseOffSquare(squareNumber){
    unhighlight(squareNumber);
}

function highlight(squareNumber){
    puzzleArray[squareNumber - 1].style.borderColor = "red";
}

function unhighlight(squareNumber){
    puzzleArray[squareNumber - 1].style.borderColor = "black";
}


function CheckNeighborEmpty(squareNumber){
    if((!puzzleArray[squareNumber] && squareNumber < 16) || (!puzzleArray[squareNumber - 2] && squareNumber > 1) || (!puzzleArray[squareNumber - 5] && squareNumber > 4) || (!puzzleArray[squareNumber + 3] && squareNumber < 13)){ //Checks the square to the right
        return true;
    }else{
        return false;
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
    square2.addEventListener("mouseover", function(){
                             MouseOverSquare(2);
                             });
    square2.addEventListener("mouseout", function(){
                             MouseOffSquare(2);
                             });
    square3.addEventListener("mouseover", function(){
                             MouseOverSquare(3);
                             });
    square3.addEventListener("mouseout", function(){
                             MouseOffSquare(3);
                             });
    square4.addEventListener("mouseover", function(){
                             MouseOverSquare(4);
                             });
    square4.addEventListener("mouseout", function(){
                             MouseOffSquare(4);
                             });
    square5.addEventListener("mouseover", function(){
                             MouseOverSquare(5);
                             });
    square5.addEventListener("mouseout", function(){
                             MouseOffSquare(5);
                             });
    square6.addEventListener("mouseover", function(){
                             MouseOverSquare(6);
                             });
    square6.addEventListener("mouseout", function(){
                             MouseOffSquare(6);
                             });
    square7.addEventListener("mouseover", function(){
                             MouseOverSquare(7);
                             });
    square7.addEventListener("mouseout", function(){
                             MouseOffSquare(7);
                             });
    square8.addEventListener("mouseover", function(){
                             MouseOverSquare(8);
                             });
    square8.addEventListener("mouseout", function(){
                             MouseOffSquare(8);
                             });
    square9.addEventListener("mouseover", function(){
                             MouseOverSquare(9);
                             });square9.addEventListener("mouseout", function(){
                                                         MouseOffSquare(9);
                                                         });
    square10.addEventListener("mouseover", function(){
                              MouseOverSquare(10);
                              });
    square10.addEventListener("mouseout", function(){
                              MouseOffSquare(10);
                              });
    square11.addEventListener("mouseover", function(){
                              MouseOverSquare(11);
                              });
    square11.addEventListener("mouseout", function(){
                              MouseOffSquare(11);
                              });
    square12.addEventListener("mouseover", function(){
                              MouseOverSquare(12);
                              });
    square12.addEventListener("mouseout", function(){
                              MouseOffSquare(12);
                              });
    square13.addEventListener("mouseover", function(){
                              MouseOverSquare(13);
                              });
    square13.addEventListener("mouseout", function(){
                              MouseOffSquare(13);
                              });
    square14.addEventListener("mouseover", function(){
                              MouseOverSquare(14);
                              });
    square14.addEventListener("mouseout", function(){
                              MouseOffSquare(14);
                              });
    square15.addEventListener("mouseover", function(){
                              MouseOverSquare(15);
                              });
    square15.addEventListener("mouseout", function(){
                              MouseOffSquare(15);
                              });
}