let new_Window;
function createWindow(){
    new_Window = window.open("window2.html","_blank", "width=400 , height=500");
    new_Window.focus();
}
function closeWindow(){
    new_Window.close();
}
function moveTo(){
    new_Window.moveTo(500 , 500)
}
function moveBy(){
    new_Window.moveBy(150 , 150)
}

function resizeTo(){
    new_Window.resizeTo(400,500)
}
function resizeBy(){
    new_Window.resizeBy(50 , 50)
}
