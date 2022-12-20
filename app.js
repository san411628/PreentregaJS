


//let peso=parseInt(prompt("PESO"));
//let altura=parseFloat(prompt("ALTURA"));

 //let imc= peso / (altura * altura);

function TablaUsuario( nombre, genero, peso, altura, imc, email,) {
    this.nombre=nombre
    this.genero=genero
    this.peso=peso
    this.altura=altura
    this.imc= imc
    this.email=email

}



//const PrimerUsuario = new TablaUsuario("Santino", "Hombre", peso, altura, imc, "santino@gmail.com");


//console.log(imc);
//console.log(PrimerUsuario);

function Comidas(nombre, cantidad, calorias,proteinas, carbohidratos, grasas  ) {
    this.nombre= nombre
    this.cantidad=cantidad
    this.calorias=calorias
   this.proteinas=proteinas
   this.carbohidratos=carbohidratos
   this.grasas=grasas
 
 
}
 
  const brocoli = new Comidas("Brocoli", "100g", 34 , 4.4, "1,8g", 0.9);
  const pollo = new Comidas("Pollo", "1 Porcion", 316 , 28.7, "27.8g", 9.9);
  const carne = new Comidas("Carne", "1 Porcion", 380, 31.8, "0.1g", 23.6);
  const fideos = new Comidas("fideos", "100g", 917, 7.2, "40.2g", 3.3);
  const helado = new Comidas("Helado", "1 Taza", 1119, 4.6, "32.4g", 14.2);
  const bebida = new Comidas("CocaCola", "1L", 420, 0, "21g", 2.4);

 

  const DietaNueva= [];
function ElegiComida() {
    

  let option

        while (option !=8) {
            
            option=prompt("Que Comiste Hoy? \n1-Pollo \n2-Carne \n3-Brocoli \n4-Fideos \n5-Helado \n8-Finalizar");
        switch (option) {
            case "1":
            
                DietaNueva.push(pollo);
            
                break;
          

            case "2":
                
            DietaNueva.push(carne);
        
                 
                break;

             case "3":
               
             DietaNueva.push(brocoli);
            
                     
                break;

            case "4":
             
             DietaNueva.push(fideos);
               
                        
                 break;

            case "5":
                
            DietaNueva.push(helado);
                   
                            
                break;

            case "8":
             
            alert("Gracias Por Utilizar Nuestra Calculadora!! \n \n Tu Ficha Esta Lista En La Consola.")
            console.log("Este Es El Fin De Tu Ficha Nutricional.");     
                                
             break;
        default:
            alert("Campo Invalido")
         
        }

      
    }
    
}
  
ElegiComida()


for (const el of DietaNueva) {
    console.log(el);
}

const CaloriasDia= DietaNueva.reduce((acc, el)=>{
    return acc + el.calorias;
 },0)
 console.log( "Hoy Consumiste Un Total De"+ " " + CaloriasDia + "Kcal" + " " + "En Calorias");
 
 const ProteinasDia= DietaNueva.reduce((acc, el)=>{
    return acc + el.proteinas;
 },0)

 console.log( "Hoy Consumiste Un Total De"+ " " + ProteinasDia + "g" + " " + "En Proteinas");

 

 const GrasasDia= DietaNueva.reduce((acc, el)=>{
    return acc + el.grasas;
 },0)

 console.log( "Hoy Consumiste Un Total De"+ " " + GrasasDia + " " + "Grasas Totales");



