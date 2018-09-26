//Opdracht 1
let getal = 0

while (getal <= 40) {
    if(getal % 4 == 0) {
        console.log(`${getal} is deelbaar door 4`);
    } else {
        console.log(`${getal} is niet deelbaar door 4`);
    }
    getal++
} 

//Opdracht 2
let f0 = 0;
let f1 = 1;
let fn = '';
let count = 0;
while(count <= 20) {
    console.log(`${f1}`);
    fn = f1 + f0;
    f0 = f1
    f1 = fn
    count++
}

//Opdracht 3
let array = [
    2,4,8,9,12,13
];
let resultaat = 0;
    //Maakt i aan en zorgt ervoor dat hij niet vaker kan loopen dan de array length.
for (let i=0; i < array.length; i++) {
    console.log(array[i])
    //Resultaat + Oude resultaat + De volgende in de array
    resultaat = resultaat + array[i];
} 
console.log(resultaat);
