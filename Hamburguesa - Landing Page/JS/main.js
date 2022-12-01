document.addEventListener('DOMContentLoaded', () => {
    actualizarMain();
    colocarBar();
    cerrarBtn();
    desplegarMenu();
})

function colocarBar(){
    if(window.innerWidth > 720){
        return;
    }else{
        //Eliminar nav
        // const nav = document.querySelector('.nav-menu');
        // nav.remove()


        //Crear la bar
        const barDiv = document.createElement('div');
        barDiv.classList.add('barDiv')

        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-bars', 'bar')

        barDiv.appendChild(icon)

        const containerMenu = document.querySelector('.container-menu');
        containerMenu.appendChild(barDiv)
    }     
}

function actualizarMain(){
    if(window.innerWidth > 720){
        return;
    }else{

        //Insertar en el primer cover

        const svg = document.querySelector('.svg')
        const div = document.querySelector('.text')
        
        div.insertBefore(svg, div.lastElementChild)


        //Eliminar cover 1

        const cover1 = document.querySelector('.cover1')
        cover1.remove();    
    } 
}

function desplegarMenu(){
    const bar = document.querySelector('.bar');
    const navMenu = document.querySelector('.nav-menu');
   
    bar.addEventListener('click', () => {
        navMenu.classList.toggle("active")
    })
}

function cerrarBtn(){
    if(window.innerWidth > 720){
        return;
    }else{
        //Agregar Btn
    const navMenu = document.querySelector('.nav-menu');

    const btn = document.createElement('button');
    btn.classList.add('cerrar-btn');
    btn.textContent = 'Cerrar';

    navMenu.appendChild(btn)

    //Cerrar Nav

    btn.addEventListener('click', () => {
    navMenu.classList.toggle("active")
})  
    } 
    
}