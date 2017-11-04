"use strict";

window.onload = function(){

	var puzzlearea= document.getElementById("puzzlearea");
	var tiles= puzzlearea.children;
	var moves=0;

	
	

	//adds puzzlepiece css class to all tiles
	for(var i=0; i<tiles.length;i++){
		tiles[i].classList.add("puzzlepiece");
	}
	
	//assigning id to individual tiles
	//tile 1
	var tile1= tiles[0]
	tiles[0].style.top="0px";
	tiles[0].style.left="0px";

	//tile 2
	var tile2= tiles[1];
	tiles[1].style.top="0px";
	tiles[1].style.left="100px" 

	//tile 3
	var tile3= tiles[2];
	tiles[2].style.top="0px";
	tiles[2].style.left="200px"

	//tile 4
	var tile4= tiles[3];
	tiles[3].style.top="0px";
	tiles[3].style.left="300px"

	//row2 
	//tile5
	var tile5= tiles[4];
	tiles[4].style.top="100px";
	tiles[4].style.left="0px"
	
};//end of window.onload

