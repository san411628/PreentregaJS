


let peso 
let altura
let imc
let alturaPotencia

function calculadora() {  
while (imc != peso / alturaPotencia ) {
     peso= parseInt (prompt("Ingrese Su Peso En KG"));
     altura= parseFloat (prompt("Ingrese Su Altura En Metros Separada Con Un Punto"));

     alturaPotencia= altura * altura;
     imc= peso / alturaPotencia ;

    if (imc == peso / alturaPotencia) {
        console.log("Tu Indice De Masa Corporal Es De" + " " +imc);
        alert("Tu Indice De Masa Corporal Es De" + " " +imc)
        if (imc <= 18.5 ) {
            console.log("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+ "Usted Se encuentra en el rango de peso INSUFISIENTE");
            alert("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+ "Usted Se encuentra en el rango de peso INSUFISIENTE");
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+ "Usted Se encuentra en el rango de peso SALUDABLE");
            alert("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+ "Usted Se encuentra en el rango de peso SALUDABLE");
        } else if (imc >= 25.0 && imc <= 29.9) {
            console.log("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de SOBREPESO");
            alert("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de SOBREPESO");
        } else if (imc >= 30.0) {
            console.log("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de OBESIDAD");
            alert("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de OBESIDAD");
        }







    } else {
        alert("Solo Se permiten Datos Numericos")
    }

     
     
}

}

let dieta= calculadora()
if (dieta == calculadora()) {
    
    opciones= prompt("Elegi el resultado obtenido: \n1- INSUFICIENTE \n2- SALUDABLE \n3- SOBREPESO \n4- OBESIDAD. \n5 Finalizar mi ficha.")

    while (opciones != "5") {
       
        switch (opciones) {
            
            case "1":
                
            alert("Deberias agregar a tu dieta este tipo de comidas. \n- Lacteos \n- Carnes blancas \n- Harinas")
            console.log("Las Comidas Agregadas A Tu Dieta Son: \n1- Lacteos \n2 Carnes blancas \n3- Harinas");
            break;

            case "2":
                
                alert("Deberias agregar a tu dieta este tipo de comidas. \n- Granos \n- Proteinas generales \n- Carboidratos")
                console.log("Las Comidas Agregadas A Tu Dieta Son: \n1- Granos \n2- Proteinas generales \n3- Carboidratos");
                break;

                case "3":
                
                    alert("Deberias agregar a tu dieta este tipo de comidas. \n- Frutas \n- Carnes Rojas \n- Legumbres")
                    console.log("Las Comidas Agregadas A Tu Dieta Son: \n1- Frutas \n2- Carnes Rojas \n3- Legumbres");
                    break;

                    case "4":
                
                        alert("Deberias agregar a tu dieta este tipo de comidas. \n- Vegetales \n- Frutas \n- Carnes Magras")
                        console.log("Las Comidas Agregadas A Tu Dieta Son:  \n1- Vegetales \n2- Frutas \n3- Carnes Magras");
                        break;
            default:
             alert("Campo Invalido")
            break;
        }

        opciones= prompt("Elegi el resultado obtenido: \n1- INSUFICIENTE \n2- SALUDABLE \n3- SOBREPESO \n4- OBESIDAD. \n5 Finalizar mi ficha.")
        if (opciones== "5") {
            alert("Gracias Por Utilizar Nuestra Calculadora!! \n Tu Ficha Esta Lista En La Consola.")
            console.log("Este Es El Fin De Tu Ficha Nutricional.");
        }


    }






} 









