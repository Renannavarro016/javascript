function contar() {
    var i = Number(document.getElementById('ini').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('pss').value)
    var result = document.querySelector('.res')

    result.innerHTML = `📍`

    if (p <= 0) {
        alert('Resposta ínvalida, será contabilizado apenas passo 1')
        p = 1
    }  

    if (i < f) {
        while (i <= f) {
            result.innerHTML += ` ${i} - `
            i += p
        } 
    } else {
        while (i >= f) {
            result.innerHTML += ` ${i} - `
            i -= p
        }
    }

    result.innerHTML += `🏁`
}