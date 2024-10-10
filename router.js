console.log('es router.js');

// Importar las vistas
import Home from './views/Home/home.js';
import About from './views/About/about.js';
import Contact from './views/Contact/contact.js';
import Contact_hash from './views/Contact_hash/contact_hash.js';
import User from './views/User/user.js';
import Error404 from './views/Error404/error404.js';

// Rutas configuradas con sus respectivas vistas
const routes = [
    {
        path: '/',
        fn_view: Home
    },
    {
        path: '/about',
        fn_view: About
    },
    {
        path: '/contact',
        fn_view: Contact
    },
    {
        path: '/contact_hash',
        fn_view: Contact_hash
    },
    {
        path: '/user/',
        fn_view: User
    },
    {
        path: '/user/:userId',
        fn_view: User
    },
    {
        path: '/user#userId=:userId&postId=:postId',
        fn_view: User
    },
    {
        path: '/user/:userId/post/:postId',
        fn_view: User
    },
    {
        path: '/404',
        fn_view: Error404
    }
];

// Función para navegar a una nueva URL sin recargar
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

function removeDynamicStyle(){
    const existingLink = document.querySelector('link[data-dynamic-style]');
    if (existingLink) {
        existingLink.remove(); // Eliminar el estilo anterior
    }
}


async function router() {
    console.log('=== function router() === ');

    removeDynamicStyle();
   
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;//'#/aaa/bbb'

    // Encontrar la ruta coincidente
    let routeMatch = matchRoute(currentPath, currentHash);
    console.log('routeMatch: ',routeMatch);

    if(routeMatch){
        console.log('routeMatch.params: ',routeMatch.params);
    }


    // Si no hay coincidencias, mostrar la página 404
    if (!routeMatch) {
        // Obtener la vista correspondiente
        const error404 = routes.find(r => r.path === '/404');
        console.log('error404: ',error404);

        // Obtener la vista correspondiente
        const fn_view = error404.fn_view;
        console.log('fn_view: ',fn_view);

        const params = {};
        
        const [view_html/*, addStyles, addListeners*/] = await fn_view(params);
        //console.log('view_html: ',view_html);

        document.getElementById('content').innerHTML = view_html;
        return;
    }

    // Obtener la vista correspondiente
    const fn_view = routeMatch.route.fn_view;
    //console.log('fn_view: ',fn_view);
    
    
    const [view_html, addStyles, addListeners] = await fn_view(routeMatch.params);
    //console.log('view_html: ',view_html);

    //1. Añado estilos para que no se vea html sin estilos.
    if(addStyles){
        console.log('[if] --- hay addStyles ');
        aaa();
        async function aaa(){
            //alert('antes de cargar estilos');
            await addStyles();
            //alert('estilos cargados');
        }
    }else{
        console.log('[else] --- no hay addStyles ');
    }

    //2. Cargar la vista y pasarle parámetros
    document.getElementById('content').innerHTML = view_html;

    //3. Añadir los listeners después de que el HTML esté en el DOM
    if(addListeners){
        console.log('[if] --- hay addListeners ');
        addListeners();
    }else{
        console.log('[else] --- no hay addListeners ');
    }
    
}


// Función para hacer coincidir la ruta con las configuradas (incluye rutas dinámicas)
function matchRoute(currentPath, currentHash) {
    console.log('=== function matchRoute(currentPath) === ');

    for (const route of routes) {
        console.log('route: ', route);
        
        const routeParts = route.path.split('/').filter(Boolean); // Divide la ruta en partes y elimina vacíos
        console.log('routeParts: ', routeParts);
        
        const pathParts = currentPath.split('/').filter(Boolean); // Divide el currentPath en partes y elimina vacíos
        console.log('pathParts: ', pathParts);
        console.log(' ');
        
        // Comprobación de longitud de partes
        if (routeParts.length !== pathParts.length) {
            console.log('--- longitudes no coinciden, continúa al siguiente ');
            continue; // Si las longitudes no coinciden, continúa al siguiente
        }

        let params = {};
        let matchFound = false; // Inicializa matchFound como false

        if(currentPath === '/'){
            return { route, params }; // Retorna la ruta y los parámetros encontrados (vacios)
        }

        for (let i = 0; i < routeParts.length; i++) {
            const routePart = routeParts[i];
            console.log('en for --- routePart: ', routePart);
            
            const pathPart = pathParts[i];
            console.log('en for --- pathPart: ', pathPart);

            switch (true) {
                case routePart.startsWith(':'):
                    // Es un parámetro, guarda su valor
                    const paramName = routePart.slice(1); // Extrae el nombre del parámetro. ':id' => 'id'
                    params[paramName] = pathPart; // Asigna el valor al objeto de parámetros
                    console.log('switch --- empieza por [:]. paramName: ', paramName);
                    matchFound = true; // Marca como encontrado si hay un parámetro
                    break;

                case routePart === pathPart:
                    console.log(`switch --- (${routePart} === ${pathPart}) --- Coinciden las partes.`);
                    matchFound = true; // Marca como encontrado si las partes coinciden
                    let params_hash;
                    if(currentHash.includes('/')){
                        params_hash = getSlashParams();
                        console.log('switch --- hay slash params. currentHash: ', currentHash);
                    }else{
                        params_hash = getHashParams();
                        console.log('switch --- hay hash params. currentHash: ', currentHash);
                    }
                    console.log('switch --- params_hash: ', params_hash);
                    params = params_hash;
                    break;

                default:
                    // Si no coincide, marca como no encontrado
                    matchFound = false;
                    console.log(`switch --- (${routePart} !== ${pathPart}) --- No coinciden, marco como no encontrado. matchFound = false`);
                    break;
            }

            // Si no hay coincidencia, salimos del bucle
            if (!matchFound) {
                console.log('--- No hay coincidencia, salimos del bucle');
                break;
            }
        }// end for inner

        if (matchFound) {
            console.log('--- return: ', { route, params });
            return { route, params }; // Retorna la ruta y los parámetros encontrados
        }
    }// end for outer

    return null; // Si no se encuentra ninguna coincidencia
}




function setHashParams(userId, postId) {
    // Establecer el hash en la URL
    window.location.hash = `userId=${userId}&postId=${postId}`;
}

function getHashParams() {
    const hash = window.location.hash.slice(1); // Eliminar el símbolo '#'
    const params = new URLSearchParams(hash); // Crear un objeto URLSearchParams

    // Obtener los valores de los parámetros
    const userId = params.get('userId');
    const postId = params.get('postId');

    return { userId, postId };
}

function getSlashParams() {
    const hash = window.location.hash.slice(1); // Eliminar el símbolo '#'
    const params = hash.split('/');//'#/2/1' => ['','2','1']

    // Obtener los valores de los parámetros
    const userId = params[1] || null;
    const postId = params[2] || null;

    return { userId, postId };
}

function displayHashParams() {
    const { userId, postId } = getHashParams();
    const output = document.getElementById('output');
    output.textContent = `userId: ${userId}, postId: ${postId}`;
}




// Escuchar clics en enlaces con `data-link`
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            console.log('Navegando a: ', e.target.href); // Agrega este log para depurar
            navigateTo(e.target.href);
        }
    });

    // Manejar navegación con botones atrás/adelante del navegador
    window.addEventListener('popstate', router);

    // Inicializar la primera ruta
    router();
});





