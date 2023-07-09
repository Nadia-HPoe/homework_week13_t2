const buttonCalculate = document.getElementById("bday-button");

function showMessage() {
    const showError = document.getElementById("bday-error");
    const resultMessage = document.getElementById('bday-result');
    const bdayInput = document.getElementById("bday-calender").value;

    const bdayDate = new Date(bdayInput);
    const currentDate = new Date();
    const bdayNextDate = new Date(currentDate.getFullYear(), bdayDate.getMonth(), bdayDate.getDate());

    showError.textContent = "";
    if (document.getElementById("bday-calender").value == "") {
        resultMessage.textContent = ``;
        showError.textContent = "Введите дату!";
    }
    else {
        if (bdayNextDate < currentDate) {
            const bdayNextDate = new Date(currentDate.getFullYear() + 1, bdayDate.getMonth(), bdayDate.getDate());
            const dayDiff = Math.floor((bdayNextDate - currentDate) / (1000 * 60 * 60 * 24));
            let num = Math.abs(dayDiff);
            let Day;
            num %= 100;
            if (num >= 5 && num <= 20) {
                Day = "дней";
            }
            num %= 10;
            if (num === 1) {
                Day = "день";
            }
            if (num >= 2 && num <= 4) {
                Day = "дня";
            }
            else {
                Day = "дней";
            }
            resultMessage.textContent = `До вашего дня рождения осталось: ${+dayDiff} ${Day}`;
        }

        else {
            const dayDiff = Math.floor((bdayNextDate - currentDate) / (1000 * 60 * 60 * 24));
            let num = Math.abs(dayDiff);
            let Day;
            num %= 100;
            if (num >= 5 && num <= 20) {
                Day = "дней";
            }
            num %= 10;
            if (num === 1) {
                Day = "день";
            }
            if (num >= 2 && num <= 4) {
                Day = "дня";
            }
            else {
                Day = "дней";
            }
            resultMessage.textContent = `До вашего дня рождения осталось: ${+dayDiff} ${Day}`;
        }
    }
}

buttonCalculate.addEventListener('click', showMessage);