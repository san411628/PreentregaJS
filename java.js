
function HTML(un, el) {
   un[0].innerHTML= "";
    
  un[0].innerHTML= el;
   
}


function Comidas(nombre, cantidad, calorias,proteinas, carbohidratos, grasas  ) {
   this.nombre= nombre
   this.cantidad=cantidad
   this.calorias=calorias
   this.proteinas=proteinas
   this.carbohidratos=carbohidratos
    this.grasas=grasas
 
   
}
   





function FindPush(arr, num) {
    const FindComidas = arr.find((el)=>{
        return el.cantidad == num;
    })
    DietaNueva.push(FindComidas)
}



const DietaNueva =[];





function CierroFicha() {
    alert("Gracias Por Utilizar Nuestra Calculadora!! \n Tu Ficha Esta Lista En La Consola.")
    console.log("Este Es El Fin De Tu Ficha Nutricional.");
}



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

function PintarHTML(arr) {
   const CuentaContainer= document.getElementById("box__cuenta");

   let html3="";

    
   html3= ` <div>
    <span>Hoy consumiste ${arr[0]} en calorias  </span>
    </div>
    <div>
    <span>Hoy consumiste ${arr[1]} en proteinas  </span>
    </div>
    <div>
    <span>Hoy consumiste ${arr[2]} en carbohidratos </span>
    </div>
    <div>
    <span>Hoy consumiste ${arr[3]} en grasas </span>
   </div> `;

    
   CuentaContainer.innerHTML += html3;
    

     
}


//const ContenedorNumeros= document.getElementsByClassName('numeros__gridcontainer')
const ContenedorAll= document.getElementsByClassName('calculator__all')
const ContenedorCarbohidratos= document.getElementsByClassName('calculator__carbohidratos')
const ContenedorCaracteres= document.getElementsByClassName('calculator__tabla')
//const BtnPesos= document.getElementsByClassName('box2__pesos')
//const BtnNutricional= document.getElementsByClassName('box1__caracteres')

const arrAll=[ContenedorAll[0], ContenedorCaracteres[0], ContenedorCarbohidratos[0]];
 //const ArrCaracteres=[BtnNutricional[0], BtnPesos[0]];
//const ArrPesos=[agrego[0], agrego[1], agrego[2], agrego[3], agrego[4], agrego[5]]




function CambiarClassDis(el, arr) {
   
   
    for (const un of arr) {
     //SACAR
        if (un.classList[1]=="active") {
            un.classList.remove("active")
            un.classList.add("hidden")
        } 
    }

     //PONER
    el[0].classList.remove("hidden");
    el[0].classList.add("active");

    

}



const BottonComidas = document.getElementsByClassName('food__gridelement');






function CreoVariante() {
    const MiVarianteAct= document.getElementsByClassName('box1__caracteres')
    MiVarianteAct[0].innerHTML=" "
  
    const cantidadAlimento=`   
<div class="caracteres__gridcontainer">
    <div class="pesos__gridelement">
        <span>GRAMOS</span>
    </div>
    <div class="pesos__gridelement">
        <span>ONZAS</span>
    </div>
    <div class="pesos__gridelement">
        <span>Porcion</span>
    </div>
</div>`
 

    MiVarianteAct[0].innerHTML += cantidadAlimento;

    const AgregoPesos= document.getElementsByClassName('pesos__gridelement')


    AgregoPesos[0].addEventListener('click', ()=>{
        MostrarStri("G")
    })
} 


function CreoVarianteNormal() {
    const MiVarianteAct= document.getElementsByClassName('box1__caracteres')
    MiVarianteAct[0].innerHTML=" "
  
    const VariableNormal= `  <div class="caracteres__gridcontainer">
                                            
                        <div class="nombres__gridelement">
                            <span>CALORIAS</span>
                        </div>
                        <div class="nombres__gridelement">
                            <span>PROTEINAS</span>
                        </div>
                        <div class="nombres__gridelement">
                            <span>CARBOHIDRATOS</span>
                        </div>
                        </div> `
 

    MiVarianteAct[0].innerHTML += VariableNormal ;

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
    
} 

CreoVarianteNormal()

                                    //nombre       cant     kcal   prot   carb  grasa
const PolloPechuga = new Comidas("Pollo Pechuga", 1 + "g", 1.95 , 0.2955 , 0 , 0.0772);
const PolloConPiel = new Comidas("Pollo Piel", 1 + "g", 2.06 , 0.16, 0 , 0.033);
const PolloFrito = new Comidas("Pollo Frito", 1 + "g", 2.41 , 0.2 , 0.09 , 0.14);
const PolloHorno = new Comidas("Pollo Horno", 1 + "g", 2.37, 0.2707, 0, 0.1349);

