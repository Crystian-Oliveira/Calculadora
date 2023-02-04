//Selecionando os botões e o painel de visualização
const btns = document.querySelectorAll("button");
let resultField = document.querySelector("#resultado");

// Campo de resultado somente leitura
resultField.readOnly = true; 

// Adicionando o evento de teclado
document.addEventListener("keydown", (event) => {
    let num = event.key;


    if (resultField.value == "0") {
        resultField.value = num;
    } else if (num == "AC" || num == "Backspace") {
        resultField.value = 0;
    } else if (num == ".") {
        resultField.value += ".";
    } else if (num == "+") {
        resultField.value += "+";
    } else if (num == "*") {
        resultField.value += "*";
    } else if (num == "-") {
        resultField.value += "-";
    } else if (num == "%") {
        resultField.value = eval(resultField.value) / 100;
    } else if (num == "Enter") {
        resultField.value = eval(resultField.value);
    } else if (num >= "0" && num <= "9") {
        resultField.value += num;
    }
    console.log(num)
});



btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let num = btn.innerHTML

        if (resultField.value == "0") {
            resultField.value = num
        } else if (num == "AC") {
            resultField.value = 0
        } else if (num == ",") {
            resultField.value += "."
        } else if (num == "%") {
            resultField.value = (eval(resultField.value) / 1);
        } else if (num == "=") {
            resultField.value = eval(resultField.value);
        } else {
            resultField.value += num
        }

        console.log(num)

    });
});
