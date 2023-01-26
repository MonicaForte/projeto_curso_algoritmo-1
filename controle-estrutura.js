   var nome, nota01, nota02;
   nome = prompt("Digite o nome do aluno")
   nota01 = prompt("Digite a nota 01:")
   nota02 = prompt("Digite a nota 02:")

   media = (parseInt (nota01) + parseInt (nota02)) / 2

   if (media >= 50) //mais de uma linha de intrução usa-se {}
    alert ("aprovado" + nome)
   else
    alert ("reprovado" + nome)