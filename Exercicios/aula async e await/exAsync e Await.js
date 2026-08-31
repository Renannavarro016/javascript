/*

// Para fazer chamadas (requisições) de Api 
async function chamarApi() {
    const response = await fetch('https://api.restcountries.com/countries/v5/codes.alpha_2/CA?pretty=1');
} 

*/


// Simula a Chamada ao Banco de Dados (DB)
function tarefa1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tarefa 1 concluída");
            resolve();
        }, 2000);
    });
}

// Simula a chamada a API Externa
function tarefa2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tarefa 2 concluída");
            resolve();
        }, 2000);
    });
}

async function executarTarefasParalelas() {
    //Para fazer elas em conjuntos em um array
    await Promise.all([tarefa1(), tarefa2()]);  
    console.log("Ambas tarefas foram concluídas.")
}

executarTarefasParalelas();


