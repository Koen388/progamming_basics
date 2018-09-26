//Opdracht Les
let gender = "male";
giveMeANiceName(gender)

function giveMeANiceName(gender) {
    if (gender == "male") {
        console.log("My name is Harry");
    } else {
        console.log("My name is Ray");
    }
}

//Opdracht Les 2
var pigs = function (numberOfPigs) {
        var pigs = '';
        var counter = 0;
        while (counter <= numberOfPigs) {
            pigs += '🐖';
            counter++;
        }
        pigs += 'knor!';
        return pigs;
};
console.log(pigs(4));

//Opdracht Les 3
var inputNumber = +prompt('Vul hier ding in'),
    value = inputNumber,
    total = inputNumber;
while(--value) {
    total *= value;
}
console.log(inputNumber + '! = ' + total);

//Opdracht 4
let inputAnimal = prompt('Type here: (Name of an animal)')
if (inputAnimal == "dog") {
    console.log('Woof!');
} else if(inputAnimal == "cat") {
    console.log('Meow!');
} else if(inputAnimal == "bird") {
    console.log('Tsjirp!');
} else if(inputAnimal == "hamster") {
    console.log('Peep!');
} else if(inputAnimal == "worm") {
    console.log("....");
} else {
    console.log('Sorry, i dont know this animal.');
}

const makeASound = function (animal) {
    let audio = new Audio('./sounds/' + animal + '.mp3');
    audio.play();
}

const handleAnimalSounds = function(func, animal){
    func(animal);
}

handleAnimalSounds(makeASound, 'dog');
   