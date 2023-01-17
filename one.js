
localStorage.clear()




function Comidas(nombre, cantidad, calorias,proteinas, carbohidratos, grasas  ) {
    this.nombre= nombre
    this.cantidad=cantidad
    this.calorias=calorias
    this.proteinas=proteinas
    this.carbohidratos=carbohidratos
     this.grasas=grasas
  
    
}

const brocoli = new Comidas("Brocoli", 100 + "g" , 34 , 2.82, 6.6, 0.37);
const pollo = new Comidas("Pollo Simple", 100 + "g", 176 , 32.7, 0 , 5.0);
const carne = new Comidas("Carne De Res", 100 + "g", 288, 26.3, 0, 19.5);


 const Dieta= [brocoli, pollo, carne]


const LiJson= JSON.stringify(Dieta)
localStorage.setItem("Dieta", LiJson)

const todocontainer= document.getElementById('todo')

const htmlcrear= `<div id="Mio">
               
</div>`

function html(el) {
    todocontainer.innerHTML=""
    todocontainer.innerHTML= el

}

html(htmlcrear)

const biblioteca= document.getElementById('Mio')



function ListaHTML(arr, con) {
    con.innerHTML=" "

    let html2=""
    for (const item of arr) {
        html2= `<ul id="lista" >
        <li class="li__column">${item.nombre}</li>
        <li class="li__column">${item.cantidad}</li>
        <li class="li__column">${item.calorias}</li>
        <li class="li__column">${item.proteinas}</li>
        <li class="li__column" >${item.carbohidratos}</li> 
        <li class="li__column">${item.grasas}</li>
        </ul>`;
        con.innerHTML += html2;
    }
}

ListaHTML(JSON.parse(localStorage.getItem("Dieta")), biblioteca)