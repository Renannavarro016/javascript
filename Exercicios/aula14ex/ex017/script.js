function tabuada() {
    var num = Number(document.getElementById('num').value)
    var res = document.querySelector('.res')
    

    if (num == "") {
        res.innerHTML = '<strong>Número invalido! Insira novamente. 🔁</strong>'
    } else if (num <= 1000) {
        for (let c = 1; c<=10; c++) {
            res.innerHTML += `${num} x ${c} = <strong>${num*c}</strong><br>`
            res.style.border = '2px solid rgb(151, 196, 235)'
            res.style.outline = '1px solid rgb(0, 132, 255)'
        }
    } else if (num > 1000) {
        res.innerHTML = '<strong>Número invalido! Tente novamente🔁</strong>'
    }
}