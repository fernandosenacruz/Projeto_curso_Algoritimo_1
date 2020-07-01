function acaoBotao(){
    var nome, caracter, limite, contador, idade;
    limite=prompt("Digite o número de verificações:")
    contador=0
    while(contador<limite){
        nome=prompt("Digite o nome:")
        idade=prompt("Digite a idade de ",nome,":")
        if (idade>18)
        document.getElementById("paragrafo").innerText=nome+" possue maior idade."
        else 
        document.getElementById("paragrafo").innerText=nome+" possue menor idade."
        contador++}    
    
}