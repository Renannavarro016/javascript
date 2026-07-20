let num = [2, 3, 4, 5, 6, 7, 9, 8]
num.sort()

/*for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
console.log(`E o vetor tem exatamemte ${num.length} posições.`)*/

for(let pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

/*---------------------------------------------------------------------------------------------
Arquivo vetornatela.js comentado:

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores)

para consultar os valores em cada indice da array.

Versão Noob:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

Versão Basic:
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

Versão PRO atualizada: 
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */