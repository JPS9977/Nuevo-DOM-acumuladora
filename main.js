const form = document.querySelector('form');
const contenedor = document.querySelector('.contenedor');

let acumuladora = ''
form.addEventListener('submit', function(event){
    event.preventDefault();

    
    //console.log(Object.fromEntries(new FormData(event.target)));
    const data = Object.fromEntries(new FormData(event.target))
            acumuladora +=`<div>
                            <h2>${data.nombre}</h2>
                            <h2 class="azul">${data.apellido}</h2>
                            </div>`;
    form.reset();
    contenedor.innerHTML = acumuladora
})

