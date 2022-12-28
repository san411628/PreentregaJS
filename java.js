







function Comidas(nombre, cantidad, calorias,proteinas, carbohidratos, grasas  ) {
   this.nombre= nombre
   this.cantidad=cantidad
   this.calorias=calorias
   this.proteinas=proteinas
   this.carbohidratos=carbohidratos
    this.grasas=grasas
 
   
}
   
 const brocoli = new Comidas("Brocoli", 100 + "g" , 34 , 2.82, 6.6, 0.37);
 const brocoli50 = new Comidas("Brocoli",  50 + "g" , brocoli.calorias / 2 , brocoli.proteinas / 2, brocoli.carbohidratos / 2, brocoli.grasas / 2);
 const brocoli200 = new Comidas("Brocoli",  200 + "g" , brocoli.calorias * 2 , brocoli.proteinas * 2, brocoli.carbohidratos * 2, brocoli.grasas * 2);
 const brocoli300 = new Comidas("Brocoli",  300 + "g" , brocoli.calorias * 3 , Math.round( brocoli.proteinas * 3) , Math.round (brocoli.carbohidratos * 3) , Math.round( brocoli.grasas * 3));
 const brocoli400 = new Comidas("Brocoli",  400 + "g" , brocoli.calorias * 4 , brocoli.proteinas * 4, brocoli.carbohidratos * 4, brocoli.grasas * 4);
 const brocoli500 = new Comidas("Brocoli",  500 + "g" , brocoli.calorias * 5 ,  brocoli.proteinas * 5 , brocoli.carbohidratos * 5 ,  brocoli.grasas * 5);


    const pollo = new Comidas("Pollo Simple", 100 + "g", 176 , 32.7, 0 , 5.0);
    const pollo50 = new Comidas("Pollo Simple", 50 + "g", pollo.calorias / 2 , pollo.proteinas / 2, 0 , pollo.grasas / 2);
    const pollo200 = new Comidas("Pollo Simple", 200 + "g", pollo.calorias * 2  , pollo.proteinas * 2 , 0 , pollo.grasas * 2 );
    const pollo300 = new Comidas("Pollo Simple", 300 + "g", pollo.calorias * 3  , Math.round( pollo.proteinas * 3) , 0 , pollo.grasas * 3 );
    const pollo400 = new Comidas("Pollo Simple", 400 + "g", pollo.calorias * 4  , pollo.proteinas * 4 , 0 , pollo.grasas * 4 );
    const pollo500 = new Comidas("Pollo Simple", 500 + "g", pollo.calorias * 5  , pollo.proteinas * 5 , 0 , pollo.grasas * 4 );


const BrocolisArr= [ brocoli50, brocoli, brocoli200, brocoli300, brocoli400, brocoli500  ];
const PolloArr= [pollo50, pollo, pollo200, pollo300, pollo400, pollo500];



function FindPush(arr, num) {
    const FindComidas = arr.find((el)=>{
        return el.cantidad == num;
    })
    DietaNueva.push(FindComidas)
}



const DietaNueva =[];


function SeleccionCantidad(arr) {

    let option=prompt("Elige la cantidad Del Alimento Seleccionado \n-50g \n-100g \n-200g \n-300g \n-400g \n-500g \n- Hace Click En El Igual Para Ver Tus Resultados Al Final!");

    switch (option) {
        case "50g" :
        
        FindPush(arr, "50g")
        
            break;
        case "100g":
        
        FindPush(arr, "100g")
        
            break;
      

        case "200g":
    
        FindPush(arr, "200g")
        
             
            break;

         case "300g":
           
        
         FindPush(arr, "300g")
        
                 
            break;

        case "400g":
       
        FindPush(arr, "400g")
        
        
             break;

        case "500g":
            
        FindPush(arr, "500g")
                     
            break;

    default:
        alert("Campo Invalido")
     
    }

  

}




 







const BottonComidas = document.getElementsByClassName('food__gridelement');

BottonComidas[3].addEventListener('click', ()=>{
    SeleccionCantidad(BrocolisArr)
    console.log(DietaNueva);

})

BottonComidas[0].addEventListener('click', ()=>{
    SeleccionCantidad(PolloArr)
    console.log(DietaNueva);

})

function CierroFicha() {
    alert("Gracias Por Utilizar Nuestra Calculadora!! \n Tu Ficha Esta Lista En La Consola.")
    console.log("Este Es El Fin De Tu Ficha Nutricional.");
}

function SumarCalorias() {
    const CaloriasDia= DietaNueva.reduce((acc, el)=>{
        return acc + el.calorias;
     },0)

     console.log( "Hoy Consumiste Un Total De"+ " " + CaloriasDia + "Kcal" + " " + "En Calorias");
 
}

function SumarProteinas() {
    const ProteinasDia= DietaNueva.reduce((acc, el)=>{
        return acc + el.proteinas;
     },0)
    
     console.log( "Hoy Consumiste Un Total De"+ " " + ProteinasDia + "g" + " " + "En Proteinas");

}


function SumarGrasas() {
    const GrasasDia= DietaNueva.reduce((acc, el)=>{
        return acc + el.grasas;
     },0)
    
    console.log( "Hoy Consumiste Un Total De"+ " " + GrasasDia + " " + "Grasas Totales");
    
}
 


const IgualA = document.getElementsByClassName('option__gridelement--igual');

IgualA[0].addEventListener('click', ()=>{
    CierroFicha(),
    SumarCalorias(),
    SumarProteinas(),
    SumarGrasas();

})






 
