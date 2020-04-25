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
            let elemento = document.createElement("p");
            let contenido = document.createTextNode("Usted ya supero los 10 intentos permitidos");
            elemento.appendChild(contenido);
            elemento.setAttribute("align", "center");
            document.getElementById("result").appendChild(elemento);
            return false;
        }

        listaIntentos.push(valoringresado);

        if (numero==valoringresado) {
            alert('Felicitaciones Adivino el numero!');
        }else {
            if (valoringresado>numero){ 
            let elemento = document.createElement("h1");
            let contenido = document.createTextNode("Ups! nos tuvo suerte \n Elige un numero mas pequeño");
            elemento.appendChild(contenido);
            elemento.setAttribute("align", "center");
            document.getElementById("result").appendChild(elemento);
            }else{
            let elemento = document.createElement("h1");
            let contenido = document.createTextNode("Ups! nos tuvo suerte \n Elige un numero mas grande");
            elemento.appendChild(contenido);
            elemento.setAttribute("align", "center");
            document.getElementById("result").appendChild(elemento);
            console.log(listaIntentos);
            console.log(numero);

            }
                             
        }
           
    }

    btnprobar.addEventListener('click',function(){
        let x = numingresado.value;
        calcular(numeroAleatorio,x);

        //alert('Emos hecho un click');
    });





