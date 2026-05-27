var now = new Date()
var hr = now.getHours()
console.log(`Agora são ${hr} horas.`)
if (hr <= 5) {
    console.log(`Tenha uma Boa madrugada!`)
}
if (hr < 12 && hr > 5) {
    console.log(`Tenha um Bom dia!`)
} else if (hr <= 18 && hr >= 12) {
    console.log(`Tenha uma Boa tarde!`)
} else if (hr > 18){
    console.log(`Tenha uma Boa Noite!`)
}