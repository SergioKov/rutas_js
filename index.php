<?php 

// Obtener el nombre del host
$host = $_SERVER['HTTP_HOST'];
//echo "El nombre del host: <b>" . $host . "</b><br>";

// Obtener el nombre del servidor
$server_name = $_SERVER['SERVER_NAME'];
//echo "El nombre del servidor: <b>" . $server_name . "</b><br>";




// Obtener el pathname de la URL
$pathname = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
//echo "pathname: <b>" . $pathname . "</b><br>";

// O usando $_SERVER
$currentFilePath = $_SERVER['SCRIPT_FILENAME'];
//echo "La ruta completa del archivo actual: <b>" . $currentFilePath . "</b><br>";


?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rutas_JS</title>
<style>
body { 
    font-family: Arial, 
    sans-serif; 
}
nav a { 
    margin-right: 20px; 
    text-decoration: none; 
    color: blue; 
}
nav a:hover{
    color:red;
}
nav{
    display: flex;
    flex-direction: column;
}
</style>
</head>
<body>

    <nav>
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
        <a href="/contact" data-link>Contact</a>
        <a href="/contact_hash/#/aaa" data-link>Contact_hash </a>
        <a href="/user/1" data-link>User 1</a>
        <a href="/user/2" data-link>User 2 </a>
        <a href="/user/3/post/aaa" data-link>User 3 y post/aaa </a>
        <a href="/user/4/post/1" data-link>Ver Usuario 4 post 1</a>
        <a href="/user/5/post/2" data-link>Ver Usuario 5 post 2</a>
        <a href="/user//post/" data-link>Ver Usuario '' post ''</a>
    </nav>

    <div id="content"></div>

    <script type="module" src="./router.js"></script>
</body>
</html>
