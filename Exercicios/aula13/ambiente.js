

/*
var c = 1
do {
console.log(`Número ${c}`)
    c++  // c = c + 1
} while (c <= 12)
*/


 var c = 1
 while (c <= 6) {
 console.log(`Número ${c}`)
    c++  // c = c + 1
 }



/* em qual situação é melhor usar 'do while', ou apenas o 'while' em javascript?
A escolha entre usar "while" ou "do while" em JavaScript depende do caso específico.

"While" é usado quando você quer continuar executando uma determinada ação enquanto uma condição específica for verdadeira. Por exemplo, você pode usar "while" para imprimir os números de 1 a 10:

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

Já "do while" é semelhante ao "while", mas garante que a ação dentro do loop seja executada pelo menos uma vez, independentemente se a condição for verdadeira ou falsa. Por exemplo, você pode usar "do while" para pedir ao usuário para digitar uma senha até que a senha correta seja digitada:

do {
  var pass = prompt("Enter your password:");
} while (pass !== "secret");

A diferença está no momento em que a condição é avaliada. No while é avaliada antes de entrar no loop, no do while é avaliada depois de entrar no loop. Isso pode ser importante dependendo da lógica do seu código.  */