//Opdracht 1
let cijfer = 7;
if(cijfer < 6) {
    console.log("Je hebt een onvoldoende.")
} else if(cijfer < 7) {
    console.log("Je hebt een voldoende!")
} else if(cijfer < 9) {
    console.log("Je hebt een goed!")
} else {
    console.log("Je hebt een uitmuntend!")
}

//Opdracht 2
let val = 7

switch(true) {
    case(val < 6):
        console.log("Je hebt een onvoldoende.");
        break;
    case(val < 7 && val >= 6): 
        console.log("Je hebt een voldoende.");
        break;
    case(val >= 7 && val < 9): 
        console.log("Je hebt een goed.");
        break;
    case(val > 9):
        console.log("Je hebt een uitmuntend");
        break;
}

//Opdracht 3
//purchasedBook = true;
//job = ‘teacher’;
//inTrain = false;

var purchasedBook = true
var job = "teacher"
var inTrain = false

if(purchasedBook == true && job == "teacher" && inTrain == false) {
    console.log("finally i can enjoy my book!")
} else if(purchasedBook == true && job == "x" && inTrain == false) {
    console.log("I can't read a book during my job..")
} else if(purchasedBook == true && job == "teacher" && inTrain == true) {
    console.log("I can read while riding the train")
} else {
    console.log("I can't read my book right now")
}
