<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Bagheerando</title>
    <meta name="description" content="Questo è il forum di Bagheera">
    <link rel="stylesheet" href="css/style.css" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <div class="wrapper">


<header>
  <div class="Peppe">


  <h1>Questo è l'header di BagheeraNews</h1>
</div>
<a href="javascript:void(0)" onclick="stoggle()" ><img class="logo" src="http://via.placeholder.com/90" alt="logo del sito"></a>
</header>

<div id="sidebar">
<ul>
  <li >chi siamo</li>
  <li>dove veniamo</li>
  <li>dove andiamo</li>
</ul>
</div>




<main>
<ul>
    <li><a href="<?php echo $_SERVER['PHP_SELF']."?page=Home" ?>">Home</a></li>
    <li><a href="<?php echo $_SERVER['PHP_SELF']."?page=Bagheera" ?>">Bagheera</a></li>
    <li><a href="<?php echo $_SERVER['PHP_SELF']."?page=Foto" ?>">Foto</a></li>
    <li><a href="<?php echo $_SERVER['PHP_SELF']."?page=Offtopic" ?>">Off topic</a></li>
</ul>
    <?php
    include "php/paginazione.php";
    ?>
</main>
<footer>





</footer>

</div>




  </body>
</html>
