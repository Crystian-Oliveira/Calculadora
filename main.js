//Selecionando os botões e o painel de visualização
const btns = document.querySelectorAll("button");
const resultField = document.querySelector("#resultado");

//O sinal += é usado para adicionar um valor a uma variável já existente. Exemplo:
//let num = 1;
//num += 5;
//console.log(num); // 6


//Escutador se vai ser clicado algum botão

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        resultField.value += btn.value.textContent;





    });
});
