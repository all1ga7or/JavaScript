function showCalculator() {
    Swal.fire({
        title: 'Калькулятор',
        html:
            '<input id="num1" class="swal2-input" placeholder="Введіть число 1" type="number">' +
            '<input id="operator" class="swal2-input" placeholder="Введіть математичну операцію" type="text">' +
            '<input id="num2" class="swal2-input" placeholder="Введіть число 2" type="number">',
        focusConfirm: false,
        preConfirm: () => {
            const num1 = Swal.getPopup().querySelector('#num1').value;
            const operator = Swal.getPopup().querySelector('#operator').value;
            const num2 = Swal.getPopup().querySelector('#num2').value;

            if (!num1 || !operator || !num2) {
                Swal.showValidationMessage('Будь ласка, введіть всі дані');
                return false;
            }
            let result;
            switch (operator.toLowerCase()) {
                case 'сума':
                    result = parseFloat(num1) + parseFloat(num2);
                    break;
                case 'різниця':
                    result = parseFloat(num1) - parseFloat(num2);
                    break;
                case 'добуток':
                    result = parseFloat(num1) * parseFloat(num2);
                    break;
                case 'частка':
                    result = parseFloat(num1) / parseFloat(num2);
                    break;
                default:
                    Swal.showValidationMessage('Невірна математична операція');
                    return false;
            }
            return result;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Результат', `${result.value}`, 'info');
        }
    });
}
