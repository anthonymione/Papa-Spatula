// JavaScript Document

var bee = document.getElementById("bee");
var timeout;


document.addEventListener("mousemove", getMouse); 
document.addEventListener("mousemove", function() {
	if(timeout) clearTimeout(timeout);
	timeout = setTimeout(mouseStop, 150);
});

bee.style.position = "absolute"; //css		
var beepos = {x:0, y:0};


setInterval(followMouse, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

var dir = "center";
function getMouse(e){
	mouse.x = e.pageX;
	mouse.y = e.pageY;
//Checking directional change
	if(mouse.x > beepos.x){
		dir = "right";
	} else if(mouse.x < beepos.x){
		dir = "left";
	} 
}

function mouseStop(){
	dir = "center";
}

function followMouse(){
	//1. find distance X , distance Y
	var distX = mouse.x - beepos.x;
	var distY = mouse.y - beepos.y;
	//Easing motion
//Progressive reduction of distance 
	beepos.x += distX/5;
	beepos.y += distY/5;

	bee.style.left = beepos.x + "px";
	bee.style.top = beepos.y + "px";


//Apply css class 
	if (dir == "right"){
		bee.setAttribute("class", "right");
	} else if (dir == "left"){
		bee.setAttribute("class", "left");
	}else if (dir == "center"){
		bee.setAttribute("class", "center");        
	}
	
	

}