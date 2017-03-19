var canvas = document.getElementById("test");
var context = canvas.getContext('2d');
var width = 500;
var height = 500;

// 坐标轴范围
var xmin = -1.8;
var xmax = 1.8;
var ymin = -1.3;
var ymax = 2.3;

function draw_Kohn_Curve(P1x, P1y, P2x, P2y, N){
	// P1，P2是线段的始末两点(必须是1*2的向量)，N是递归层数   
	theta = Math.PI / 3;
	  
	if (N == 1){
		context.beginPath();
		context.lineTo(P1x, height-P1y);
		context.lineTo(P2x, height-P2y);
		context.stroke();
		context.closePath();
	}
	else{
		var midx = (P2x - P1x) / 3;  
		var midy = (P2y - P1y) / 3;
		var Lx = P1x + midx;  
		var Ly = P1y + midy;
		var Rx = P2x - midx;  
		var Ry = P2y - midy; 
		var Newx = Lx + midx * Math.cos(theta) - midy * Math.sin(theta);  
		var Newy = Ly + midx * Math.sin(theta) + midy * Math.cos(theta); 
		draw_Kohn_Curve(P1x, P1y, Lx, Ly, N-1);  
		draw_Kohn_Curve(Lx, Ly, Newx, Newy, N-1);  
		draw_Kohn_Curve(Newx, Newy, Rx, Ry, N-1);  
		draw_Kohn_Curve(Rx, Ry, P2x, P2y, N-1);  
	}
}

var N = 1;
var d = -1;
function draw_snow(){
	context.clearRect(0,0,width,height);
	
	draw_Kohn_Curve((1-xmin)/(xmax-xmin)*width, (0-ymin)/(ymax-ymin)*height,
	(-1-xmin)/(xmax-xmin)*width, (0-ymin)/(ymax-ymin)*height, N);
	
	draw_Kohn_Curve((-1-xmin)/(xmax-xmin)*width, (0-ymin)/(ymax-ymin)*height,
	(0-xmin)/(xmax-xmin)*width, (Math.sqrt(3)-ymin)/(ymax-ymin)*height, N);  
	
	draw_Kohn_Curve((0-xmin)/(xmax-xmin)*width, (Math.sqrt(3)-ymin)/(ymax-ymin)*height,
	(1-xmin)/(xmax-xmin)*width, (0-ymin)/(ymax-ymin)*height, N); 
	
	if (N == 1 || N == 6) d = -d;
	N += d;
}

var id;
function animation_start(){
	id = setInterval("draw_snow(N)",500);
}
function animation_stop(){
	window.clearInterval(id);
}

draw_snow();