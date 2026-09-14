/*
console.log(1)
console.log(2)
console.log(3)
setTimeout(() => console.log(4), 3000)
console.log(5)
console.log(6)*/


async function escreverInfosPais(paisDesejado) {
        const info = await fetch(
        `https://api.restcountries.com/countries/v5/names.common/${paisDesejado}`,
        {
            headers: {
                Authorization: 'Bearer rc_live_b36e8893470049c7868165b6e67e7cac'
            }
        }
    );
    
    const dados = await info.json();

    console.log(dados.data.objects);
}

escreverInfosPais("Brazil");

