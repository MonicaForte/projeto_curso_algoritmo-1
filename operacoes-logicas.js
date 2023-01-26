/*// se media >= 50 entao -> operação condicional
    
   //{se media >=50 entao
   //se media >=70 entao -> operação bicondicional
   //fimse}
   
   //{se media : 50 então -> negação, muito utilizada para: var passou: logico
   // inicio passou := falso
   //escreval ("Digite o nome do aluno:")leia (nome)
   //escreval ("Digite a nota 1:")
   //leia (nota01)
   //escreval ("Digite a nota 2:")
   //leia (nota02)
   //media := (nota01 + nota02) / 2
        //se media >= 50 entao
             //passou:= verdadeiro
             // se passou entao
             //escreval ("Aprovado!", nome)
              //senao
              // escreval ("Reprovado!", nome)
              // ! diferente/negação
        //fimse}
        
        //{se media : 50 então -> negação, muito utilizada para: var passou: logico
   // inicio passou := falso
   //escreval ("Digite o nome do aluno:")leia (nome)
   //escreval ("Digite a nota 1:")
   //leia (nota01)
   //escreval ("Digite a nota 2:")
   //leia (nota02)
   //media := (nota01 + nota02) / 2
        //se media >= 50 entao
             //passou:= verdadeiro
             //fimse
             
             // se passou || media >=70 entao  -> dijunção
             //escreval ("Aprovado!", nome)
              //senao
              // escreval ("Reprovado!", nome)
              // ! diferente/negação
        //fimse}
        
        // se (passou) && -> Dijunção excluisiva <- (media <=50 || media <=70) entao  -> dijunção
             //escreval ("Aprovado!", nome)
              //senao
              // escreval ("Reprovado!", nome)
              // ! diferente/negação
        //fimse}*/
        var nome, nota01, nota02, passou;

        passou = false;

        nome = prompt("Digite o nome do aluno")
        nota01 = prompt("Digite a nota 01:")
        nota02 = prompt("Digite a nota 02:")
     
        media = (parseInt (nota01) + parseInt (nota02)) / 2
     
        if (media >= 50) //mais de uma linha de intrução usa-se {}
            passou = true;
            
        if (passou)
        alert ("aprovado" + nome)
        else
         alert ("reprovado" + nome)