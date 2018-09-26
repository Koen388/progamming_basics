//Opdracht 1
function fibo(fn, f0, f1, counter) {
    while (i <= count) {
        console.log(f1);
        fn = f1 + f0;
        f0 = f1
        f1 = fn
        i++
    }
}

let count = +prompt("");
let f0 = fn = i = 0;
let f1 = 1;
fibo(count, f0, f1, fn);

//Opdracht 2
countdown()
function countdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i)
        if (i == 0) {
            console.log("Happy 2018!")
        }
    }
}

//Opdracht 3
var x1 = 5 //een declaratie
var x2 = function(x1) { //een functie in een expressie
    return x1 + x1;
}