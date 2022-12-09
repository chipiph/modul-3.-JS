
var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("gold");
colorCircles[7] = document.getElementById("black");
colorCircles[8] = document.getElementById("purple");
colorCircles[9] = document.getElementById("indigo");

var sizeCircles=[];
sizeCircles[0]=document.getElementById("small");
sizeCircles[1]=document.getElementById("middle");
sizeCircles[2]=document.getElementById("large");

var targetColor="#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";
var size=10;
sizeCircles[0].style.backgroundColor="red";
var list=document.getElementById("list");
list.addEventListener("click", pickColor);
var list2=document.getElementById("list2");
list2.addEventListener("click", pickSize);
var last=document.getElementById("lastic");
last.addEventListener("click", pickLast);


var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI"){
		if (e.target.id=="red"){
			targetColor="#F00"
		}
		else if (e.target.id=="blue"){
			targetColor="#00F"
		}
		else if (e.target.id=="green"){
			targetColor="#0F0"
		}
		else if (e.target.id=="yellow"){
			targetColor="#FF0"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0FF"
		}
		else if (e.target.id=="magenta"){
			targetColor="#F0F"
		}
		else if (e.target.id=="gold"){
			targetColor="#FFD700"
		}
		else if (e.target.id=="black"){
			targetColor="#000000"
		}
		else if (e.target.id=="purple"){
			targetColor="#800080"
		}
		else if (e.target.id=="indigo"){
			targetColor="#4B0082"
		}
		for (var i =0; i<=9; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
			last.style.height="50px";
			last.style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function drawOnCanvas(e){
	if (e.which==1){
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, size, 0, Math.PI*2);
		canvasContext.fill();
	}
}

function pickSize(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI"){
		if (e.target.id=="small"){
			size=10;
		}
		else if (e.target.id=="middle"){
			size=20;
		}
		else if (e.target.id=="large"){
			size=30;
		}
		for (var i =0; i<=2; i++) {
			sizeCircles[i].style.backgroundColor="black";
		}
		e.target.style.backgroundColor = "red";
}
}

function pickLast(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="DIV"){
		if(e.target.id=="lastic"){
			targetColor="#ffff";
			for (var i =0; i<=9; i++) {
				colorCircles[i].style.height="50px";
				colorCircles[i].style.width="50px";
			}
			last.style.height="80px";
			last.style.width="80px";
		}
}
}
