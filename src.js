if ( file("sprites.res", 0) != 1 ){
    console("Could not find resources!");
    exit();
}
const bot = file("bot", 0); 
const shadow = file("shadow", 0);
const gridTile = file("gridTile", 0);

var x = 2, y = 2;

var elipse = "> status: running.";
var tid = 0;
var count = 1;

function drawGrid(){
    for( var i = 0; i < 10; i++){
        for( var j = 0; j < 9; j++){
            tile(2+i*2, 2+j*2, gridTile);
        }
    }
}

function drawHUD(){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 10; j++){
            tile(23+i, 2 + j, 80);
        }
    }
    
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 5; j++){
            tile(23+i, 14 + j, 80);
        }
    }
}

function update() {
    fill(130);
    if (pressed("C")) exit();
    
    if(justPressed("RIGHT")){
        x++;
    }
    if(justPressed("LEFT")){
        x--;
    }
    if(justPressed("UP")){
        y--;
    }
    if(justPressed("DOWN")){
        y++;
    }
    
    
    tid++;
    if(tid > 10){
        console("update\n");
        console(count);
        tid = 0;
        count++;
        if(count > 4){
            count = 1;
        }
        if(count == 1){
            elipse = "> status: running.";
        }
        if(count == 2){
            elipse = "> status: running..";
        }
        if(count == 3){
            elipse = "> status: running...";
        }
    }
    
    color(0);
    drawHUD();
    drawGrid();
    
    
    sprite(12+x*16, 13+y*16, shadow);
    sprite(14+x*16, 12+y*16, bot);
    
    cursor(2, 2);
    color(1);
    print(elipse);
}