const URL = 'https://dummyjson.com/products';

async function chamarApi() {    // Função Assincrona
    const resp = await fetch(URL);    // Requisição para a API

    if (resp.status === 200) {      // Validação desta API, se ela esta OK
        const obj = await resp.json();    // Conversão do resultado da operação para JSON/Objeto JSON
        console.log(obj);   // Mostrar o resultado da Operação
    }
}

chamarApi();   // Chamada da Função