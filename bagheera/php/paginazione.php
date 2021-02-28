<?php

if(isset($_GET['page'])){

    switch($_GET['page']){

        case 'Home':
            include 'html/home.html';
            break;
        case 'Bagheera':
            include 'html/bagheera.html';
            break;
        case 'Foto':
            include 'html/foto.html';
            break;
        case 'Offtopic':
            include 'html/off-topic.html';
            break;
        default:
            echo "la pagina non è disponibile";
            break;


        }} else {
    echo "bye bye";
}




    ?>
