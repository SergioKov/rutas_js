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
    
    const view = `
        <div>
        
            <div class="container">

                <div class="block">
                    <h1>Usuario ${userId}</h1>
                    <p>Nombre: ${user.name}</p>
                    <p>Edad: ${user.age}</p>
                    <p>Post: ${post.postText}</p>
                </div>
            

            </div>

        </div>
    `;    
    
    const addListeners = null;
    const addStyles = null;
    
    return [view, addListeners];
}
