console.log('es router.js');

// Importar las vistas
import Home from './views/home.js';
import About from './views/about.js';
import Contact from './views/contact.js';
import Contact_hash from './views/contact_hash.js';
import User from './views/user.js';

// Rutas configuradas con sus respectivas vistas
const routes = [
    {
        path: '/',
        view: Home
    },
    {
        path: '/about',
        view: About
    },
    {
        path: '/contact',
        view: Contact
    },
    {
        path: '/contact_hash/#/aaa',
        view: Contact_hash
    },
    {
        path: '/user/:id',
        view: User
    },
    {
        path: '/user/:id/post/aaa',
        view: User
    },
    {
        path: '/user/:id/post/:id_post',
        view: User
    }
];

// Función para navegar a una nueva URL sin recargar
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

// Router para manejar las rutas y cargar contenido dinámico
async function old_router() {
    const currentPath = window.location.pathname;

    const parts = currentPath.split('/');

    const hash = window.location.hash;

    // Encontrar la ruta coincidente
    let routeMatch = matchRoute(currentPath);

    // Si no hay coincidencias, mostrar la página 404
    if (!routeMatch) {
        document.getElementById('content').innerHTML = `<h1>404</h1><p>Página no encontrada.</p>`;
        return;
    }

    // Obtener la vista correspondiente
    const view = routeMatch.route.view;
    console.log('view: ',view);
    
    
    const view_html = await view(routeMatch.params)
    console.log('view_html: ',view_html);

    // Cargar la vista y pasarle parámetros
    document.getElementById('content').innerHTML = view_html;
}


async function router() {
    console.log('=== function router() === ');
   
    const currentPath = window.location.pathname;

    // Encontrar la ruta coincidente
    let routeMatch = matchRoute(currentPath);
    console.log('routeMatch: ',routeMatch);
    
    if(routeMatch){
        console.log('routeMatch.params: ',routeMatch.params);
    }


    // Si no hay coincidencias, mostrar la página 404
    if (!routeMatch) {
        document.getElementById('content').innerHTML = `<h1>404</h1><p>Página no encontrada.</p>`;
        return;
    }

    // Obtener la vista correspondiente
    const view = routeMatch.route.view;
    console.log('view: ',view);

    
    
    const view_html = await view(routeMatch.params)
    console.log('view_html: ',view_html);

    // Cargar la vista y pasarle parámetros
    document.getElementById('content').innerHTML = view_html;
}





// Función para hacer coincidir la ruta con las configuradas (incluye rutas dinámicas)
function old_matchRoute(currentPath) {
    for (const route of routes) {
        console.log('en for --- route: ',route);       
        
        
        const paramNames = [];
        const regexPath = route.path.replace(/:(\w+)/g, (_, paramName) => {
            
            console.log('en replace --- paramName: ',paramName);
            
            paramNames.push(paramName);
            return "([^/]+)";
        });

        console.log('regexPath: ',regexPath);
        
        const regex = new RegExp(`^${regexPath}$`);
        console.log('regex: ',regex);

        const match = currentPath.match(regex);
        console.log('match: ',match);

        if (match) {
            const params = paramNames.reduce((acc, paramName, index) => {
                console.log('acc: ',acc);
                console.log('paramName: ',paramName);
                console.log('index: ',index);

                acc[paramName] = match[index + 1];
                
                console.log('return acc: ',acc);

                return acc;
            }, {});

            console.log('params: ',params);

            return { route, params };
        }
    }
    return null;
}



function matchRoute(currentPath) {
    console.log('=== function matchRoute(currentPath) === ');

    for (const route of routes) {
        console.log('route: ', route);
        
        const routeParts = route.path.split('/').filter(Boolean); // Divide la ruta en partes y elimina vacíos
        console.log('routeParts: ', routeParts);
        
        const pathParts = currentPath.split('/').filter(Boolean); // Divide el currentPath en partes y elimina vacíos
        console.log('pathParts: ', pathParts);

        // Comprobación de longitud de partes
        if (routeParts.length !== pathParts.length) {
            continue; // Si las longitudes no coinciden, continúa al siguiente
        }

        const params = {};
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
                    console.log('switch --- Coinciden las partes. (routePart === pathPart)');
                    matchFound = true; // Marca como encontrado si las partes coinciden
                    break;
                default:
                    // Si no coincide, marca como no encontrado
                    matchFound = false;
                    console.log('switch --- No coincide, marco como no encontrado. matchFound = false');
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
