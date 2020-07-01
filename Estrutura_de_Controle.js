/*
escreva("Digite o nome do Aluno:")
   leia(nome)
   escreva("Digite a primeira nota do Aluno com decimal:")
   leia(nota1)
   escreva("Digite a segunda nota do Aluno com decimal:")
   leia(nota2)
   media :=(nota1 + nota2) / 2
   
   se media >=7 entao
      escreva(nome, media, ": Aprovado.")
      
   senao
        escreva(nome, media, ": Reprovado.")
   fimse
   */
  var nome, nota1, nota2;
  nome=prompt("Digite o nome do Aluno:")
  nota1=prompt("Digite a primeira nota do Aluno com decimal:")
  nota2=prompt("Digite a segunda nota do Aluno com decimal:")

  media=(parseInt(nota1)+ parseInt(nota2))/2;

  if(media>=7)
    alert("Foi: Aprovado.")

else
    alert("Foi: Reprovado.")
    