/*const numeros = [1, 2, 3, 4, 12, 32]

const dobro = numeros.map((numero) => {
    return numero * 4
})  

console.log(dobro)
*/

const produtos = [
  {
    id: 1,
    nome: "Smartphone Galaxy S21",
    preco: 3999.99,
    temDesconto: true,
    quantidade: 22,
  },
  {
    id: 2,
    nome: "Notebook Samsung experience",
    preco: 5400.99,
    temDesconto: false,
    quantidade: 10,
  },
  {
    id: 3,
    nome: "Smart TV AOC 50",
    preco: 3200.99,
    temDesconto: true,
    quantidade: 3,
  },
  {
    id: 4,
    nome: "Monitor SuperFrame 180hz 23",
    preco: 970.99,
    temDesconto: false,
    quantidade: 12,
  },
  {
    id: 5,
    nome: "Headset Red Dragon Expert 2.4Ghz",
    preco: 999.99,
    temDesconto: false,
    quantidade: 34,
  },
  {
    id: 6,
    nome: "Mouse Attack Shark X1",
    preco: 230.99,
    temDesconto: false,
    quantidade: 123,
  },
  {
    id: 7,
    nome: "RTX 5090 TI",
    preco: 6800.99,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 8,
    nome: "SSD Kingston Fury 2TB",
    preco: 1100.99,
    temDesconto: true,
    quantidade: 10,
  },
  {
    id: 9,
    nome: "AMD Ryzen 7 9800x3d",
    preco: 3500.99,
    temDesconto: true,
    quantidade: 18,
  },
  {
    id: 10,
    nome: "Controle XBOX Gamesir G8",
    preco: 600.99,
    temDesconto: true,
    quantidade: 11,
  },
];

// Adicionar + 10 em cada em cada produto
// Filtrar só os em promoção
// Saber qual o faturamento se vendermos todos em promoção]

const faturamentoTotal = produtos
  .map((produto) => {
    return { ...produto, quantidade: produto.quantidade + 10 };
  })
  .filter((produto) => produto.temDesconto)
  .reduce(
    (acumulador, produto) => acumulador + produto.quantidade * produto.preco,
    0,
  );

console.log(faturamentoTotal.toLocaleString('pt-br', { style: "currency", currency: 'BRL'}));

/*
// CRIAR UM NOVO ARRAY FORMATANDO A MOEDA E DANDO DESCONTO AOS CLIENTES

const novosProdutos = produtos.map( produto => {

    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    // Ternário = IF e ELSE    ? = if /  : else 

    return {
        id: produto.id, 
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', 
            currency: 'BRL'
        }),
        quantidade: produto.quantidade
    }
})

console.log(novosProdutos)

// QUAL SERA O FATURAMENTO, SE VENDERMOS TODO O ESTOQUE

const totalVendas = produtos.reduce((acumulador, produto) => {

    return acumulador + ( produto.preco * produto.quantidade)
}, 0)

console.log(
    totalVendas.toLocaleString('pt-br', {
        style: 'currency', 
        currency: 'BRL'
    }), 
)

// FILTRAR SOMENTE OS PRODUTOS EM PROMOÇÃO

const promocao = produtos.filter( produto => !produto.temDesconto)     // Caso quiser os produtos que não tem desconto, colocar o operador inverso = "!"

console.log(promocao)










/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = numeros.filter( numero => {
    return numero > 5
})

console.log(pares)*/

/*
const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((acumulador, atual) => {     // Acumulador começa em 0 se nao colocar valor nenhum
    const total = acumulador + atual 

    return total 
}, 10)  

console.log(soma) */
