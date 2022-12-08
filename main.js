
let peso 
let altura
let imc
let alturaPotencia
let opciones

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
            if (imc <= 18.5) {
                while (opciones != "3") {

                    opciones= prompt("Estando en el Rango INSUFISIENTE Elegi Como Te Gustaria Continuar: \n1- QUIERO GANAR MASA MUSCULAR \n2- QUIERO MEJORAR MI SALUD \n3- Finalizar mi ficha.")

       
                    switch (opciones) {
                        
                        case "1":
                            
                        alert("Deberias empezar a ejercitar tu fuerza de manera regular con: \n- Ejercicios de Peso Pesado \n- Estimulacion del Musculo")
                        console.log("Las Comidas Agregadas A Tu Dieta Son: \n1- Lacteos \n2 Carnes blancas \n3- Harinas");
                        console.log("Los Ejercicios Agregados A Tu Plan Son: \n- Ejercicios de Peso Pesado \n- Estimulacion del Musculo");
                        break;
            
                        case "2":
                            
                            alert("Deberias Empezar un ejercicio regular e incluir los siguientes alimentos a tu dieta. \n- Granos \n- Carnes Rojas \n- Pastas")
                            console.log("Las Comidas Agregadas A Tu Dieta Son: \n- Granos \n- Carnes Rojas \n- Pastas");
                            console.log("Los Ejercicios Agregados A Tu Plan Son: \n- Caminatas Regulares \n- Ejercicios Funcionales");
                            break;
            
                            case "3":
                            
                                alert("Gracias Por Utilizar Nuestra Calculadora!! \n Tu Ficha Esta Lista En La Consola.")
                                console.log("Este Es El Fin De Tu Ficha Nutricional.");
                             break;


                        default:
                         alert("Campo Invalido")
                        break;
                    }
            
                
            
            
                }
            } 
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+ "Usted Se encuentra en el rango de peso SALUDABLE");
            alert("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+ "Usted Se encuentra en el rango de peso SALUDABLE");
            if (imc >= 18.5 && imc <= 24.9) {
                while (opciones != "3") {

                    opciones= prompt("Estando en el Rango SALUDABLE Elegi Como Te Gustaria Continuar: \n1- QUIERO CAMBIAR MI ALIMENTACION \n2- QUIERO MANTENER MI SALUD \n3- Finalizar mi ficha.")

       
                    switch (opciones) {
                        
                        case "1":
                            
                        alert("Deberias Agregar las Siguientes Comidas A tu Dieta: \n- Granos \n- Proteinas generales \n- Carboidratos")
                        console.log("Las Comidas Agregadas A Tu Dieta Son: \n- Granos \n- Proteinas generales \n- Carboidratos");
                        
                        break;
            
                        case "2":
                            
                            alert("Deberias Empezar a Realizar los siguientes Ejercicios. \n- Ciclismo \n- Caminata \n- Ejercicios de fuerza")
                            console.log("Las Comidas Agregadas A Tu Dieta Son: \n- Granos \n- Carnes Rojas \n- Pastas");
                            console.log("Los Ejercicios Agregados A Tu Plan Son: \n- Ciclismo \n- Caminata \n- Ejercicios de fuerza");
                            break;
                        
                            case "3":
                            
                            alert("Gracias Por Utilizar Nuestra Calculadora!! \n Tu Ficha Esta Lista En La Consola.")
                            console.log("Este Es El Fin De Tu Ficha Nutricional.");
                           break;

                           
                        default:
                         alert("Campo Invalido")
                        break;
                    }
            
            
            
            
                }
            } 
        } else if (imc >= 25.0 && imc <= 29.9) {
            console.log("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de SOBREPESO");
            alert("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de SOBREPESO");
            
            if (imc >= 25.0 && imc <= 29.9) {
                while (opciones != "3") {

                    opciones= prompt("Estando en el Rango SOBREPESO Elegi Como Te Gustaria Continuar: \n1- QUIERO CAMBIAR MI ALIMENTACION \n2- QUIERO MEJORAR MI SALUD \n3- Finalizar mi ficha.")

       
                    switch (opciones) {
                        
                        case "1":
                            
                        alert("Deberias Agregar las Siguientes Comidas A tu Dieta: \n- Vegetales \n- Legumbres \n- Carnes Blancas")
                        console.log("Las Comidas Agregadas A Tu Dieta Son: \n- Vegetales \n- Legumbres \n- Carnes Blancas");
                        
                        break;
            
                        case "2":
                            
                            alert("Deberias Empezar a Realizar los siguientes Ejercicios. \n- Ciclismo \n- Ejercicios de Musculacion \n- Cardio Regular")
                            console.log("Las Comidas Agregadas A Tu Dieta Son: \n- Vegetales \n- Legumbres \n- Carnes Blancas");
                            console.log("Los Ejercicios Agregados A Tu Plan Son: \n- Ciclismo \n- Uso De Pesas \n- Deportes De Alta Intensidad");
                            break;
            
                           
                            case "3":
                            
                                alert("Gracias Por Utilizar Nuestra Calculadora!! \n Tu Ficha Esta Lista En La Consola.")
                                console.log("Este Es El Fin De Tu Ficha Nutricional.");
                             break;


                        default:
                         alert("Campo Invalido")
                        break;
                    }
            
            
            
            
                }
            } 




        } else if (imc >= 30.0) {
            console.log("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de OBESIDAD");
            alert("Ya que Tu Indice de Masa Corporal es de" + " " + imc + " "+"Usted Se encuentra en el rango de OBESIDAD");

            if (imc >= 30.0) {
                while (opciones != "3") {

                    opciones= prompt("Estando en el Rango OBESIDAD Elegi Como Te Gustaria Continuar: \n1- QUIERO CAMBIAR MI ALIMENTACION \n2- QUIERO PERDER PESO \n3- Finalizar mi ficha.")

       
                    switch (opciones) {
                        
                        case "1":
                            
                        alert("Deberias Disminuir las Cantidades De Estas Comidas: \n- Azucares \n- Harinas \n- Grasas Saturadas")
                        console.log("Las Comidas Que Debes Eliminar Son:  \n- Azucares \n- Harinas \n- Grasas Saturadas");
                        
                        break;
            
                        case "2":
                            
                            alert("Deberias Empezar a Realizar los siguientes Ejercicios. \n- Deportes Activos \n- Ejercicios con Pesas \n- Cardio Constante")
                            console.log("Las Comidas Que Debes Eliminar Son:  \n- Azucares \n- Harinas \n- Grasas Saturadas");
                            console.log("Los Ejercicios Agregados A Tu Plan Son:\n- Deportes Activos \n- Ejercicios con Pesas \n- Cardio Constante");
                            break;



                            case "3":
                            
                             alert("Gracias Por Utilizar Nuestra Calculadora!! \n Tu Ficha Esta Lista En La Consola.")
                             console.log("Este Es El Fin De Tu Ficha Nutricional.");
                            break;

                           
                        default:
                         alert("Campo Invalido")
                        break;
                    }
            
                    
            
            
                }
            } 


        }







    } else {
        alert("Solo Se permiten Datos Numericos")
    }

     
     
}

}

calculadora()