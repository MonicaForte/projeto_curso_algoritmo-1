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
