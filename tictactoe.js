//console.log("hey");

document.getElementById("one-1").addEventListener("click", xo);
document.getElementById("one-2").addEventListener("click", xo);
document.getElementById("one-3").addEventListener("click", xo);
document.getElementById("two-1").addEventListener("click", xo);
document.getElementById("two-2").addEventListener("click", xo);
document.getElementById("two-3").addEventListener("click", xo);
document.getElementById("three-1").addEventListener("click", xo);
document.getElementById("three-2").addEventListener("click", xo);
document.getElementById("three-3").addEventListener("click", xo);


//these are solutions from classmates. 
//var Items = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]


//var box = document.getElementsByTagName("td");


var i = 1;
function xo(event){
	
	if(event.target.innerHTML.length === 0) {

		if(i%2===0) {

			//document.querySelector("img").setAttribute("src", "tictactoex.png" );
			event.target.innerHTML="o";
			event.target.style.backgroundColor = "red";
			
			

		} else  {
			//document.querySelector("img").setAttribute("src", "tictactoeo.jpeg" );
			event.target.innerHTML="x";
			event.target.style.backgroundColor = "blue";
			
			
			//document.getElementsByclass("ticTacToeBoard").src="tictactoeo.jpeg";
	}
		i++;
}
}

document.getElementById("resetButton").addEventListener("click", reset);

function reset() {
	document.getElementById("one-1").innerHTML="";
	document.getElementById("one-2").innerHTML="";
	document.getElementById("one-3").innerHTML="";
	document.getElementById("two-1").innerHTML="";
	document.getElementById("two-2").innerHTML="";
	document.getElementById("two-3").innerHTML="";
	document.getElementById("three-1").innerHTML="";
	document.getElementById("three-2").innerHTML="";
	document.getElementById("three-3").innerHTML="";

	document.getElementById("one-1").style.backgroundColor="black";
	document.getElementById("one-2").style.backgroundColor="black";
	document.getElementById("one-3").style.backgroundColor="black";
	document.getElementById("two-1").style.backgroundColor="black";
	document.getElementById("two-2").style.backgroundColor="black";
	document.getElementById("two-3").style.backgroundColor="black";
	document.getElementById("three-1").style.backgroundColor="black";
	document.getElementById("three-2").style.backgroundColor="black";
	document.getElementById("three-3").style.backgroundColor="black";
}


