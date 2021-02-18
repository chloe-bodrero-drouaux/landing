function popup(){
  var adresse=document.getElementById('adresse').value;
  var horaire=document.getElementById('horaire').value;
  var phrase1="Vous souhaitez être livré.e rapidement au ";
  var phrase1bis=". Voulez-vous aussi le beurre, l'argent d'UBeurre et le sourire du livreur ?"
  var phrase2="Rien ne sert de pédaler, il faut partir à point, comme votre steak, qui arrivera quand il arrivera au ";

  if (horaire==="Livrer maintenant") {
    window.alert (phrase1.concat(adresse).concat(phrase1bis))

  } else {
    window.alert(phrase2.concat(adresse))
  }


}
