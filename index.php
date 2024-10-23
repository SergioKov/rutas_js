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
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/style_resp.css">

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

    <style>

    </style>
</head>

<body>

    <!-- Header -->
    <header>
        <div id="header_inner">
            <div class="header_logo">
                <a href="/" data-link>
                    <img src="./images/react_js.png">
                </a>
            </div>

            <div class="header_center">
                <h1>Bienvenido a Mi SPA</h1>
                <p>Relájate y disfruta de nuestros tratamientos</p>
            </div>

            <div class="header_area_privada">
                <p>Aki Área Privada</p>
            </div>
        </div>

    </header>

    <!-- Menu de navegación -->
    <div id="wr_nav">



        <div class="gr_menu">

            <div class="flex_1">

                <div class="menu-icon" onclick="this.classList.toggle('m_active_flecha_left'); openMenu();">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="wr_m_logo">
                    <img src="./images/react_js.png" style="max-width: 100px;">
                </div>
            </div>

            <div class="flex_2">
                <p>aki center</p>
            </div>
            
            <div class="flex_3">                
            
                <span class="gr_menu_search_icon">
                    <svg class="lin-icon" width="28" height="28" viewBox="0 0 28 28">
                        <path d="M11.5556 23.1111C13.1481 23.1111 14.6481 22.8148 16.0556 22.2222C17.463 21.6111 18.6852 20.787 19.7222 19.75C20.7778 18.6944 21.6019 17.463 22.1944 16.0556C22.8056 14.6481 23.1111 13.1481 23.1111 11.5556C23.1111 9.96296 22.8056 8.46296 22.1944 7.05556C21.6019 5.64815 20.7778 4.42593 19.7222 3.38889C18.6852 2.33333 17.463 1.50926 16.0556 0.916667C14.6481 0.305556 13.1481 0 11.5556 0C9.96296 0 8.46296 0.305556 7.05556 0.916667C5.64815 1.50926 4.41667 2.33333 3.36111 3.38889C2.32407 4.42593 1.5 5.64815 0.888889 7.05556C0.296296 8.46296 0 9.96296 0 11.5556C0 13.1481 0.296296 14.6481 0.888889 16.0556C1.5 17.463 2.32407 18.6944 3.36111 19.75C4.41667 20.787 5.64815 21.6111 7.05556 22.2222C8.46296 22.8148 9.96296 23.1111 11.5556 23.1111ZM11.5556 2.66667C12.7778 2.66667 13.9259 2.89815 15 3.36111C16.0926 3.82407 17.037 4.46296 17.8333 5.27778C18.6481 6.07407 19.287 7.01852 19.75 8.11111C20.213 9.18519 20.4444 10.3333 20.4444 11.5556C20.4444 12.7778 20.213 13.9352 19.75 15.0278C19.287 16.1019 18.6481 17.0463 17.8333 17.8611C17.037 18.6574 16.0926 19.287 15 19.75C13.9259 20.213 12.7778 20.4444 11.5556 20.4444C10.3333 20.4444 9.17593 20.213 8.08333 19.75C7.00926 19.287 6.06482 18.6574 5.25 17.8611C4.4537 17.0463 3.82407 16.1019 3.36111 15.0278C2.89815 13.9352 2.66667 12.7778 2.66667 11.5556C2.66667 10.3333 2.89815 9.18519 3.36111 8.11111C3.82407 7.01852 4.4537 6.07407 5.25 5.27778C6.06482 4.46296 7.00926 3.82407 8.08333 3.36111C9.17593 2.89815 10.3333 2.66667 11.5556 2.66667ZM27.6111 27.6111C27.8704 27.3519 28 27.037 28 26.6667C28 26.2963 27.8704 25.9815 27.6111 25.7222L21.8611 20C21.5833 20.3333 21.287 20.6574 20.9722 20.9722C20.6574 21.287 20.3333 21.5833 20 21.8611L25.7222 27.6111C25.9815 27.8704 26.2963 28 26.6667 28C27.037 28 27.3519 27.8704 27.6111 27.6111Z"></path>
                    </svg>
                </span>
            
                <div class="menu-icon" onclick="this.classList.toggle('m_active_x')" data-menu>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>





        <nav id="navbar">
            
            <div id="menu_fondo"></div>
            <div id="wr_links">
                <div class="wr_links_inner">
                    
                    <div id="menu_head">
                        <a class="link_close" href="#" onclick=""><i class="fa-solid fa-arrow-left"></i></a>
                        <a class="link_close" href="#" onclick=""><i class="fa-solid fa-xmark"></i></a>
                    </div>
                    
                    <ul>
                        <li><a href="/" data-link>Home</a></li>
                        <li><a href="/about" data-link>About</a></li>
                        <li><a href="/contact" data-link>Contact</a></li>
                        <li><a href="/contact_hash#/aaa" data-link>Contact_hash </a></li>
                        <li><a href="/user" data-link>User</a></li>
                        <!--
                            <li><a href="/user#userId=1" data-link>User 1</a></li>
                            <li><a href="/user#userId=2" data-link>User 2 </a></li>
                            <li><a href="/user#userId=2&postId=1" data-link>#User userId:2 postId:1 </a></li>
                            <li><a href="/user#userId=3&postId=2" data-link>#User userId:3 postId:2 </a></li>
                            <li><a href="/user#userId=4&postId=2" data-link>#User userId:4 postId:2 </a></li>
                            <li><a href="/user#/2/1" data-link>#User #/2/1 </a></li>
                            <li><a href="/user#/3/2" data-link>#User #/3/2 </a></li>
                        -->
                    </ul>

                    <span class="search_icon">
                        <svg class="lin-icon" width="28" height="28" viewBox="0 0 28 28">
                            <path d="M11.5556 23.1111C13.1481 23.1111 14.6481 22.8148 16.0556 22.2222C17.463 21.6111 18.6852 20.787 19.7222 19.75C20.7778 18.6944 21.6019 17.463 22.1944 16.0556C22.8056 14.6481 23.1111 13.1481 23.1111 11.5556C23.1111 9.96296 22.8056 8.46296 22.1944 7.05556C21.6019 5.64815 20.7778 4.42593 19.7222 3.38889C18.6852 2.33333 17.463 1.50926 16.0556 0.916667C14.6481 0.305556 13.1481 0 11.5556 0C9.96296 0 8.46296 0.305556 7.05556 0.916667C5.64815 1.50926 4.41667 2.33333 3.36111 3.38889C2.32407 4.42593 1.5 5.64815 0.888889 7.05556C0.296296 8.46296 0 9.96296 0 11.5556C0 13.1481 0.296296 14.6481 0.888889 16.0556C1.5 17.463 2.32407 18.6944 3.36111 19.75C4.41667 20.787 5.64815 21.6111 7.05556 22.2222C8.46296 22.8148 9.96296 23.1111 11.5556 23.1111ZM11.5556 2.66667C12.7778 2.66667 13.9259 2.89815 15 3.36111C16.0926 3.82407 17.037 4.46296 17.8333 5.27778C18.6481 6.07407 19.287 7.01852 19.75 8.11111C20.213 9.18519 20.4444 10.3333 20.4444 11.5556C20.4444 12.7778 20.213 13.9352 19.75 15.0278C19.287 16.1019 18.6481 17.0463 17.8333 17.8611C17.037 18.6574 16.0926 19.287 15 19.75C13.9259 20.213 12.7778 20.4444 11.5556 20.4444C10.3333 20.4444 9.17593 20.213 8.08333 19.75C7.00926 19.287 6.06482 18.6574 5.25 17.8611C4.4537 17.0463 3.82407 16.1019 3.36111 15.0278C2.89815 13.9352 2.66667 12.7778 2.66667 11.5556C2.66667 10.3333 2.89815 9.18519 3.36111 8.11111C3.82407 7.01852 4.4537 6.07407 5.25 5.27778C6.06482 4.46296 7.00926 3.82407 8.08333 3.36111C9.17593 2.89815 10.3333 2.66667 11.5556 2.66667ZM27.6111 27.6111C27.8704 27.3519 28 27.037 28 26.6667C28 26.2963 27.8704 25.9815 27.6111 25.7222L21.8611 20C21.5833 20.3333 21.287 20.6574 20.9722 20.9722C20.6574 21.287 20.3333 21.5833 20 21.8611L25.7222 27.6111C25.9815 27.8704 26.2963 28 26.6667 28C27.037 28 27.3519 27.8704 27.6111 27.6111Z"></path>
                        </svg>
                    </span>

                </div>
            </div>

        </nav>

    </div>

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