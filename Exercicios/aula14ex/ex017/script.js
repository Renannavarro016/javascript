function tabuada() {
    var num = Number(document.getElementById('num').value)
    var res = document.querySelector('.res')
    res.innerHTML = ''

    if (num == "") {
        res.innerHTML = '<strong>Número invalido!</strong>'
    } else if (num <= 100) {
        for (let c = 1; c<=10; c++) {
            res.innerHTML += `${num} x ${c} = <strong>${num*c}</strong><br>`
            res.style.border = '1px solid rgb(0, 132, 255)'
        }
    } 
}