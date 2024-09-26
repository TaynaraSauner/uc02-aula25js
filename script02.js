const divRoot = document.getElementById("root")

//Calculadora
//Obter dois valores
const valor1 = parseFloat(prompt("Informe um valor"))
const valor2 = parseFloat(prompt("Informe outro valor"))

const soma = valor1 + valor2
const subtracao = valor1 - valor2
const multiplicacao = valor1 * valor2
const divisao = valor1 / valor2
const resto = valor1 % valor2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)


const resultadoSoma = document.createElement("span")
resultadoSoma.textContent = valor1 + " + " + valor2 + " = " + soma;

const resultadoSubtracao = document.createElement("span")
resultadoSubtracao.textContent = valor1 + " - " + valor2 + " = " + subtracao;

const resultadoMultiplicacao = document.createElement("span")
resultadoMultiplicacao.textContent = `${valor1} * ${valor2} = ${multiplicacao}`

const resultadoDivisao = document.createElement("span")
resultadoDivisao.textContent = valor1 + " / " + valor2 + " = " + divisao;

const resultadoResto = document.createElement("span")
resultadoResto.textContent =`${valor1} % ${valor2} = ${resto}`



divRoot.appendChild(resultadoSoma)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoSubtracao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoMultiplicacao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoDivisao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoResto)

const texto = "Olá Pessoal"
const elementTexto = document.createElement("p")
elementTexto.textContent = texto
divRoot.appendChild(elementTexto)
