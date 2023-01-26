/*
 nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite a quantidade de vezes para a verificação da idade:")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
            escreva (" Digite o nome:")
            leia(nome)
            escreva(" Digite a idade de ", nome, ":")
            leia(idade)
            se idade > 18 entao
            escreval(nome , " Você é maior de idade")
            senao
            escreval(nome , " Você é menor de idade")
   fimse
            contador := contador + 1
   fimenquanto
            
Fimalgoritmo
*/
function acaoBotao() {
var nome, idade, limite, contador

limite = prompt("Digite a quantidade de vezes para a verificação da idade:")
contador = 0 
while(contador < limite ){
    nome = prompt (" Digite o nome:")
    idade = prompt (" Digite a idade de " + nome)
    if (idade > 18) 
        document.getElementById("paragrafo").innerText = nome + " Você é maior de idade!"
    else 
        document.getElementById("paragrafo").innerText = nome + " Você é menor de idade!"
    contador++
}
}
