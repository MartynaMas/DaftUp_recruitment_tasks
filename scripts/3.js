const data = ["Walmart", "State Grid", "Sinopec Group", "China National Petroleum", "Royal Dutch Shell", "Toyota Motor", "Volkswagen", "BP", "Exxon Mobil", "Berkshire Hathaway"]

const filterInput = document.querySelector(".header__input");
const filterButton = document.querySelector(".header__button");
const table = document.querySelector(".table");

filterInput.addEventListener("keydown", onFilterInputKey);
filterButton.addEventListener("click", filterTable);

function onFilterInputKey(e) {
    if (e.keyCode == 13) {
        filterTable();
    }
}

function filterData(phrase) {
    let result = [];

    data.forEach(el => {
        if (el.toLowerCase().indexOf(phrase) > -1) {
            result.push(el);
        }
    });
    return result;
}

function filterTable() {
    const phrase = filterInput.value;
    const filteredData = phrase ? filterData(phrase.toLowerCase()) : data;
    fillTable(filteredData);

    return false;
}

function fillTable(data) {
    table.innerHTML = "";

    data.forEach(el => {
        const text = el;
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = text;
        tr.appendChild(td);
        table.appendChild(tr);
    });
}

fillTable(data);