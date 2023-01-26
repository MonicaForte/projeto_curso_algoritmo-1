/* escreval ("Digite o nome do aluno:")
   leia (nome)
   escreval ("Digite a nota 1:")
   leia (nota01)
   escreval ("Digite a nota 2:")
   leia (nota02)
   media := (nota01 + nota02) / 2
   
   se media >= 5 entao
      escreval ("Aprovado!", nome)
   senao
      escreval ("Reprovado!", nome)

   fimse*/ 

   var nome, nota01, nota02;
   nome = prompt("Digite o nome do aluno")
   nota01 = prompt("Digite a nota 01:")
   nota02 = prompt("Digite a nota 02:")

   media = (parseInt (nota01) + parseInt (nota02)) / 2

   if (media >= 50) //mais de uma linha de intrução usa-se {}
    alert ("aprovado" + nome)
   else
    alert ("reprovado" + nome)