let listItems = document.getElementById("items")
    console.log(listItems);

const ul = document.getElementById('items');
const firstChild = ul.firstElementChild;
console.log(firstChild);
firstChild.classList.add('standOut');

const groceryList = [
    {
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
]

function createMyAwesomeTable(){
    /**
     * table
     *      tr
     *          td      
     *          td
     */
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.innerText = 'Tandeborstel';
    const tdPrice = document.createElement('td');
    tdPrice.innerText = '0.99';

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    table.appendChild(tr);

    const body = document.getElementById('body');
    body.appendChild(table);
}