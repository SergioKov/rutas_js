export default async function Home(params) {
    // Simular la carga de datos (puede venir de una API)
    const welcomeMessage = "Bienvenido a la página de inicio.";
    const params_html = (Object.keys(params).length >0) ? params : '' ;
    console.log('es home');

    const ruta_desde_raiz = '../../views/Home';

    //1. Cargar el contenido de about.html
    const response = await fetch(`${ruta_desde_raiz}/home.html`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    let htmlContent = await response.text(); // Obtener el contenido HTML

    // Reemplazar los marcadores de posición con las variables
    htmlContent = htmlContent
        .replace('${welcomeMessage}', welcomeMessage)
    ;

    const view = htmlContent;
    
    // 2. Añadir los estilos desde un archivo externo
    function addStyles(){
        loadStyles(`${ruta_desde_raiz}/home.css`);
    };
    
    function loadStyles(stylePath) {
        // Verificar si ya hay un estilo cargado y eliminarlo
        const existingLink = document.querySelector('link[data-dynamic-style]');
        if (existingLink) {
            existingLink.remove(); // Eliminar el estilo anterior
        }
    
        // Crear un nuevo <link> para el archivo de estilos actual
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = stylePath;
        link.setAttribute('data-dynamic-style', 'true'); // Marcador para identificar este estilo como dinámico
        document.head.appendChild(link);
    } 

    const addListeners = null;
    
    // 4. Retornar un array con la vista, los estilos y la función que añade los listeners
    return [view, addStyles, addListeners];
}
