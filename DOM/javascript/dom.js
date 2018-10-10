/*let listItems = document.getElementById("groceryList")
console.log(listItems);

const ul = document.getElementById('groceryList');
const firstChild = ul.firstElementChild;
console.log(firstChild);
firstChild.classList.add('standOut');

const groceryList = [{
    'name': 'Tandenborstel',
    'price': 0.99
},
{
    'name': 'Deodorant',
    'price': 7.99
},
{
    'name': 'Bak meel',
    'price': 0.79
},
{
    'name': 'Wortels',
    'price': 2.99
}
];

createMyAwesomeTable();

function createMyAwesomeTable() {
/**
 *  table
 *      tr
 *          td
 *              tandenborstel
 *          td
 *              0.99
 */
/*const table = document.createElement('table');
for (let index = 0; index < groceryList.length; index++) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.id = 'name'+index;
    tdName.innerText = groceryList[index].name;
    const tdPrice = document.createElement('td');
    tdPrice.innerText = groceryList[index].price;
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
//document.getElementById('');
//document.getElementByTag('');
//document.CreateElement('');
//element.appendChild
*/
const button = document.getElementById('plaatje');
button.addEventListener('click', clickEventHandler);

function clickEventHandler(event) {
    console.log(event);
}
  
window.addEventListener('load', init);

function init() {
const text = document.getElementById('text');
text.addEventListener('click', clickEventHandler);
}

function clickEventHandler(event) {
    event.preventDefault();
    const inputText = document.getElementById('inputText').value;
    console.log(inputText);
}



 //   table.appendChild(tr);
//}

//const body = document.getElementById('body');
//body.appendChild(table);

//}

