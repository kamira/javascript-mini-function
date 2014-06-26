function specialKonami(){
    //Special Function Put Here
}

function emptyarray(e){var t=e.length+1;e.splice(0,t)}
function addarray(e){e.push("")}
var keystate=new Array;
window.onkeydown=function(e){var t=e.keyCode?e.keyCode:e.which;var n=keystate.length+1;switch(t){case 37:if(n==5||n==7){addarray(keystate)}else{emptyarray(keystate)}break;case 38:if(n>2){emptyarray(keystate)}addarray(keystate);break;case 39:if(n==6||n==8){addarray(keystate)}else{emptyarray(keystate)}break;case 40:if(n>2&&n<=4){addarray(keystate)}else{emptyarray(keystate)}break;case 65:if(n==10)specialKonami();emptyarray(keystate);break;case 66:if(n==9){addarray(keystate)}else{emptyarray(keystate)}break;default:emptyarray(keystate)}}
