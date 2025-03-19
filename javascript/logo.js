var ctx = document.getElementById('canvas').getContext('2d');
var w = document.getElementById('canvas').width;
var h = document.getElementById('canvas').height;

//Fonction qui dessine le ballon de basket

function ball(){
	ctx.strokeStyle = "#ffffff";
	ctx.fillStyle = "black";
	ctx.lineWidth = "5";
	ctx.beginPath();
	ctx.moveTo(400, 125);
	ctx.lineTo(400, 375);
	ctx.moveTo(275, 250);
	ctx.lineTo(525, 250);
	ctx.arc(400, 250, 125, 0, 2*Math.PI, true);
	ctx.moveTo(462.5, 141);
	ctx.arcTo(400, 250, 462.5, 359, 215);
	ctx.moveTo(337.5, 141);
	ctx.arcTo(400, 250, 337.5, 359, 215);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

// Fonction qui dessine la vague et affiche le nom du club

function draw() {
  	ctx.fillStyle = "black";
  	ctx.strokeStyle = "#ffffff";
  	ctx.lineWidth = h/50;
 	ctx.beginPath();
  	ctx.moveTo(w-20, h-20);
  	ctx.lineTo(20, h-20);
  	ctx.quadraticCurveTo(w/4, 20, w-20, 20);
  	ctx.bezierCurveTo(w-10, 20, w/2, h-20, w-20, h-20);
  	ctx.lineTo(20, h-20);
  	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = "#ffffff";
   ctx.font = Math.floor((h/4)-(h/10))+'px sans-serif';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   ctx.fillText('Wave BC', (w/2), h-70);
}
