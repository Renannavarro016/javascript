function checar() {
    let ano = new Date().getFullYear()
    var idd = document.getElementById('ano').value
    var Homem = document.querySelector('.man').checked
    var Mulher = document.querySelector('.wom').checked
    var img = document.querySelector('#foto')
    var resp = document.querySelector('div#resultado')

    // Conta da idade
    var idade = ano-idd

    // Para os Homens
    if (Homem) {
        Homem = 'Homem'
        resp.innerHTML = `<p>Você é um <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
        img.src = 'imagens/homem.png'

        if (idade <= 2) {
            Homem = 'Criança'
            resp.innerHTML = `<p>Você é uma <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/crianca de 2 anos.jpg'
        } else if (idade <= 5) {
            Homem = 'Criança'
            resp.innerHTML = `<p>Você é uma <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/crianca de 5 anos.jpg'
        } else if (idade < 10) {
            Homem = 'Criança'
            resp.innerHTML = `<p>Você é uma <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/crianca de 10 anos.jpg'
        } else if (idade >= 10 && idade <= 15) {
            Homem = 'Menino'
            resp.innerHTML = `<p>Você é um <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/homem de 15 anos.png'
        } else if (idade > 15 && idade <= 21) {
            `<p>Você é um <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/homem de 21 anos.png'
        } else if (idade >= 30 && idade < 40) {
            `<p>Você é um <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/homem de 35 anos.png'
        } else if (idade >= 40 && idade < 60) {
            `<p>Você é um <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/homem de 50 anos.jpg'
        } else if (idade >= 60 && idade < 90) {
            `<p>Você é um <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/homem de 70 anos.jpg'
        } else if (idade >= 90 && idade < 110) {
            resp.innerHTML = `<p>Você é um <strong> ${Homem} </strong> e tem <strong>${idade}</strong> anos. Parabéns, você recebeu a benção da longevidade de Deus!</p>`
            img.src = 'imagens/homem de 90 anos.jpg'
        }
    } 
    
    // Para as Mulheres
    if (Mulher) {
        Mulher = 'Mulher'
        resp.innerHTML = `<p>Você é uma <strong>${Mulher}</strong> e tem <strong> ${idade} </strong> anos.</p>`
        img.src = 'imagens/mulher.jpg'
        
        if (idade <= 2) {
            Mulher = 'Criança'
            resp.innerHTML = `<p>Você é uma <strong>${Mulher}</strong> e tem <strong> ${idade} </strong> anos.</p>`
            img.src = 'imagens/menina de 2 anos.png'
        } else if (idade <= 5) {
            Mulher = 'Criança'
            resp.innerHTML = `<p>Você é uma <strong>${Mulher}</strong> e tem <strong> ${idade} </strong> anos.`
            img.src = 'imagens/menina de 5 anos.jpg'
        } else if (idade < 10) {
            Mulher = 'Menina'
            resp.innerHTML = `<p>Você é uma <strong> ${Mulher} </strong> e tem <strong> ${idade} </strong> anos.</p>`
            img.src = 'imagens/menina de 10 anos.jpg'
        } else if (idade >= 10 && idade <= 15) {
            Mulher = 'Menina'
            resp.innerHTML = `<p>Você é uma <strong> ${Mulher} </strong> e tem <strong> ${idade} </strong> anos.</p>`
            img.src = 'imagens/mulher de 15 anos.jpg'
        } else if (idade > 15 && idade <= 21) {
            resp.innerHTML = `<p>Você é uma <strong> ${Mulher} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/mulher de 21 anos.jpg'
        } else if (idade >= 30 && idade <= 40) {
            resp.innerHTML = `<p>Você é uma <strong> ${Mulher} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/mulher de 35 anos.png'
        } else if (idade > 40 && idade < 60) {
            resp.innerHTML = `<p>Você é uma <strong> ${Mulher} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/mulher de 50 anos.png'
        } else if (idade >= 60 && idade <= 90) {
            resp.innerHTML = `<p>Você é uma <strong> ${Mulher} </strong> e tem <strong>${idade}</strong> anos.</p>`
            img.src = 'imagens/mulher de 70 anos.jpg'
        } else if (idade > 90 && idade < 110) {
            resp.innerHTML = `<p>Você é uma <strong> ${Mulher} </strong> e tem <strong>${idade}</strong> anos. Parabéns, você recebeu a benção da longevidade de Deus!</p>`
            img.src = 'imagens/mulher de 90 anos.png'
        } 
    }

    // Se caso digitar errado ou sem nada
    if (idd == '') {
        resp.innerHTML = '<p>Você <strong>não</strong> digitou corretamente. <strong>Tente novamente!</strong></p>'
        img.src = 'imagens/erro.jpg'
    }
}