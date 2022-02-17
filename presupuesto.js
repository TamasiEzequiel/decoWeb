// ARMADOR DE PRESUPUESTOS

let nombre = ""
let cant = 0
let electCantidad = 0
let electCalidad = 0

let fTamaño = 0
let fModif = 0
let fCal = 0
let agregoMt = 0
let espacio = 0



function saludar() {
    if (document.getElementById('saludar').value == "" || document.getElementById('saludar').value > 0 ){
        document.getElementById('mensaje').innerHTML="Correcto";
    }    
    }  


function tamaño() {

    Swal
    .fire({
        title: 'Cual es la magnitud de la modificacion a realizar',
        input: 'select',
        inputOptions: {
            uno: 'De 20 a 40mts',
            dos: 'De 40 a 50mts',
            tres:'Mas de 50mts',
        },
        inputValidator: elecOpTam => {
            // Si el valor es válido, debes regresar undefined. Si no, una cadena
            do {        
            let elecTamaño = 0 //valor tamaño elegido para sumar
            let agregoMt = 0
            let tamArtisti = 0
            let esp = 0
    
            switch (elecOpTam) {
                case 'uno':
                    elecTamaño = 5000// sumarlo 
                    esp = 1
                    break;
                case 'dos':
                    elecTamaño = 12000
                    esp = 2
                    break;
                case 'tres':

                    Swal
                    .fire({
                        title: 'Por favor indique los mts2 totales a modificar, se agregara un 2% al precio por mts2 adicional',
                        input: 'text',
                        inputValidator: agregoMt => {
                      esp = 3
                    while (agregoMt < 49) {
                        agregoMt = prompt("Debe colocar mas de 49mts2, por favor vuelva a escribir")
                    }
                    tamArtisti = (agregoMt * 500) //SUMA ARTISTICO
                    elecTamaño = (300 * agregoMt) //CUENTA TAMAÑO
                    }
                    })
                    break;
    
            }
            fTamaño = elecTamaño
            espacio = esp
    
        } while (elecOpTam < 1 || elecOpTam > 3 || elecOpTam == "")
    
        return fTamaño, espacio, agregoMt

        }
    })
    


}



function modificacion() {

    Swal
    .fire({
        title: 'Que tipo de modificacion desea realizar',
        input: 'select',
        inputOptions: {
            uno: 'Artistico',
            dos: 'Standard (Mobiliario,Luminaria,Pintura)',
            tres:'Duro (Standard + Obra)',
        },
        inputValidator: electModificacion => {

        do {
        
        let valorTotalModif = 0
        let duro = 0
        let pintura = 0
        let tamArtisti = 0
        let artistica = 0
        let selector = espacio
        switch (electModificacion) {
            case 'uno':
            
                if (selector == uno) {
                    artistica = 40000 //mod 1
                } else if (selector == dos) {
                    artistica = 80000
                } else if (selector == tres) {
                    artistica = (160000 + tamArtisti) //SELECCION PARA ARTISTICO
                    tamArtisti = (agregoMt * 500) //SUMA ARTISTICO    
                }
                valorTotalModif = artistica //PARA SUMA TOTAL SACO ESTA VARIABLE                
                break;

            case 'dos':
                if (selector == uno) {
                    pintura = 10000 //mod 2
                } else if (selector == dos) {
                    pintura = 20000 //mod 2
                } else if (selector == tres) {
                    pintura = (40000 + tamArtisti) // SELECCION PINTURA STANDARD    
                }
                valorTotalModif = pintura //PARA SUMA TOTAL SACO ESTA VARIABLEE

                break;
            case 'tres':
                    if (selector == uno) {
                    pintura = 10000 //mod 2
                    duro = (3000 * 10)
                } else if (selector == dos) {
                    pintura = 20000 //mod 2
                    duro = (3000 * 15)
                } else if (selector == tres) {
                    pintura = (40000 + tamArtisti) // SELECCION PINTURA STANDARD    
                    duro = (3000 * 20)
                }
                valorTotalModif = pintura + duro
                break;

        }

        fModif = valorTotalModif

    } while (electModificacion < 1 || electModificacion > 3 || electModificacion == "")

    return fModif;
}
    })
}

function calidad() {
    let cal = 0
    do {
        alert("Que calidad de materiales desea seleccionar para realizar las modificaciones?")

        let electCalidad = prompt("Presione 1. STANDARD 2.MEDIA 3.ALTA")

        switch (electCalidad) {
            case '1':
                alert("Elijio calidad STANDARD")
                cal = 1
                break;
            case '2':
                alert("Elijio calidad MEDIA")
                cal = 2
                break;
            case '3':
                alert("Elijio calidad ALTA")
                cal = 3
                break;
            default:
                alert("No ingreso una opcion correcta")
        }
    } while (electCalidad < 0 & electCalidad > 4)

    return fCal = cal
}

function cantidad() {
    do {
        alert("Que cantidad de productos por espacio desea seleccionar?")

        let electCantidad = prompt("Presione 1. De 5 a 10 2. De 11 a 15 3. De 16 a 20")

        switch (electCantidad) {
            case '1':
                cant = " 5 a 10 productos"
                break;
            case '2':
                cant = " 11 a 15 productos"
                break;
            case '3':
                cant = " 16 a 20 productos"
                break;
            default:
                alert("No ingreso una opcion correcta")
        }
    } while (electCantidad < 0 && electCantidad > 4)
}

function sumarTotal() {

    valorFinal = fTamaño + fModif

    if (fCal == 2) {
        valorFinal = valorFinal + ((valorFinal * 30) / 100)
    }
    if (fCal == 3) {
        valorFinal = valorFinal + ((valorFinal * 50) / 100)
    }

    alert("El monto total de lo solicitado es un aproximado de " + valorFinal + "$")

}

// para unir con html
function presupuesto(){

    saludar()
    tamaño()
    modificacion()
    calidad()
    cantidad()
    sumarTotal()
    final()

}

let button = document.getElementById('testButton');

button.addEventListener('click', presupuesto);

//inserto mensaje luego de la realizacion del presupuesto
function final (){
const fin = document.createElement("p");
fin.innerHTML = "Gracias por realizar tu presupuesto, animate al cambio!";
document.getElementById("testButton").appendChild(fin);
}
