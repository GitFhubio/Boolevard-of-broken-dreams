<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Bagheerando</title>
    <meta name="description" content="Questo è il forum di Bagheera">
    <link rel="stylesheet" href="css/style.css" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,500;1,700&display=swap" rel="stylesheet">
</head>
  <body>
    <div class="wrapper">


<header>
  <div>
  <h1>BagheeraNews</h1>
</div>

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
