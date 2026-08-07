// Array que vai guardar os números
let numeros = []  

function add () {
    let adc = Number(document.getElementById('num').value)
    let lst = document.querySelector('.lista')
    let res = document.querySelector('.res')

    // Limpa o resultado caso o utilizador continue a adicionar
    res.innerHTML = ''

    // isNaN valida se um valor é realmente um número
    if (adc === 0 || isNaN(adc)) { 
        alert('Por favor digite um número.')
    
    // Para os valores que estiverem fora de 1 a 100
    } else if (adc < 1 || adc > 100) {
       alert('Número invalido! digite valores de 1 a 100.')

    // "indexOf ou includes" Usa para localizar um valor dentro de uma lista/Array ou se ele está incluso
    } else if (numeros.includes(adc)) {  
        alert('Número ja adicionado a lista!')
    } else {

        // "push" adiciona os valores colocados dentro de um Array ou lista
        numeros.push(adc)

        // Estilos da lista
        lst.innerHTML += `Valor <strong>${adc}</strong> adicionado.<br>`
        lst.style.border = '2px solid rgb(151, 196, 235)'
        lst.style.outline = '1px solid rgb(0, 132, 255)'
        lst.style.width = 'auto'
        lst.style.alignItems = 'center'
        lst.style.margin = '30px'
    }

    // Limpa o input e faz o foco voltar nele
    document.getElementById('num').value = ''
    document.getElementById('num').focus()
}


// função para lista de infos dos valores 
function Alist() {  
    let res = document.querySelector('.res')

    // Limpa o conteúdo anterior
    res.innerHTML = ''

    // Caso o user finalize antes de digitar algo ou a lista esteja vazia
    if (numeros.length === 0) {
        alert('Por favor adicione valores antes de finalizar!!')
        return
    }


    // Exibe os Resultados

    // "length" usa para somar quantos valores tem adicionados ao total
    res.innerHTML += `No <strong>total</strong> temos <strong>${numeros.length}</strong> valores adicionados! <br><br><hr><br>`

    // "Math.max e min" se usa para saber o valor maior ou menor adicionado na lista
    res.innerHTML += `O <strong>maior</strong> valor adicionado foi <strong>${Math.max(...numeros)}</strong>.<br><br><hr><br>`
    res.innerHTML += `O <strong>menor</strong> valor adicionado foi <strong>${Math.min(...numeros)}</strong>.<br><br><hr><br>`

    // Função para somar todos os valores da lista
    let soma = 0
    for (let n of numeros) {
        soma += n
    }
    res.innerHTML += `A <strong>soma</strong> de todos os valores da lista é <strong>${soma}</strong>.<br><br><hr><br>`

    // Função para calcular a média de todos os valores da lista
    let media = soma / numeros.length
    res.innerHTML += `A <strong>média</strong> de todos os valores adicionados é <strong>${media.toFixed(2)}</strong>`

    // Estilos da Lista
    res.style.border = '2px solid rgb(100, 100, 100)'
        res.style.outline = '1px solid rgb(24, 24, 24)'
        res.style.width = 'auto'
        res.style.alignItems = 'center'
        res.style.margin = '30px'
        res.style.padding = '10px'
}