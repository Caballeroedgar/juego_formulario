
function adivinar(){
    var vValido = true;
    var vUsuario = document.getElementById('usuario').value;
    var vEdad = document.getElementById('numero').value;
if(vUsuario.trim()==''){
alert('debes ingresar un nombre para jugar');
vValido =false;
Event.preventDefault()
    }

if(vEdad  < 18 ){
alert('No cumples la edad suficiente para jugar')
vValido=false;
Event.preventDefault()
}


    var vNumero = Math.floor((Math.random()*(101-1))+1);
    document.getElementById('resultado').innerHTML = 'Número acertado es = ' + vNumero;
    var contador = 1;
    var vRespuesta = prompt('Adivina un numero entre el 1 y 100');
    while(Number(vRespuesta)!==vNumero && contador<30){
        if(vRespuesta<vNumero){
            vRespuesta = prompt('El número es mayor al que pusiste. Inténtelo de nuevo');
        }else{
            vRespuesta = prompt('El número es menor al que pusiste. Inténtelo de nuevo');
        }
        contador++;
        document.getElementById('contador').innerHTML = 'Intentos = ' + contador;
    }
    if(contador==30){
        alert('Has superado el número máximo de intentos. Perdiste!');
        document.getElementById("formu").style.visibility="hidden";
        document.getElementById('body').style.backgroundImage='url(https://images.unsplash.com/photo-1612436395449-279ee9a6afd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80)'
        document.getElementById("jugarDevuelta").style.visibility="visible";
    }else{
        alert('SIIIII,  muy bien')
        document.getElementById("formu").style.visibility="hidden";
       document.getElementById("jugarDevuelta").style.visibility="visible";
       document.getElementById("resultado").style.visibility="visible";
       document.getElementById("contador").style.visibility="visible";
        document.getElementById('body').style.backgroundImage='url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80)'
    }
    
    return vValido;			
}
