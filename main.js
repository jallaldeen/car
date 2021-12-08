canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d"); 
greencar_img = "car2.png";
greencar_img_width = 75;
greencar_img_height = 100;
greencar_x = 250;
greencar_y = 250;
background_img = "parkingLot.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_img;
   
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

function uploadgreencar(){
    ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_img_width, greencar_img_height);
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed == '38');{
         up();   
         console.log("up");
    }   
    if(keypressed == '40'){
        down();
        console.log("down");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }
}
function up(){
    if(greencar_y >=0);{
        greencar_y = greencar_y - 10;
        console.log("When up is pressed, x =" +greencar_x + "y =" +greencar_y); 
        uploadBackground();
        uploadgreencar();
    }

}
function down(){
    if(greencar_y <=500);{
        greencar_y = greencar_y + 10;
        console.log("When up is pressed, x ="+greencar_x +"y =" +greencar_y);
        uploadBackground();
        uploadgreencar();
    }

}
function left(){
    if(greencar_x >=0);{
        greencar_x = greencar_x - 10;
        console.log("When up is pressed, x ="+greencar_x +"y =" +greencar_y);
        uploadBackground();
        uploadgreencar();
    }

}
function right(){
    if(greencar_x <=700);{
        greencar_x = greencar_x + 10;
        console.log("When up is pressed, x =" + greencar_x + "y =" +greencar_y);
        uploadBackground();
        uploadgreencar();
    }

}