let num = [2, 4, 5, 6, 7, 8]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O último valor do vetor é ${num[5]}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('Este valor não existe!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}


/*Arquivo ambiente.js comentado:

//VARIÁVEIS COMPOSTAS (Arrays(vetores))

let num = [5, 8, 2, 9, 3] // cada espaço desta array tem a chave (indice ou index) = 0, 1, 2, 3, 4 respectivamente, ou seja, está dividida em 5 elementos.
num[5] = 7 // adiciona o valor '7' no index 5, gerando um novo index, que não existia.
num[2] = 4 // adicionando um valor a um index já existente, substituirá o valor antigo.
num.push(1) // adiciona o valor '1' no final da array, gerando o index 6.
num.sort() // ordena os valores de um array em ordem crescente.
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor (array) é ${num[0]}`)
let pos = num.indexOf(4) // procura um valor dentro da array e diz qual é seu index.
    if (pos == -1) { //-1 indica que o valor não foi encontrado dentro da array.
        console.log('O valor não foi encontrado!')
    } else{
        console.log(`O valor pesquisado está na posição ${pos} `)
    }   */