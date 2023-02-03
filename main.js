//Selecionando os botões e o painel de visualização
const btns = document.querySelectorAll("button");
let resultField = document.querySelector("#resultado");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let num = btn.innerHTML
        if (resultField.value == "0") {
            resultField.value = num
         } else if (num == "AC") {
             resultField.value = 0
          } else if (num == ",") {
            resultField.value += "."
          } else if (num == "=") {
            resultField.value = eval(resultField.value);
         } else {
            resultField.value += num
        }

        console.log(num)

    });
});
