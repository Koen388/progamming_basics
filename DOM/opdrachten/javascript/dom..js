// //Opdracht 1
// let tr1 = parseInt(document.getElementById("course1").lastElementChild.textContent)
// let tr2 = parseInt(document.getElementById("course2").lastElementChild.textContent)
// let tr3 = parseInt(document.getElementById("course3").lastElementChild.textContent)
// let tr4 = parseInt(document.getElementById("course4").lastElementChild.textContent)

// let avg = (tr1 + tr2 + tr3 + tr4) / 4;

// let table = document.getElementById("myTable");
// let row = document.createElement("tr")
// row.innerText = "Average grade"
// let cell = document.createElement("td")
// cell.innerText = avg

// row.appendChild(cell)
// table.appendChild(row)

//Opdracht 2
const li = document.getElementsByTagName("li")

for (let index = 0; index < li.length; index++) {
    const startDigit = index + 1;
    const remainder = startDigit % 2;
    if (remainder == 0) {
        console.log("Even")
        if (startDigit == 2) {
            li[index].classList.add("Blauw")
        } else if (startDigit == 4) {
            li[index].classList.add("Groen")
        } else if (startDigit == 6) {
            li[index].classList.add("Yellow")
        }
    } else {
        console.log("Uneven")
    }
}

//Opdracht 3
const image = function () {
    let img = document.createElement("img")
    img.src = "donut.jpg"
    document.body.appendChild(img)
}

image()