<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../scss/reset.css">
  <link rel="stylesheet" href="../css/main.css">
  <title>simpl.e</title>
</head>
<body class="body">
  <!-- content -->
  <!-- header start -->
  <header class="header">
    <div class="contain">
      <div class="header-content">
        <h1 class="header-logo">Simpl.e</h1>
        <a class="header-link" href="contact.html">Créer</a>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- formulaire start -->
  <section class="formulaire">
    <div class="contain">
      <h2 class="formulaire-title">Contactez-nous</h2>
      <form class="formulaire-contact" action="action.php" method="post">
        <ul class="formulaire-inputContainer">
          <div class="formulaire-infoContainer">
            <li>
              <input class="formulaire-input" placeholder="nom" type="text" name="nom" />
              <input class="formulaire-input" placeholder="prénom" type="text" name="prénom" />
            </li>

            <li>
              <input class="formulaire-input" placeholder="email" type="email" name="email" />
              <input class="formulaire-input" placeholder="sujet" type="text" name="sujet" />
            </li>
          </div>

          <li>
            <textarea class="formulaire-textarea" placeholder="Ecris ton commentaire" name="message" cols="80" rows="10"></textarea>
          </li>
          <li>
            <input class="formulaire-submit" type="submit" value=">">
          </li>
        </ul>
      </form>
    </div>
  </section>
  <!-- formulaire end -->
  <!-- end content -->
  <script src="index.js"></script>
</body>
</html>
