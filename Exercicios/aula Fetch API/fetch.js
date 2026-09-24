// PROMISSE 

//const minhaPromisse = new Promise((resolve, reject) => {
    //if(true) {
        //resolve("Deu tudo certo!");
    //} else {
        //reject("Algo não saiu como o esperado.");
    //}
//});
//
//minhaPromisse
//.then(mensagemSucesso => {
    //console.log(mensagemSucesso);
//})
//.catch(erro =>{
    //console.log(erro);
//})


// FETCH -> Fazer requisição a algum sistema pegando ou mandando informações

fetch("https://viacep.com.br/ws/15824516/json/")
.then(mensagemSucesso => {
    if(!mensagemSucesso.ok){
        throw new Error("Erro na requisição: " + mensagemSucesso.status);  
        // Serve para caso achar algum erro na mensagemSucesso; ele para o código e vai direto para o catch
    }
    return mensagemSucesso.json();
})
.then(dado => {
    console.log(dado);
})
.catch(erro => {
    console.log(erro.message);
})

// TRATAMENTO DE ERRO  

// ERRO DE REQUISIÇÃO COM O SERVIDOR -> Catch, resultado da promisse

// ERRO DE STATUS DE SERVIDOR -> 

// Propriedade .ok -> Verifica se uma requisição foi feita com sucesso, retornando true or false 
// (Diferença de Propriedade / metodo; Propriedade = .ok / Metodo = .ok())