
const divRoot = document.getElementById("root")
console.log(divRoot)
const valor1 = 10;
const valor2 = 20;
const resultado = document.createElement("h1")
resultado.textContent = (valor1 + valor2)
divRoot.appendChild(resultado)


const divValores = document.createElement("div")
divValores.setAttribute("id", "valores")
divRoot.appendChild(divValores)

const h2Valor1 = document.createElement("h2")
h2Valor1.textContent = valor1
divValores.appendChild(h2Valor1)
