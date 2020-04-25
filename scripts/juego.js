window.onload= function(){
    //nos avisa cuando la pagina web ya esta cargada
    this.console.log('Pagina cargada');
};


    let btnprobar= document.getElementById('btnprobar');
    let numingresado = document.getElementById('numingresado');
    

    let numeroAleatorio= Math.floor(Math.random() * 100)+1;
    let cantidadIntentos = 1;
    let listaIntentos  = [];


    function calcular(numero,valoringresado){
        if (cantidadIntentos>10){
            alert('Usted ya supero los 10 intentos permitidos!');
            return false;
        }

        listaIntentos.push(valoringresado);

        if (numero==valoringresado) {
            alert('Felicitaciones Adivino el numero!');
        }else {
            if (valoringresado>numero) 
                alert(' Ups no tuvimos suerte!\n Elige un numero mas pequeño')
             else alert('Ups no tuvimos suerte!\n Elige un numero mas grande');
             console.log(listaIntentos);
             console.log(numero);
        }
    }

    btnprobar.addEventListener('click',function(){
        let x = numingresado.value;
        calcular(numeroAleatorio,x);

        //alert('Emos hecho un click');
    });





