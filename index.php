<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP GRAPH - LEVEL</title>

    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <!-- JS: CHART-JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>

    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <!-- TEMPLATE: MESSAGE MENU -->
    <script id="box-template" type="text/x-handlebars-template">
      <div class="box">
        <p class="conf"><span class="title">{{ title }}</span> ==> <span class="description">{{ description }}</span> </p>
      </div>
    </script>


    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>

  </head>
  <body>

    <h1>CONFIGURAZIONI</h1>
    <h3>AGGIUNGI UNA NUOVA CONFIGURAZIONE</h3>
    <form id="myForm">
      <label for="title">TITOLO</label>
      <input type="text" name="title" value="" placeholder="Inserisci il titolo">
      <label for="description">DESCRIZIONE</label>
      <input type="text" name="description" value="" placeholder="Inserisci la descrizione">
      <input type="submit" value="AGGIUNGI">
    </form>
    <div id="container">
    </div>
  </body>
</html>
