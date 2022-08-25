
function reload(){

    var display = document.querySelector('.time')

    var timenow = new Date();

    var time =  correct0(timenow.getHours()) + ':' + correct0(timenow.getMinutes()) + ':' + correct0(timenow.getSeconds());
    
    display.textContent = time;
}

function correct0(number){
    if(number < 10){
       number = "0" + number
    }
    return number
}


reload();
setInterval(reload, 1000);




