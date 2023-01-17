
const NumerosContainer= document.getElementsByClassName('calculator__food--option');

let htmlnumeros= `<div class="numeros__gridcontainer">
                    <div class="numeros__gridelement">
                        <span>9</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>8</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>7</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>6</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>5</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>4</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>3</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>2</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>1</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>0</span>
                    </div>
                    <div class="numeros__gridelement">
                        <span>.</span>
                    </div>
                    <div class="borrar__gridelement">
                        <div class="borrar__flecha">
                        <img class="flecha" src="multimedia/flechabolveatra-removebg-preview.png" >
                        </div>
                    </div>
                    </div>`



let htmlcomidas=`<div class="food__gridcontainer">
                    <div class="food__gridelement">
                        <div class="container__vector2">
                            <img class="vector2" src="multimedia/chikenrecolorremovebg-preview.png" alt="">
                        </div>
                    </div>
                    <div class="food__gridelement">
                        <span>Carne</span>
                    </div>
                    <div class="food__gridelement">
                        <span>Helado</span>
                    </div>
                    <div class="food__gridelement">
                    <p> Brocoli</p>
                    </div>
                    
                    </div>`


function HTML(un, el) {
    un[0].innerHTML= "";
    
    un[0].innerHTML= el;
   
}

//function HTML(el) {
	//NumerosContainer[0].innerHTML = "";
	//console.log(el);
	//NumerosContainer[0].innerHTML = el;
//}



const BottonLlamar= document.getElementsByClassName('picture')

BottonLlamar[0].addEventListener('click', ()=>{
    HTML(NumerosContainer,htmlnumeros);
})


BottonLlamar[1].addEventListener('click', ()=>{
   HTML(NumerosContainer,htmlcomidas);
})







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


    const carne = new Comidas("Carne De Res", 100 + "g", 288, 26.3, 0, 19.5);
    const carne50 = new Comidas("Carne De Res", 50 + "g", carne.calorias / 2, carne.proteinas / 2, 0, carne.grasas / 2);
    const carne200 = new Comidas("Carne De Res", 200 + "g", carne.calorias * 2, carne.proteinas * 2, 0, carne.grasas * 2);
    const carne300 = new Comidas("Carne De Res", 300 + "g", carne.calorias * 3, carne.proteinas * 3, 0, carne.grasas * 3);
    const carne400 = new Comidas("Carne De Res", 400 + "g", carne.calorias * 4, carne.proteinas * 4, 0, carne.grasas * 4);
    const carne500 = new Comidas("Carne De Res", 500 + "g", carne.calorias * 5, carne.proteinas * 5, 0, carne.grasas * 5);
    




const BrocolisArr= [ brocoli50, brocoli, brocoli200, brocoli300, brocoli400, brocoli500  ];
const PolloArr= [pollo50, pollo, pollo200, pollo300, pollo400, pollo500];
const CarneArr= [ carne50, carne , carne200, carne300, carne400, carne500];



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

