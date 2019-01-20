<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?= $app_title ?>
    </title>

    <link href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" rel="stylesheet"/>
    <link rel="stylesheet" href="fonts/font.css">
    <link rel="stylesheet" href="dist/app.css">
</head>

<body>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="phone-icon" viewBox="0 0 485.213 485.212">

    </symbol>
</svg>


<!-- Preloader -->
<!--<div id="overlay">-->
<!--    <div id="progstat"></div>-->
<!--    <div id="progress"></div>-->
<!--    <div class="logo" style="background-image:url('images/icon/logo/logo.png');"></div>-->
<!--</div>-->


<!-- App-header -->
<header id="app-header">
    <div class="container">
        <div class="row justify-content-around align-items-center">
            <div class="col-auto">
                <a href="/" class="logo">
                    Logo
                </a>            
            </div>
            <div class="col-8 col-lg-6">
                <div class="header-nav d-none d-sm-block">
                    <ul class="header-nav-menu">
                    <?php
                    foreach ($nav as $key => $value) {
                        echo '<li><a href="/' . $key . '"' . 'class="scroll-link">' . $value . '</a></li>';
                    }
                    ?>
                    </ul>
                </div> 
                <div class="burger-menu d-flex d-sm-none flex-column justify-content-between">
                    <div class="line line--top"></div>
                    <div class="line line--middle"></div>
                    <div class="line line--bottom"></div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="menu">
    <div class="menu-nav">
        <ul class="menu-nav-list">
            <?php
            foreach ($nav as $key => $value) {
                echo '<li><a href="/' . $key . '"' . 'class="scroll-link">' . $value . '</a></li>';
            }
            ?>
        </ul>
    </div>
</div>

<!-- Main -->
<main>