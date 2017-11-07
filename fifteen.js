"use strict";

window.onload = function(){

	var puzzlearea= document.getElementById("puzzlearea");
	var tiles= puzzlearea.children;
	//var shuf_button= document.getElementById("shufflebutton");

	//shuffles tiles by clicking shuffle button
	//shuf_button.addEventListener("click",shuffle(tiles));
	

	//adds puzzlepiece css class to all tiles
	for(var i=0; i<tiles.length;i++){
		tiles[i].classList.add("puzzlepiece");
		tiles[i].style.color="black";
	}
	
	//assigning id to individual tiles
	//row1
	//tile 1
	var tile1= tiles[0];
	tile1.style.top="0px";
	tile1.style.left="0px";
	tile1.style.backgroundPosition="0px 0px";

	//tile 2
	var tile2= tiles[1];
	tile2.style.top="0px";
	tile2.style.left="100px";
	tile2.style.backgroundPosition="-100px 0px";
	
	//tile 3
	var tile3= tiles[2];
	tile3.style.top="0px";
	tile3.style.left="200px";
	tile3.style.backgroundPosition="-200px 0px";
	
	//tile 4
	var tile4= tiles[3];
	tile4.style.top="0px";
	tile4.style.left="300px";
	tile4.style.backgroundPosition="-300px 0px";

	//row2 
	//tile5
	var tile5= tiles[4];
	tile5.style.top="100px";
	tile5.style.left="0px";
	tile5.style.backgroundPosition="0px -100px";

	//tile6
	var tile6= tiles[5];
	tile6.style.top="100px";
	tile6.style.left="100px";
	tile6.style.backgroundPosition="-100px 300px";

	//tile7
	var tile7= tiles[6];
	tile7.style.top="100px";
	tile7.style.left="200px";
	tile7.style.backgroundPosition="-200px 300px";

	//tile 8
	var tile8= tiles[7];
	tile8.style.top="100px";
	tile8.style.left="300px";
	tile8.style.backgroundPosition="-300px 300px";

	//row3
	//tile9
	var tile9= tiles[8];
	tile9.style.top="200px";
	tile9.style.left="0px";
	tile9.style.backgroundPosition="0px 200px";

	//tile10
	var tile10= tiles[9];
	tile10.style.top="200px";
	tile10.style.left="100px";
	tile10.style.backgroundPosition="-100px 200px";

	//tile11
	var tile11= tiles[10];
	tile11.style.top="200px";
	tile11.style.left="200px";
	tile11.style.backgroundPosition="-200px 200px";
	
	//tile12
	var tile12= tiles[11];
	tile12.style.top="200px";
	tile12.style.left="300px";
	tile12.style.backgroundPosition="-300px 200px";

	//row4
	//tile13
	var tile13= tiles[12];
	tile13.style.top="300px";
	tile13.style.left="0px";
	tile13.style.backgroundPosition="-300px 100px";

	//tile14
	var tile14= tiles[13];
	tile14.style.top="300px";
	tile14.style.left="100px";
	tile14.style.backgroundPosition="-100px 100px";

	//tile 15 (last tile)
	var tile15= tiles[14];
	tile15.style.top="300px";
	tile15.style.left="200px";
	tile15.style.backgroundPosition="-200px 100px";


	/*function shuffle(x){
		
		for (var i=0;i<x.length;i++){
			var ran= Math.floor(Math.random() * this.length);
			var result= x[ran];
		}
	} */
	


};//end of window.onload 