BottonComidas[1].addEventListener('click', ()=>{
    SeleccionCantidad(CarneArr)
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







//function PintarDatos(params) {
  //  const Cuneta= document.getElementById('box__cuenta')
    
  //  let htmlpintado= 
//}





 





const Main= document.getElementsByClassName('body__fondo');
 


const FichaNutri=`
<main class="ficha__body">
    <div class="body__container">
        <div class="box__titel">
            <h1 class="titel">Mi Ficha Nutricional</h1>
        </div>
        <div class="box__tabla">
            <div class="tabla">
                <span>Nombre</span>
            </div>
            <div class="tabla"> 
            <span>Cantidad</span>
            </div>
            <div class="tabla">
            <span>Calorias</span>
            </div>
            <div class="tabla">
            <span>Proteinas</span>
            </div>
            <div class="tabla">
            <span>Carbohidratos</span>
            </div>
            <div class="tabla">
            <span>Grasas</span>
            </div>
        </div>
        <div id="box__info">

        </div>
        <div id="box__cuenta">
            <div> </div>
        </div>
    </div>
</main>
`

function SumarProteinas() {
    const ProteinasDia= DietaNueva.reduce((acc, el)=>{
        return acc + el.proteinas;
     },0)

     const CaloriasDia= DietaNueva.reduce((acc, el)=>{
        return acc + el.calorias ;
     },0)

     const CarboDia= DietaNueva.reduce((acc, el)=>{
        return acc + el.carbohidratos;
     },0)

     const GrasasDia= DietaNueva.reduce((acc, el)=>{
        return acc + el.grasas;
     },0)
    
     const ArrValores= [CaloriasDia, ProteinasDia, CarboDia, GrasasDia];
     
     const ValoJson= JSON.stringify(ArrValores)
     sessionStorage.setItem("valores", ValoJson)
     
     
}


function StorageFicha(arr) {
     const Ajason= JSON.stringify(arr);

    sessionStorage.setItem( "mi dieta" , Ajason);

    
    
}











function ListaHTML(arr) {
    const info= document.getElementById('box__info');
 
    let html2="";
     for (const item of arr) {
        html2= `<ul id="lista" >
         <li class="li__column">${item.nombre}</li>
         <li class="li__column">${item.cantidad}</li>
         <li class="li__column">${item.calorias}</li>
         <li class="li__column">${item.proteinas}</li>
         <li class="li__column" >${item.carbohidratos}</li> 
         <li class="li__column">${item.grasas}</li>
         </ul>`;
         info.innerHTML += html2;
     }

   
}


//function PintarHTML(arr) {
 //   const cuenta= document.getElementById("box__cuenta");

  //  let html3="";

    
 //   html3= ` <div>
  //  <span>Hoy consumiste ${arr[0]} en calorias  </span>
 //  </div>
 //  <div>
 //   <span>Hoy consumiste ${arr[1]} en proteinas  </span>
 //  </div>
 //  <div>
 //  <span>Hoy consumiste ${arr[2]} en carbohidratos </span>
 // </div>
 // <div>
 //   <span>Hoy consumiste ${arr[3]} en grasas </span>
  // </div> `;

    
  //  cuenta.innerHTML += html3;
    
     
//}

const IgualA = document.getElementsByClassName('option__gridelement--igual');

IgualA[0].addEventListener('click', ()=>{
    CierroFicha(),
    SumarProteinas(),
    // PintarHTML(JSON.parse(sessionStorage.getItem("valores")))
    StorageFicha(DietaNueva),
    HTML(Main, FichaNutri),
    ListaHTML( JSON.parse(sessionStorage.getItem("mi dieta")) );

})

const cuenta= document.getElementById("box__cuenta");




 const BottonIMC = document.getElementsByClassName('special__gridelement');

 
    function CalculadoraIMC() {
        let peso
        let altura
        let imc
        while (imc != peso / (altura * altura)) {
            peso=parseInt(prompt("Introduce Tu Peso En KG"))
            altura= parseFloat(prompt("Introduce Tu Altura Separada Por Un Punto"))
            imc= peso / (altura * altura);

            if (imc == peso / (altura * altura)) {
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
  

    function Restar(arr,el) {
        
        arr.pop(el)
        console.log("Se Elimino La Ultima Comida De Tu Dieta");
        console.log(arr);
      
    }


   

 BottonIMC[0].addEventListener('click', ()=>{
    CalculadoraIMC()
 })

 const Resultado= document.getElementById('resultado');

const Menos= document.getElementsByClassName('option__gridelement--menos');

function MostrarStri(el) {
    Resultado.innerText = Resultado.innerText + el

}



Menos[0].addEventListener('click', ()=>{
    Restar(DietaNueva);
 
})





const ArrNumeros=[0, 1,2,3,4,5,6,7,8,9];

function MostrarNum( val) {
  Resultado.innerText= Resultado.innerText + ArrNumeros[val]
}



const numeroX= document.getElementsByClassName('numeros__gridelement');

numeroX[9].addEventListener('click', ()=>{
    MostrarNum(0)
})

numeroX[8].addEventListener('click', ()=>{
    MostrarNum(1)
})

numeroX[7].addEventListener('click', ()=>{
    MostrarNum(2)
})

numeroX[6].addEventListener('click', ()=>{
    MostrarNum(3)
})
numeroX[5].addEventListener('click', ()=>{
    MostrarNum(4)
})

numeroX[4].addEventListener('click', ()=>{
    MostrarNum(5)
})

numeroX[3].addEventListener('click', ()=>{
    MostrarNum(6)
})

numeroX[2].addEventListener('click', ()=>{
    MostrarNum(7)
})

numeroX[1].addEventListener('click', ()=>{
    MostrarNum(8)
})

numeroX[0].addEventListener('click', ()=>{
    MostrarNum(9)
})



const agrego= document.getElementsByClassName('nombres__gridelement')


agrego[0].addEventListener('click', ()=>{
    MostrarStri("KCAL");
})

agrego[1].addEventListener('click', ()=>{
    MostrarStri("PROT")
})

agrego[2].addEventListener('click', ()=>{
    MostrarStri("CARB")
})

function SumaDeCosas() {
   if (Resultado.innerText.includes("KCAL")) {
    const valorKCAl= new Comidas(0, 0,   parseInt( Resultado.innerText), 0, 0, 0); 
    DietaNueva.push(valorKCAl);
    console.log(DietaNueva);
   } else {
    if (Resultado.innerText.includes("PROT")) {
        const valorKCAl= new Comidas(0, 0,   0, parseInt( Resultado.innerText), 0, 0); 
        DietaNueva.push(valorKCAl);
        console.log(DietaNueva);
    } else{
        if (Resultado.innerText.includes("CARB")) {
            const valorKCAl= new Comidas(0, 0,   0, 0 , parseInt( Resultado.innerText), 0); 
            DietaNueva.push(valorKCAl);
            console.log(DietaNueva);
        } else{
            alert("El Valor No Tiene Categoria")
        }
    }
   } 
}

function Clear() {
    Resultado.innerText= Resultado.innerText.slice(1000, -1)
}


const Mas= document.getElementsByClassName('option__gridelement--mas')


Mas[0].addEventListener('click', ()=>{
    SumaDeCosas(),
    Clear();
})



const EliminarUno= document.getElementsByClassName('borrar__gridelement');

function Borrar() {
    if (Resultado.innerText.includes("KCAL")) {
        Resultado.innerText= Resultado.innerText.slice(1000, -1);
       } else {
        if (Resultado.innerText.includes("PROT")) {
            Resultado.innerText= Resultado.innerText.slice(1000, -1);
        } else{
            if (Resultado.innerText.includes("CARB")) {
                Resultado.innerText= Resultado.innerText.slice(1000, -1);
            } else{
                Resultado.innerText= Resultado.innerText.slice(0, -1);
            }
        }
    }
}

EliminarUno[0].addEventListener('click', ()=>{
    Borrar()
})


