export default async function User(params) {
    // Aquí params contiene el ID del usuario (params.id)
    console.log(params);

    const userId = params.id;
    const postId = params.postId;
    

    // Simular la carga de datos de un usuario (puede ser desde una API)
    const userData = {
        1: { 
            name: "Juan", 
            age: 25, 
            posts: [
                {postId: 1, postText: "Este es el texto del Post num 1"},
                {postId: 2, postText: "Este es el texto del Post num 2"}
            ] 
        },
        2: { 
            name: "María", 
            age: 30, 
            posts: [
                {postId: 1, postText: "Este es el texto del Post num 1"},
                {postId: 2, postText: "Este es el texto del Post num 2"}
            ] 
        },
        3: { 
            name: "Tomás", 
            age: 13, 
            posts: [
                {postId: 1, postText: "Este es el texto del Post num 1"},
                {postId: 2, postText: "Este es el texto del Post num 2"}
            ] 
        },
        4: { 
            name: "Sergio", 
            age: 46, 
            posts: [
                {postId: 1, postText: "Este es el texto del Post num 1"},
                {postId: 2, postText: "Este es el texto del Post num 2"}
            ] 
        },
        5: { 
            name: "Carlos", 
            age: 36, 
            posts: [
                {postId: 1, postText: "Este es el texto del Post num 1"},
                {postId: 2, postText: "Este es el texto del Post num 2"}
            ] 
        }
    };

    const user = userData[userId] || { name: "Desconocido", age: "N/A" };
    let post;

    if(user && user.name !== "Desconocido"){
        
        if(postId !== null){
            post = user.posts.find(p => p.postId == postId) || { "postId": postId, postText: `Usuario <b>${userId}</b> no tiene post con postId <b>${postId}</b>.`};
        }else{
            post = { postText: `no hay ningún post.`};
        }
        console.log('post.postText: ',post.postText);        

    }else{
        post = { postText: `Ya que el usuario es desconocido, no hay ningún post.`};
    }
    
    const ruta_desde_raiz = '../../views/User';

    //1. Cargar el contenido de about.html
    const response = await fetch(`${ruta_desde_raiz}/user.html`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    let htmlContent = await response.text(); // Obtener el contenido HTML

    // Reemplazar los marcadores de posición con las variables
    htmlContent = htmlContent
        .replace('${userId}', userId)
        .replace('${user.name}', user.name)
        .replace('${user.age}', user.age)
        .replace('${post.postText}', post.postText)
    ;

    const view = htmlContent;  
    
    // 2. Añadir los estilos desde un archivo externo
    function addStyles(){
        loadStyles(`${ruta_desde_raiz}/user.css`);
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
    const addListeners = null;

    // 4. Retornar un array con la vista, los estilos y la función que añade los listeners
    return [view, addStyles, addListeners];
}
