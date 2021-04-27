function CalcularNota(){

/* pegando as variáveis */
var nome1 = document.getElementById('nome')
var av1 = document.getElementById('av1')
var av2 = document.getElementById('av2')
var av3 = document.getElementById('av3')
var outNome = document.getElementById('outNome')
var outMedia = document.getElementById('outMedia')
var outResultado = document.getElementById('outResultado')

/* pegando os valores */

var nome2 = nome1.value;
var nota1 = Number(av1.value);
var nota2 = Number(av2.value);
var nota3 = Number(av3.value);

/* calculando as variáveis */
var media = (nota1 + nota2) / 2

if(media >= 6&&nota1 > 4&&nota2 > 4){
    outResultado.textContent = `O aluno ${nome2} está aprovado`
    outNome.textContent = `Aluno ${nome2}`
    outMedia.textContent = `A média do aluno é ${media}`
}else if(media < 6&&nota2 < nota1){
    var media2 = (nota3 + nota1) / 2
}else if(media < 6&&nota1 < nota2){
    var media2 = (nota3 + nota2) / 2
}else if(media2 >=6&&nota1 > 4&&nota2 > 4&&nota3 > 4){
    outResultado.textContent = `O aluno ${nome2} está aprovado`
    outNome.textContent = `Aluno ${nome2}`
    outMedia.textContent = `A média do aluno é ${media2}`
}else if(media2 < 6){
    outResultado.textContent = `O aluno ${nome2} está reprovado`
    outNome.textContent = `Aluno ${nome2}`
    outMedia.textContent = `A média do aluno é ${media2}`
}else if(nota1 < 4&&nota2 < 4&&media <= 6){
    var media3 = (nota3 + nota2) / 2
    outResultado.textContent = `O aluno ${nome2} está reprovado`
    outNome.textContent = `Aluno ${nome2}`
    outMedia.textContent = `A média do aluno é ${media3}`
}else if(nota2 < 4&&nota3 < 4&&media2 <= 6){
    var media4 = (nota1 + nota3) / 2
    outResultado.textContent = `O aluno ${nome2} está reprovado`
    outNome.textContent = `Aluno ${nome2}`
    outMedia.textContent = `A média do aluno é ${media4}`
}else if(nota1 < 4&&nota3 < 4&&media2 <= 6);{
    var media4 = (nota1 + nota2) / 2
    outResultado.textContent = `O aluno ${nome2} está reprovado`
    outNome.textContent = `Aluno ${nome2}`
    outMedia.textContent = `A média do aluno é ${media4}`
}
}
