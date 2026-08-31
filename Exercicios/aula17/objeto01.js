let amigo = {nome:'Jose', 
    sexo:'M', 
    idade:18, 
    envelheceu(i=0){
    console.log(`${amigo.nome} Ficou mais velho!`)
    this.idade += i
}}

amigo.envelheceu(2)
console.log(`${amigo.nome} agora completou ${amigo.idade} anos.`)
console.log(`${amigo.nome} tem ${amigo.idade} anos.`) 