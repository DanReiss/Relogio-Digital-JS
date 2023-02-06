const display = document.querySelector('.time');

function reloadData(){
    
    const timeNow = new Date();

    const formatedTime = `${correctTime(timeNow.getHours())}:${correctTime(timeNow.getMinutes())}:${correctTime(timeNow.getSeconds())}`; 

    display.textContent = formatedTime;

    function correctTime(n){
        if(n < 10) return "0" + n;
        return n 
    };
};

reloadData(); // Chamo primeiro porque o setInterval so irá executar 1sec depois
setInterval(reloadData, 1000);
