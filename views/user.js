export default async function User(params) {
    // Aquí params contiene el ID del usuario (params.id)
    console.log(params);

    const userId = params.id;

    // Simular la carga de datos de un usuario (puede ser desde una API)
    const userData = {
        1: { 
            name: "Juan", 
            age: 25, 
            posts: [
                {"1": "este es post num 1"},
                {"2": "este es post num 2"}
            ] 
        },
        2: { 
            name: "María", 
            age: 30, 
            posts: [
                {"1": "este es post num 1"},
                {"2": "este es post num 2"}
            ] 
        },
        3: { 
            name: "Tomás", 
            age: 13, 
            posts: [
                {"1": "este es post num 1"},
                {"2": "este es post num 2"}
            ] 
        },
        4: { 
            name: "Sergio", 
            age: 46, 
            posts: [
                {"1": "este es post num 1"},
                {"2": "este es post num 2"}
            ] 
        },
        5: { 
            name: "Carlos", 
            age: 36, 
            posts: [
                {"1": "este es post num 1"},
                {"2": "este es post num 2"}
            ] 
        }
    };

    const user = userData[userId] || { name: "Desconocido", age: "N/A" };

    return `
        <h1>Usuario ${userId}</h1>
        <p>Nombre: ${user.name}</p>
        <p>Edad: ${user.age}</p>
    `;
}
