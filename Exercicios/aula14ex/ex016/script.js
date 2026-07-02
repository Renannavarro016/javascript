function contar() {
    var i = Number(document.getElementById('ini').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('pss').value)
    var result = document.querySelector('.res')

    // Para o começo não ficar vazio
    result.innerHTML = `📍`

    // Para caso o user não coloque nada
    if (p <= 0) {
        result.innerHTML = ('<strong>Resposta ínvalida, será contabilizado apenas passo 1 </strong><br><br>')
        p = 1
    }  

    // Faz a contagem e pula de acordo com o que o user digitou
    if (i < f) {
        while (i <= f) {
            result.innerHTML += ` <strong>${i} - </strong>`
            i += p
        } 
    // Faz a contagem só que regressiva
    } else {        
        while (i >= f) {
            result.innerHTML += ` <strong>${i} - </strong>`
            i -= p
        }
    }

    // Para o final não ficar vazio
    result.innerHTML += `🏁`
}