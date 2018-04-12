<?php
// S'il y des données de postées
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD']=='POST') {
  // Récupération des variables
  $nom     = $_POST['nom']; // () convertit des caractères "spéciaux" en équivalent HTML
  $email   = $_POST['email'];
  $prenom  = $_POST['prénom'];
  $message = $_POST['message'];
  $sujet   = $_POST['sujet']; //titre de l'email

  $stmt = $bdd->prepare('INSERT INTO message (nom, email, prenom, message, sujet) VALUES (:nom, :email, :prenom, :message, :sujet)');

  $stmt->bindParam(':nom', $nom, PDO::PARAM_STR);
  $stmt->bindParam(':email', $email, PDO::PARAM_STR);
  $stmt->bindParam(':prenom', $prenom, PDO::PARAM_STR);
  $stmt->bindParam(':message', $message, PDO::PARAM_STR);
  $stmt->bindParam(':sujet', $sujet, PDO::PARAM_STR);

  $stmt->execute();

  header('Location: confirmation.php'); // Afficher un message pour indiquer que le message a été envoyé
  // (2) Fin du code pour traiter l'envoi de l'email
}
