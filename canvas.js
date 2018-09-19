function drawDiamond(){
    // Outside of Square //
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height,);
    ctx.beginPath();
    ctx.moveTo(0,250);
    ctx.lineTo(250,0);
    ctx.lineTo(500,250);
    ctx.lineTo(250,500);
    ctx.lineTo(0,250);
    ctx.stroke();
}

function drawActualDiamond(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");  
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.beginPath();
    // Outside of Diamond //
    ctx.moveTo(250, 500);
    ctx.lineTo(0, 125);
    ctx.lineTo(125, 50);
    ctx.lineTo(200, 30);
    ctx.lineTo(300, 30);
    ctx.lineTo(375, 50);
    ctx.lineTo(500, 125);
    ctx.closePath();
    // Inside of Diamond
    ctx.lineTo(0, 125);
    ctx.lineTo(130, 160);
    ctx.lineTo(370, 160);
    ctx.lineTo(500, 125);
    ctx.lineTo(250, 500)
    ctx.lineTo(130, 160);
    ctx.moveTo(250, 500);
    ctx.lineTo(370, 160);
    ctx.moveTo(125, 50);
    ctx.lineTo(180, 60);
    ctx.lineTo(320, 60);
    ctx.lineTo(375, 50);
    ctx.moveTo(180, 60);
    ctx.lineTo(130, 160);
    ctx.moveTo(320, 60);
    ctx.lineTo(370, 160);
    ctx.stroke();   
}