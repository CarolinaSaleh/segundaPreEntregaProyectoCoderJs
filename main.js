let totalCarrito = 0

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let malbec = new Producto("Malbec",70000)
let cabernetSauvignon = new Producto("Cabernet Sauvignon",38000)
let cabernetFranc = new Producto("Cabernet Franc", 67000)
let chardonnay = new Producto("Chardonnay", 84000)
let pinotNoir = new Producto("Pinot Noir", 120000)
let vermut = new Producto("Vermut", 95000)
let bonarda = new Producto("Bonarda", 43000)
let sauvignonBlanc = new Producto("Sauvignon Blanc", 60000)
let semillon = new Producto("Semillón", 68000)
let pinotNoirRose = new Producto("Pinot Noir Rosé", 32000)
let rose = new Producto("Rosé", 25000)
let blend = new Producto("Blend", 39000)

const arrayVinos = [malbec,cabernetSauvignon,cabernetFranc,chardonnay,pinotNoir,vermut,bonarda,sauvignonBlanc,semillon,pinotNoirRose,rose,blend]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar un  ${arrayVinos[0].nombre} por $${arrayVinos[0].precio}\nPulse 2 si desea llevar un  ${arrayVinos[1].nombre} por $${arrayVinos[1].precio}\nPulse 3 si desea llevar un  ${arrayVinos[2].nombre} por $${arrayVinos[2].precio}\nPulse 4 si desea llevar un  ${arrayVinos[3].nombre} por $${arrayVinos[3].precio}\nPulse 5 si desea llevar un  ${arrayVinos[4].nombre} por $${arrayVinos[4].precio}\nPulse 6 si desea llevar un  ${arrayVinos[5].nombre} por $${arrayVinos[5].precio}\nPulse 7 si desea llevar un  ${arrayVinos[6].nombre} por $${arrayVinos[6].precio}\nPulse 8 si desea llevar un  ${arrayVinos[7].nombre} por $${arrayVinos[7].precio}\nPulse 9 si desea llevar un  ${arrayVinos[8].nombre} por $${arrayVinos[8].precio}\nPulse 10 si desea llevar un  ${arrayVinos[9].nombre} por $${arrayVinos[9].precio}\nPulse 11 si desea llevar un  ${arrayVinos[10].nombre} por $${arrayVinos[10].precio}\nPulse 12 si desea llevar un  ${arrayVinos[11].nombre} por $${arrayVinos[11].precio}\nPulse 13 si desea filtrar por precio más bajo`));
    while(opciones < 1 || opciones > 14){
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un  ${arrayVinos[0].nombre} por $${arrayVinos[0].precio}\nPulse 2 si desea llevar un  ${arrayVinos[1].nombre} por $${arrayVinos[1].precio}\nPulse 3 si desea llevar un  ${arrayVinos[2].nombre} por $${arrayVinos[2].precio}\nPulse 4 si desea llevar un  ${arrayVinos[3].nombre} por $${arrayVinos[3].precio}\nPulse 5 si desea llevar un  ${arrayVinos[4].nombre} por $${arrayVinos[4].precio}\nPulse 6 si desea llevar un  ${arrayVinos[5].nombre} por $${arrayVinos[5].precio}\nPulse 7 si desea llevar un  ${arrayVinos[6].nombre} por $${arrayVinos[6].precio}\nPulse 8 si desea llevar un  ${arrayVinos[7].nombre} por $${arrayVinos[7].precio}\nPulse 9 si desea llevar un  ${arrayVinos[8].nombre} por $${arrayVinos[8].precio}\nPulse 10 si desea llevar un  ${arrayVinos[9].nombre} por $${arrayVinos[9].precio}\nPulse 11 si desea llevar un  ${arrayVinos[10].nombre} por $${arrayVinos[10].precio}\nPulse 12 si desea llevar un  ${arrayVinos[11].nombre} por $${arrayVinos[11].precio}\nPulse 13 si desea filtrar por precio más bajo`));
    }
    let productoElegido;
    if(opciones == 1){
        productoElegido = arrayVinos[0]
        totalCarrito += arrayVinos[0].precio
    }
    else if(opciones == 2){
        productoElegido = arrayVinos[1]
        totalCarrito += arrayVinos[1].precio
    }
    else if(opciones == 3){
        productoElegido = arrayVinos[2]
        totalCarrito += arrayVinos[2].precio
    }
    else if(opciones == 4){
        productoElegido = arrayVinos[3]
        totalCarrito += arrayVinos[3].precio
    }
    else if(opciones == 5){
        productoElegido = arrayVinos[4]
        totalCarrito += arrayVinos[4].precio
    }
    else if(opciones == 6){
        productoElegido = arrayVinos[5]
        totalCarrito += arrayVinos[5].precio
    }
    else if(opciones == 7){
        productoElegido = arrayVinos[6]
        totalCarrito += arrayVinos[6].precio
    }
    else if(opciones == 8){
        productoElegido = arrayVinos[7]
        totalCarrito += arrayVinos[7].precio
    }
    else if(opciones == 9){
        productoElegido = arrayVinos[8]
        totalCarrito += arrayVinos[8].precio
    }
    else if(opciones == 10){
        productoElegido = arrayVinos[9]
        totalCarrito += arrayVinos[9].precio
    }
    else if(opciones == 11){
        productoElegido = arrayVinos[10]
        totalCarrito += arrayVinos[10].precio
    }
    else if(opciones == 12){
        productoElegido = arrayVinos[11]
        totalCarrito += arrayVinos[11].precio
    }
    else if(opciones == 13){
        arrayVinos.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un  ${arrayVinos[0].nombre} por $${arrayVinos[0].precio}\nPulse 2 si desea llevar un  ${arrayVinos[1].nombre} por $${arrayVinos[1].precio}\nPulse 3 si desea llevar un  ${arrayVinos[2].nombre} por $${arrayVinos[2].precio}\nPulse 4 si desea llevar un  ${arrayVinos[3].nombre} por $${arrayVinos[3].precio}\nPulse 5 si desea llevar un  ${arrayVinos[4].nombre} por $${arrayVinos[4].precio}\nPulse 6 si desea llevar un  ${arrayVinos[5].nombre} por $${arrayVinos[5].precio}\nPulse 7 si desea llevar un  ${arrayVinos[6].nombre} por $${arrayVinos[6].precio}\nPulse 8 si desea llevar un  ${arrayVinos[7].nombre} por $${arrayVinos[7].precio}\nPulse 9 si desea llevar un  ${arrayVinos[8].nombre} por $${arrayVinos[8].precio}\nPulse 10 si desea llevar un  ${arrayVinos[9].nombre} por $${arrayVinos[9].precio}\nPulse 11 si desea llevar un  ${arrayVinos[10].nombre} por $${arrayVinos[10].precio}\nPulse 12 si desea llevar un  ${arrayVinos[11].nombre} por $${arrayVinos[11].precio}`));

        while(opciones < 1 || opciones > 14){
            opciones = parseInt(prompt(`Pulse 1 si desea llevar un  ${arrayVinos[0].nombre} por $${arrayVinos[0].precio}\nPulse 2 si desea llevar un  ${arrayVinos[1].nombre} por $${arrayVinos[1].precio}\nPulse 3 si desea llevar un  ${arrayVinos[2].nombre} por $${arrayVinos[2].precio}\nPulse 4 si desea llevar un  ${arrayVinos[3].nombre} por $${arrayVinos[3].precio}\nPulse 5 si desea llevar un  ${arrayVinos[4].nombre} por $${arrayVinos[4].precio}\nPulse 6 si desea llevar un  ${arrayVinos[5].nombre} por $${arrayVinos[5].precio}\nPulse 7 si desea llevar un  ${arrayVinos[6].nombre} por $${arrayVinos[6].precio}\nPulse 8 si desea llevar un  ${arrayVinos[7].nombre} por $${arrayVinos[7].precio}\nPulse 9 si desea llevar un  ${arrayVinos[8].nombre} por $${arrayVinos[8].precio}\nPulse 10 si desea llevar un  ${arrayVinos[9].nombre} por $${arrayVinos[9].precio}\nPulse 11 si desea llevar un  ${arrayVinos[10].nombre} por $${arrayVinos[10].precio}\nPulse 12 si desea llevar un  ${arrayVinos[11].nombre} por $${arrayVinos[11].precio}`));
        }
        let productoElegido;
        if(opciones == 1){
            productoElegido = arrayVinos[0]
            totalCarrito += arrayVinos[0].precio
        }
        else if(opciones == 2){
            productoElegido = arrayVinos[1]
            totalCarrito += arrayVinos[1].precio
        }
        else if(opciones == 3){
            productoElegido = arrayVinos[2]
            totalCarrito += arrayVinos[2].precio
        }
        else if(opciones == 4){
            productoElegido = arrayVinos[3]
            totalCarrito += arrayVinos[3].precio
        }
        else if(opciones == 5){
            productoElegido = arrayVinos[4]
            totalCarrito += arrayVinos[4].precio
        }
        else if(opciones == 6){
            productoElegido = arrayVinos[5]
            totalCarrito += arrayVinos[5].precio
        }
        else if(opciones == 7){
            productoElegido = arrayVinos[6]
            totalCarrito += arrayVinos[6].precio
        }
        else if(opciones == 8){
            productoElegido = arrayVinos[7]
            totalCarrito += arrayVinos[7].precio
        }
        else if(opciones == 9){
            productoElegido = arrayVinos[8]
            totalCarrito += arrayVinos[8].precio
        }
        else if(opciones == 10){
            productoElegido = arrayVinos[9]
            totalCarrito += arrayVinos[9].precio
        }
        else if(opciones == 11){
            productoElegido = arrayVinos[10]
            totalCarrito += arrayVinos[10].precio
        }
        else if(opciones == 12){
            productoElegido = arrayVinos[11]
            totalCarrito += arrayVinos[11].precio
        }
    }
    let confirmacion = confirm(`Elegiste ${productoElegido.nombre} y sale ${productoElegido.precio}, desea agregarlo al carrito? `)
    if (confirmacion == true){
        let confirmacion2 = confirm (`El producto se agregó al carrito, deseas comprar algo más?`)
        if(confirmacion2 == true){
            comprar()
        }else {
            let confirmacion3 = confirm (`El total de su compra es de ${totalCarrito}, deseas pagar?`)
            if(confirmacion3 == true){
                alert ("Gracias por tu compra")
            } else{
                alert("Ok, nos vemos pronto!")
            }
        }
    }else{
        let confirmacion4 = confirm("Vas a seguir comprando?")
        if(confirmacion4 == true){
            comprar()
        }else{
            alert("Ok, nos vemos pronto!")
        }
    }

}
comprar()