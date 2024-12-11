export default async function Category(params) {
    // Variables específicas para la página Category
    console.log('=== vista - async function Category() ===');
    console.log('params: ', params);

    let categoryName = 'vacio';
    let userId = 'vacio';

    //const categoryName = params[0]
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        console.log('i: ', i);
        console.log('element: ', element);

        if(i == 0){
            categoryName = element;
        }
        if(i == 1){
            userId = element;
        }        
    }


    const aboutMessage = `Esta es la página de Category con nombre: <b>${categoryName}</b> y con user: <b>${userId}</b>.`;
    const additionalInfo = "Aquí puedes encontrar más información sobre Category.";
    const text_about = "Aquí algun texto de CATEGORY...";

    const ruta_desde_raiz = '../../views/Category';

    //1. Cargar el contenido de about.html
    const response = await fetch(`${ruta_desde_raiz}/category.html`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    let htmlContent = await response.text(); // Obtener el contenido HTML

    // Reemplazar los marcadores de posición con las variables
    htmlContent = htmlContent
        .replace('${aboutMessage}', aboutMessage)
        .replace('${additionalInfo}', additionalInfo)
        .replace('${text_about}', text_about)
    ;

    const view = htmlContent;
    console.log('view: ', view);

    // 2. Añadir los estilos desde un archivo externo
    function addStyles(){
        loadStyles(`${ruta_desde_raiz}/category.css`);
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

    //3. Las funciones de listeners
    function addListeners(){
        /*const button = document.getElementById('btn_about');
        
        // Remover cualquier listener anterior para evitar duplicados
        button.removeEventListener('click', handleClick);
        
        // Añadir el listener de nuevo
        button.addEventListener('click', handleClick);
        */
    };

    let n = 0;

    // Función manejadora del evento
    function handleClick(event){
        //alert('Button clicked!');
        console.log('abajo event: ');
        console.log(event);
        console.log('this se refiere a button. this: ', this);
        console.log('event.currentTarget se refiere a button. event.currentTarget: ', event.currentTarget);
        n++;
        this.textContent = `Button clicked ${n} times`;
    };
    
    // 4. Retornar un array con la vista, los estilos y la función que añade los listeners
    return [view, addStyles, addListeners];
}
