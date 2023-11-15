function makeList() {
    var userInput = document.getElementById('textInput').value;
    var countryList = document.getElementById('countryList');
    countryList.innerHTML = 'Список країн:';
    var countries = userInput.split(',').map(function(country) {
        return country.trim();
    });
    countries.forEach(function(country) {
        var listItem = document.createElement('li');
        listItem.textContent = country;
        countryList.appendChild(listItem);
    });
}
function editCell(cell) {
    // Перевірка, чи вже є edit-container в комірці
    if (cell.querySelector('.edit-container')) {
        return;
    }

    var editContainer = document.createElement('div');
    editContainer.className = 'edit-container';

    var input = document.createElement('input');
    input.type = 'text';

    var button = document.createElement('button');
    button.innerText = 'OK';
    button.onclick = function () {
        cell.textContent = input.value;
        editContainer.removeChild(input);
        editContainer.removeChild(button)
    };

    editContainer.appendChild(input);
    editContainer.appendChild(button);
    cell.appendChild(editContainer);
    input.focus();
}