const PescadoMerluza = new Comidas("Merluza", 1 + "g", 1.32, 0.2138, 0.0041, 0.0438)
const PescadoBlanco = new Comidas("Pescado Blanco", 1 + "g", 1.34, 0.1909, 0, 0.0586)
const PescadoSalmon = new Comidas("Salmon", 1 + "g", 1.46, 0.2162, 0, 0.0593)
const PescadoRabas = new Comidas("Rabas", 1 + "g",1.75, 0.097, 0.123, 0.096)

const CarneRes = new Comidas("Carne Res", 1 + "g",1.35, 0.2191, 0, 0.0462)
const CarneChorizo = new Comidas("Chorizo", 1 + "g",3.58, 0.21, 0.032, 0.29)
const CarneCerdo = new Comidas("Cerdo Lomo", 1 + "g",1.36, 0.2054, 0, 0.0541)
const Salchichas = new Comidas("Salchichas", 1 + "g",1.9 , 0.088, 0.061, 0.118)

const Atun = new Comidas("Atun Lata", 1 + "g",1.16, 0.2551, 0, 0.0082)
const Jamon = new Comidas("Jamon", 1 + "g",1.21, 0.1813, 0.0197, 0.0398 )



function guardarcomida(el) {
  MostrarStriVacio(el.nombre)
    let eljsa= JSON.stringify(el)
    sessionStorage.setItem(el.nombre, eljsa )
}





