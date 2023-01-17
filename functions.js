function printStars(count){
    console.log('*'.repeat(count));
}

printStars(10);

//Function expression

let countDown = function(number){
    for (let i = number; i > 0; i--){
        console.log(i);
    }
}

countDown(10);

//Arrow function

let countUp = (max) => {
    for (let i = 0; i <= max; i++){
        console.log(i);
    }
}

countUp(5)

//Return value 

function sum(a, b){
    return a + b;
}

let sumArrow = (a, b) => a + b;


function printLengthAndName(param) {
    console.log(param.length);
    console.log(param);
}