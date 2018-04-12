<?php

require_once 'db.php';

$stmt = $bdd->prepare('SELECT id, nom, email, prenom, message, sujet FROM message ORDER BY id');
$stmt->execute();
$messages = $stmt->fetchAll(); ?>

<table border="1" cellpadding="15">
  <tr>
    <th>nom</th>
    <th>prenom</th>
    <th>email</th>
    <th>sujet</th>
    <th>message</th>
  </tr>
    <?php foreach ($messages as $message) { ?>
      <tr>
        <td>
          <?=htmlentities($message['nom']);?>
        </td>
        <td>
          <?=htmlentities($message['prenom']);?>
        </td>
        <td>
          <?=htmlentities($message['email']);?>
        </td>
        <td>
          <?=htmlentities($message['sujet']);?>
        </td>
        <td>
          <?=htmlentities($message['message']);?>
        </td>
      </tr>
    <?php } ?>
</table>
