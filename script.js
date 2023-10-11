var pourcents = document.getElementsByClassName("pourcent");
var barres = document.getElementsByClassName("progressBar");

for (var x = 0; x < pourcents.length; x++) {
    var strPourcent = pourcents[x].textContent; // Utilisez textContent pour obtenir le contenu texte de l'élément
    barres[x].style.width = strPourcent;
}
