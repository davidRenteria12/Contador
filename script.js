const valorElemento = document.querySelector('#value'); // Muestra el número
const botonSumar = document.querySelector('#sumarr'); // Botón +
const botonRestar = document.querySelector('#restarr'); // Botón -
const botonReiniciar = document.querySelector('#reset'); // Botón reiniciar

let valor = 0;

function mostrar(){
    valorElemento.textContent=valor;
}

botonSumar.addEventListener("click", () => {
    valor += 1; // Suma 1 al contador
     mostrar()
});
botonRestar.addEventListener("click", () => {
    valor -= 1; // Suma 1 al contador
     mostrar()
});

botonReiniciar.addEventListener("click",() =>{
    valor = 0;
    mostrar()
});

mostrar();
