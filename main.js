var mouseEvent = "";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

addEventListener("mousedown" , my_mousedown);
addEventListener("mouseup" , my_mouseup);
addEventListener("mouseleave" , my_mouseleave);
addEventListener("mousemove" , my_mousemove);

function my_mousedown(e){
    mouseEvent = "mouseDown";
}

function my_mouseup(e){
    mouseEvent = "mouseup";
}

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

function my_mousemove(e){

color = document.getElementById('color').value;
//console.log("the color is:"+ color);

width_of_line = document.getElementById("width_of_line").value;
//console.log("the width of line  is:"+ width_of_line);

if( color == "") color = "black";
if( width_of_line == "") width_of_line = "2px";

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_postion_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_postion_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //console.log("the color in tuchstart is:"+ color);
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x , last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;

}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}