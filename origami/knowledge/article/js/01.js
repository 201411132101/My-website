var canvas = document.getElementById("test");
var context = canvas.getContext('2d');
var width = 506;
var height = 506;

context.lineWidth = 5;

// 正方形
var x = 253, y = 3;
var theta = Math.PI / 2;
context.beginPath();
for (var i = 1; i <= 4; i++){
	context.lineTo(x, y);
	var nx = 253 + (x-253) * Math.cos(theta) - (y-253) * Math.sin(theta);  
	var ny = 253 + (x-253) * Math.sin(theta) + (y-253) * Math.cos(theta); 
	x = nx; y = ny;
}
context.closePath();
context.stroke();


context.lineWidth = 3;
// 正六边形
var t = 125/Math.sin(Math.PI*105/180)/Math.SQRT2;
x = 253 + t; y = 3 + t;
theta = Math.PI / 3;

context.beginPath();
for (var i = 1; i <= 6; i++){
	context.lineTo(x, y);
	var nx = 253 + (x-253) * Math.cos(theta) - (y-253) * Math.sin(theta);  
	var ny = 253 + (x-253) * Math.sin(theta) + (y-253) * Math.cos(theta); 
	x = nx; y = ny;
	console.log("%.2f %.2f\n", nx, ny);
}
context.closePath();
context.stroke();