BottonComidas[0].addEventListener('click', ()=>{
    guardarcomida(PolloPechuga),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[1].addEventListener('click', ()=>{
    guardarcomida(PolloConPiel),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[2].addEventListener('click', ()=>{
    guardarcomida(PolloHorno),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[3].addEventListener('click', ()=>{
    guardarcomida(PolloFrito),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[4].addEventListener('click', ()=>{
    guardarcomida(PescadoMerluza),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[5].addEventListener('click', ()=>{
    guardarcomida(PescadoBlanco),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[6].addEventListener('click', ()=>{
    guardarcomida(PescadoSalmon),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[7].addEventListener('click', ()=>{
    guardarcomida(PescadoRabas),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[8].addEventListener('click', ()=>{
    guardarcomida(CarneRes),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[9].addEventListener('click', ()=>{
    guardarcomida(CarneCerdo),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[10].addEventListener('click', ()=>{
    guardarcomida(CarneChorizo),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[11].addEventListener('click', ()=>{
    guardarcomida(Salchichas),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

BottonComidas[12].addEventListener('click', ()=>{
    guardarcomida(Atun),
    CreoVariante(),
    CambiarClassDis(ContenedorCaracteres, arrAll)


})

//fetch('http://api.spoonacular.com/recipes/findByNutrients')
//.then(res=> res.json())
//.then(data=>{
  // console.log(data);
//});







const BtnCambio= document.getElementsByClassName('picture');

BtnCambio[0].addEventListener('click', ()=>{
    CambiarClassDis(ContenedorCaracteres, arrAll)
    
})

BtnCambio[1].addEventListener('click', ()=>{
    CambiarClassDis(ContenedorAll, arrAll)
})

BtnCambio[2].addEventListener('click', ()=>{
    CambiarClassDis(ContenedorCarbohidratos, arrAll)
})

console.log(BottonComidas);

const IgualA = document.getElementsByClassName('option__gridelement--igual');

IgualA[0].addEventListener('click', ()=>{
    CierroFicha(),
    SumarProteinas(),
    StorageFicha(DietaNueva),
    HTML(Main, FichaNutri),
    ListaHTML( JSON.parse(sessionStorage.getItem("mi dieta")) ),
    PintarHTML(JSON.parse(sessionStorage.getItem("valores")));

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
        Toastify({
            text: "Se Elimino El Ultimo Alimento De Tu Ficha ",
            position: "left",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            duration: 2500
            
        }).showToast();
        console.log(arr);
      
    }


   

 BottonIMC[0].addEventListener('click', ()=>{
    CalculadoraIMC()
 })

 const Resultado= document.getElementById('resultado');
 const Strin= document.getElementById('stri')
const Menos= document.getElementsByClassName('option__gridelement--menos');

function MostrarStri(el) {
    Resultado.innerText = Resultado.innerText + " " + el
}

function MostrarStriVacio(el) {
   Strin.innerText = Strin.innerText + el

}

Menos[0].addEventListener('click', ()=>{
    Restar(DietaNueva);
 
})





const ArrNumeros=[0,1,2,3,4,5,6,7,8,9,","];

function MostrarNum( val) {
  Resultado.innerText= Resultado.innerText + ArrNumeros[val]
}


const numeroX= document.getElementsByClassName('numeros__gridelement');


numeroX[10].addEventListener('click', ()=>{
    MostrarNum(10)
})

numeroX[9].addEventListener('click', ()=>{
    MostrarNum(0)
})

numeroX[8].addEventListener('click', ()=>{
    MostrarNum(3)
})

numeroX[7].addEventListener('click', ()=>{
    MostrarNum(2)
})

numeroX[6].addEventListener('click', ()=>{
    MostrarNum(1)
})
numeroX[5].addEventListener('click', ()=>{
    MostrarNum(6)
})

numeroX[4].addEventListener('click', ()=>{
    MostrarNum(5)
})

numeroX[3].addEventListener('click', ()=>{
    MostrarNum(4)
})

numeroX[2].addEventListener('click', ()=>{
    MostrarNum(9)
})

numeroX[1].addEventListener('click', ()=>{
    MostrarNum(8)
})

numeroX[0].addEventListener('click', ()=>{
    MostrarNum(7)
})







function Clear() {
    Resultado.innerText= Resultado.innerText.slice(1000, -1)
    Strin.innerText= Strin.innerText.slice(1000, -1)
}




const Mas= document.getElementsByClassName('option__gridelement--mas')



Mas[0].addEventListener('click', (event)=>{
    function SumaDeCosas() {
        if (Resultado.innerText.includes("KCAL")) {
         const valorKCAl= new Comidas(0, 0,   parseInt( Resultado.innerText), 0, 0, 0); 
         DietaNueva.push(valorKCAl);
         console.log(DietaNueva);
         Toastify({
             text: "Se Agrego El Alimento",
             position: "left",
             style: {
                 background: "linear-gradient(to right, #00b09b, #96c93d)",
               },
             duration: 2500
             
         }).showToast();
         Clear()
        } else {
         if (Resultado.innerText.includes("PROT")) {
             const valorKCAl= new Comidas(0, 0,   0, parseInt( Resultado.innerText), 0, 0); 
             DietaNueva.push(valorKCAl);
             console.log(DietaNueva);
             Toastify({
                 text: "Se Agrego El Alimento",
                 position: "left",
                 style: {
                     background: "linear-gradient(to right, #00b09b, #96c93d)",
                   },
                 duration: 2500
                 
             }).showToast();
             Clear()
         } else{
             if (Resultado.innerText.includes("CARB")) {
                 const valorKCAl= new Comidas(0, 0,   0, 0 , parseInt( Resultado.innerText), 0); 
                 DietaNueva.push(valorKCAl);
                 console.log(DietaNueva);
                 Toastify({
                     text: "Se Agrego El Alimento",
                     position: "left",
                     style: {
                         background: "linear-gradient(to right, #00b09b, #96c93d)",
                       },
                     duration: 2500
                     
                 }).showToast();
                 Clear();
                } else if (Resultado.innerText.includes("G")) {
                    const ComidaGuardada= JSON.parse(sessionStorage.getItem(Strin.innerText))
                    const GuardoDato = new Comidas(Strin.innerText, parseInt( Resultado.innerText) + "g" , parseInt( Resultado.innerText), parseInt( Resultado.innerText), parseInt( Resultado.innerText), parseInt( Resultado.innerText)  );
                    console.log(Strin.innerText);
                    let MiComida= new Comidas(Strin.innerText, GuardoDato.cantidad, Math.round( ComidaGuardada.calorias * GuardoDato.calorias), Math.round( ComidaGuardada.proteinas * GuardoDato.proteinas), Math.round(  ComidaGuardada.carbohidratos * GuardoDato.carbohidratos), Math.round( ComidaGuardada.grasas * GuardoDato.grasas))
                    DietaNueva.push(MiComida);
                    console.log(DietaNueva);
                    Toastify({
                        text: "Se Agrego El Alimento",
                        position: "left",
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                          },
                        duration: 2500
                        
                    }).showToast();
                    Clear();
                } else{
                            Toastify({
                                text: "El Valor No tiene Categoria",
                                position: "left",
                                style: {
                                    background: "linear-gradient(to right, #FF0000, #ff6600)",
                                },
                                duration: 3000
                                
                            }).showToast();

                            event.preventDefault();
                            
                        }
         }
        } 
     }

     SumaDeCosas(),
     CreoVarianteNormal()


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

//BottonLlamar[0].addEventListener('click', ()=>{
   // HTML(NumerosContainer,htmlnumeros)
//})


//BottonLlamar[1].addEventListener('click', ()=>{
   //HTML(NumerosContainer,htmlcomidas)
//})







