<script>
//Vars
var contador = 1;
var scores   =0;  
//Recuadro de pregunta
var prg =  document.getElementById("qtn"); 
//Botones de respuesta
var bt1 = document.getElementById("B1"); 
var bt2 = document.getElementById("B2");
var bt3 = document.getElementById("B3");
var bt4 = document.getElementById("B4");
//Boton de BS(botton de SIGUIENTE) & BC(botón de correcto o incorrecto)
var bs = document.getElementById("Bs");
var bci= document.getElementById("Bci");  


//Tablero de puntaje
var scr = document.getElementById("scrs");

function iniciar()
    { 
        
        bs.innerHTML='SIGUIENTE';
        bs.style.display =  'none';
        
        bci.style.display = 'none';

          
                switch (contador) {
                    
                    case 1:
                        prg.innerHTML="¿Quién introduce el término de energía?";
                        bt1.value="Fresnel";
                        bt2.value="Ritter";
                        bt3.value="Watt";
                        bt4.value="Ninguno";
                    break;

                    case 2:
                        prg.innerHTML="Las primeras observaciones de la naturaleza:";
                        bt1.value="Galilei";
                        bt2.value="Watt";
                        bt3.value="Aristóteles";
                        bt4.value="Ninguno";
                    break;

                    case 3:
                        prg.innerHTML="Enuncia la ley gravitacional universal:";
                        bt1.value="Kepler";
                        bt2.value="Hertz";
                        bt3.value="Newton";
                        bt4.value="Ninguno";
                    break;

                    case 4:
                        prg.innerHTML="Describe la ley de la atracción:";
                        bt1.value="Newton";
                        bt2.value="Coulomb";
                        bt3.value="Faraday";
                        bt4.value="Ninguno";
                    break;

                    case 5:
                        prg.innerHTML="¿Quién invento la máquina de vapor?";
                        bt1.value="Watt";
                        bt2.value="Galilei";
                        bt3.value="Newton";
                        bt4.value="Ninguno";
                    break;
                    
                    

                    } 
               
    }

    function checkAnswer(answer) {
         
        bci.style.display = true;
        


         switch(contador){
             case 1:
             var answerx = answer;
             var correct ="Ritter";
                if(answerx==correct){
                    bci.style.display = 'inline';
                    bci.innerHTML='Correcto';
                    bs.style.display = 'inline';
                    scores+=5;
                    scr.innerHTML=scores;        
                }
                else{
                    bci.style.display = 'inline';
                    bci.innerHTML='incorrecto';
                    bs.style.display = 'inline';

                }
                contador++;
                console.log(contador);
            break;

            case 2:
             var answerx = answer;
             var correct ="Aristóteles";
                if(answerx==correct){
                    bci.style.display = 'inline';
                    bci.innerHTML='Correcto';
                    bs.style.display = 'inline';
                    scores+=5;
                    scr.innerHTML=scores;        
                }
                else{
                    bci.style.display = 'inline';
                    bci.innerHTML='incorrecto';
                    bs.style.display = 'inline';

                }
                contador++;
                console.log(contador);
            break;

            case 3:
             var answerx = answer;
             var correct ="Newton";
                if(answerx==correct){
                    bci.style.display = 'inline';
                    bci.innerHTML='Correcto';
                    bs.style.display = 'inline';
                    scores+=5;
                    scr.innerHTML=scores;        
                }
                else{
                    bci.style.display = 'inline';
                    bci.innerHTML='incorrecto';
                    bs.style.display = 'inline';

                }
                contador++;
                console.log(contador);
            break;

            case 4:
             var answerx = answer;
             var correct ="Coulomb";
                if(answerx==correct){
                    bci.style.display = 'inline';
                    bci.innerHTML='Correcto';
                    bs.style.display = 'inline';
                    scores+=5;
                    scr.innerHTML=scores;        
                }
                else{
                    bci.style.display = 'inline';
                    bci.innerHTML='incorrecto';
                    bs.style.display = 'inline';

                }
                contador++;
                console.log(contador);
            break;

            case 5:
             var answerx = answer;
             var correct ="Watt";
                if(answerx==correct){
                    bci.style.display = 'inline';
                    bci.innerHTML='Correcto';
                    
                    scores+=5;
                    scr.innerHTML=scores;        
                }
                else{
                    bci.style.display = 'inline';
                    bci.innerHTML='incorrecto';
                  

                }
                bs.style.display = 'inline';
                bci.innerHTML="Su puntuación fue "+scores;
                bs.innerHTML="Reiniciar";
                contador=1;
                scores=0;

            break;
            
            
            
            
         }



    }




</script>