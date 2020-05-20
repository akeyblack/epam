$(document).ready(function () {
    let action=false;
    let counter=0;
    let timer;
    $("#action").on('click', () => {
        action=!action;
        if(action) {    
            timer = setInterval(() => {
                display(counter);
                counter+=10;
            }, 10);
        } else {
            clearInterval(timer);
        }
    });
    $("#reset").on('click', () => {
        action=false;
        counter=0;
        clearInterval(timer);
        display(counter);
    });
});

function display(counter) {
    $(".screen").text(moment().second(0).millisecond(counter).format("ss:SS"));
}