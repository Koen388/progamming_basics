//const lapRounds = [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];

//Opdracht 1
let lapRounds = {
time : ["55.99", "63.00", "63.01", "54.01", "62.79", "52.88", "53.10", "54.12"]
}
console.log(`${lapRounds.time}`)

//Opdracht 2
let teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: "20",
        salary: "1400"
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand:"Arduino",
        hoursPerWeek: "20",
        salary: "1400"
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: "20",
        salary: "1400"
    }
]

for (let i = 0; i < teachers.length; i++) {
    let element = teachers[i];
console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer`);
}

//Opdracht 3, niet volledig gelukt want ik kwam er niet uit.
for (let i = 0; i < teachers.length; i++) {
    let element = teachers[i];
console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer and he earns ${hoursPerWeek} / ${salary}`);
}