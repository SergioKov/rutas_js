'use strict'



//start modo 1
class ProductRepository {
    async getProducts(){
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
    }
}

const repo = new ProductRepository();
//repo.getProducts();

const asyncArrow = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    //console.log(data);
    return data;
}

//asyncArrow();
//end modo 1







//start modo 2
/*(async ()=>{
    console.log(1);
    const res = await asyncArrow();
    console.log(res);
    console.log(2);
})();
*/
//end modo 2

/*
//start modo 3
async function aaa(){
    console.log(1);
    const res = await asyncArrow();
    console.log(res);
    console.log(2);
}

aaa();
//end modo 3
*/




//lesson 88
async function getAllProducts(){
    const response = await fetch('https://dummyjson.com/products');
    //console.log(response);
    return response.json();
}

async function getProduct(id){
    const response = await fetch('https://dummyjson.com/products/' + id);
    //console.log(response);
    return response.json();
}

async function main(){
    const { products } = await getAllProducts();
    //console.log(products);
    
    const res = await Promise.all([
        getProduct(1),
        getProduct(2),
        getProduct(3),
    ]);
    //console.log(res);    

    const res2 = await Promise.all( products.map(product => getProduct(product.id)));
    //console.log(res2);

    /*for (const product of products){
        
        const res = await getProduct(product.id);
        console.log(res);        

        //console.log(`${product.id} ${product.title}`);
    }
    */
}

main();


window.onscroll = function() {
    
    const header = document.querySelector('header');
    const wr_nav = document.getElementById('wr_nav');
    const nav = document.getElementById('navbar');
    const content = document.querySelector('#content');
    const header_h = header.offsetHeight;
    const nav_h = nav.offsetHeight;
    const wr_nav_h = wr_nav.offsetHeight;

    if (window.scrollY > header_h) {
        wr_nav.classList.add('fixed');
        content.style.paddingTop = wr_nav_h + 'px';
    } else {
        wr_nav.classList.remove('fixed');
        content.style = '';
    }

    animateFadeIn();

    const toTopButton = document.getElementById('toTop');

    // Si el usuario ha hecho scroll hacia abajo más de 200 píxeles
    if (window.scrollY > 150) {
        toTopButton.classList.add('visible'); // Muestra el botón
    } else {
        toTopButton.classList.remove('visible'); // Oculta el botón
    }
};

function animateFadeIn(){
    
    const elemento = document.querySelector('.elemento-a-animar');
    if(elemento){
        //const distanciaDesdeLaParteSuperior = elemento.offsetTop;
        if (window.scrollY > elemento.offsetTop - window.innerHeight) {
            elemento.classList.add('visible');
        }else{
            //elemento.classList.remove('visible');
        }
    }
    
    const elemento2 = document.querySelector('.elemento-a-animar2');
    if(elemento2){
        if (window.scrollY > elemento2.offsetTop - window.innerHeight) {
            elemento2.classList.add('visible');
        }else{
            //elemento2.classList.remove('visible');
        }
    }    

    const elemento3 = document.querySelector('.elemento-a-animar3');
    if(elemento3){
        if (window.scrollY > elemento3.offsetTop - window.innerHeight) {
            elemento3.classList.add('visible');
        }else{
            //elemento2.classList.remove('visible');
        }
    }
}


const m_btn_menu = document.getElementById('m_btn_menu');
const wr_links = document.getElementById('wr_links');
const menu_fondo = document.getElementById('menu_fondo');
const parte_transp = document.getElementById('parte_transp');

function closeMenu(){ 
    menu_fondo.classList.remove('visible');
    wr_links.classList.remove('visible');
    setTimeout(()=>{
        //wr_links.classList.remove('fadeIn');
    },1000)  
}

function openMenu(){    
    menu_fondo.classList.add('visible');
    wr_links.classList.add('visible');
    setTimeout(()=>{
        //wr_links.classList.add('fadeIn');
    },300)
}

m_btn_menu.addEventListener('click',(e)=>{
    e.preventDefault();
    openMenu();
});

const link_closeAll = document.querySelectorAll('.link_close');
link_closeAll.forEach(link => {
    link.addEventListener('click', e => {
        //closeMenu();
    });
});











