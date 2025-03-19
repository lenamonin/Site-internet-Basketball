// Fonction qui vérifie la validité du formulaire: je ne vérifie que les champs obligatoires
function checkform() {
  debug();
  var validation = true;
  var erreur = "Erreur(s) :";
  var f = document.forms['form'];
  if (!f.elements['ville-selected'].checkValidity()||f.elements['ville-selected'].value=="default") {
    erreur += "\n Séléctionnez une ville";
    validation = false;
  }
  if (!f.elements['nomequipe'].checkValidity()) {
    erreur += "\n Nom d'équipe invalide";
    validation = false;
  }
  if (!f.elements['nbre'].checkValidity()) {
    erreur += "\n Nombre de joueur invalide";
    validation = false;
  }
  if (!(f.elements['u15'].checkValidity()&&f.elements['u17'].checkValidity()&&f.elements['u18'].checkValidity()&&f.elements['u20'].checkValidity())) {
    erreur += "\n Séléctionnez une catégorie";
    validation = false;
  }
  if (!(f.elements['maculine'].checkValidity()&&f.elements['feminine'].checkValidity()&&f.elements['mixte'].checkValidity())) {
    erreur += "\n Séléctionnez une option";
    validation = false;
  }
  if (!f.elements['nom'].checkValidity()) {
    erreur += "\n Nom invalide";
    validation = false;
  }
  if (!f.elements['prenom'].checkValidity()) {
    erreur += "\n Prénom invalide";
    validation = false;
  }
  if (!f.elements['bdaytime'].checkValidity()) {
    erreur += "\n Date de naissance invalide";
    validation = false;
  }
  if (!f.elements['phone'].checkValidity()) {
    fout += "\n Numéro de téléphone invalide";
    validation = false;
  }

  if (!f.elements['mail'].checkValidity()) {
    fout += "\n Adresse E-mail invalide";
    validation = false;
  }
  if (!f.elements['motdepasse'].checkValidity()) {
    erreur += "\n Mot de passe invalide";
    validation = false;
  }
  if (!validation) {
    alert(erreur);
  }
  return validation;
}
// pour vérifier les entrées (champs obligatoires seulement)
function debug() {
  var formu = document.forms['form'];
  var elmts = ['ville-selected', 'nomequipe', 'nbre', 'u15', 'u17', 'u18', 'u20', 'masculine', 'feminine', 'mixte', 'nom', 'prenom', 'bdaytime', 'phone', 'mail', 'motdepasse'];
  elmts.forEach(itm => console.log(itm + ' = ' + formu.elements[itm].value));
}
