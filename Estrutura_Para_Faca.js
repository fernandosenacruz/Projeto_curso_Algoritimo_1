   function acaoBotao(){
       var numero, fatorial, 
        numero=prompt("Digite o Número:")
        fatorial=1
        for (var contador=1; contador<=numero; contador++){
            fatorial=fatorial*contador
       }

       document.getElementById("paragrafo").innerText= "fatorial de "+numero+"é:"+fatorial
   }