"use strict";

window.onload = function(){
	var puzzlearea= document.getElementById("puzzlearea");
	var tiles= puzzlearea.children;
	var moves=0;
	var tileArray=[];

	//adds puzzlepiece css class to all tiles
	for(var i=0; i<tiles.length;i++){
		tiles[i].classList.add("puzzlepiece");
	}
	//adds tiles to an array
	for(var i=0; i<tiles.length;i++){
		tileArray.push(tiles);
	}


	function setTiles(){
		
	}
};

