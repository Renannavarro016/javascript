function tabuada() {
    let num = Number(document.getElementById('num').value)
    let res = document.querySelector('.res')
    
    if (num == "") {
        alert('Número invalido! Insira novamente. 🔁')
    } else if (num <= 1000) {
        res.innerHTML = ''
        for (let c = 1; c<=10; c++) {
            res.innerHTML += `${num} x ${c} = <strong>${num*c}</strong><br>`
            res.style.border = '2px solid rgb(151, 196, 235)'
            res.style.outline = '1px solid rgb(0, 132, 255)'
        }
    } else if (num > 1000) {
       alert('Número invalido! Tente novamente 🔁')
    }
}