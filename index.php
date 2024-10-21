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
    <link type="styleshirt" href="">
    <link rel="stylesheet" href="./css/style.css">

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

    <style>

    </style>
</head>

<body>

    <!-- Header -->
    <header>
        <h1>Bienvenido a Mi SPA</h1>
        <p>Relájate y disfruta de nuestros tratamientos</p>
    </header>

    <!-- Menu de navegación -->
    <nav id="navbar">
        <ul>
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/about" data-link>About</a></li>
            <li><a href="/contact" data-link>Contact</a></li>
            <li><a href="/contact_hash#/aaa" data-link>Contact_hash </a></li>
            <li><a href="/user" data-link>User</a></li>
            <li><a href="/user#userId=1" data-link>User 1</a></li>
            <li><a href="/user#userId=2" data-link>User 2 </a></li>
            <li><a href="/user#userId=2&postId=1" data-link>#User userId:2 postId:1 </a></li>
            <li><a href="/user#userId=3&postId=2" data-link>#User userId:3 postId:2 </a></li>
            <li><a href="/user#userId=4&postId=2" data-link>#User userId:4 postId:2 </a></li>
            <li><a href="/user#/2/1" data-link>#User #/2/1 </a></li>
            <li><a href="/user#/3/2" data-link>#User #/3/2 </a></li>
        </ul>
    </nav>

    <div id="content">


    </div>

    <a href="#" id="toTop" class="to-top">
        <i class="fa fa-angle-up"></i>
    </a>


    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Mi SPA. Todos los derechos reservados.</p>
    </footer>

    <script type="module" src="./router.js"></script>
    <script type="text/javascript" src="./js/my_js.js"></script>
</body>

</html>