if (typeof textDeveloppement === "undefined") {
    // Créer la div de textDeveloppement si l'utilisateur clique sur le bouton pour la première fois.
    var textDeveloppement =document.createElement("div"); 
    document.body.prepend(textDeveloppement ); 
    textDeveloppement.style.backgroundColor = "green";
    textDeveloppement.style.color = "white";
    textDeveloppement.innerText=" Vous êtes en environnement de développement.";
    textDeveloppement.setAttribute('id', 'textDeveloppement');
    document.getElementById("textDeveloppement").classList.add('classBandeauEnvironnement');

} else {
    // Affiche la div textDeveloppement si l'utilisateur clique une deuxième fois ou plus sur le bouton.
    textDeveloppement.style.visibility="visible"; 
    // On réinsere la div textDeveloppement en haut de la page car quand on clique sur un des autres boutons la div textDeveloppement devient hidden 
    // et est insérer en bas de la page pour éviter d'afficher une bande vide au début de la page.
    document.body.insertBefore(textDeveloppement, document.body.firstChild); 
}

if (typeof textProduction !== "undefined") {
    // Si la div textProduction a été créer on la rend hidden.
    textProduction.style.visibility="hidden";
    // On insere la div textProduction a la fin de la page.
    document.body.insertBefore(textProduction, document.body.lastChild); 
}
    
if (typeof textQualification !== "undefined") {
    // Si la div textQualification a été créer on la rend hidden.
    textQualification.style.visibility="hidden";
    // On insere la div textQualification a la fin de la page.
    document.body.insertBefore(textQualification, document.body.lastChild); 
}

//Créer une variable dev dans le localStorage avec comme valeur : "developpement"
localStorage.setItem('dev' , 'developpement');
var developpement = window.localStorage.getItem("dev");

//Supprime les variables prod et qualif du localStorage pour que a la prochaine connexion sur la page, seulement la div textDeveloppement soit créer
window.localStorage.removeItem("prod");
window.localStorage.removeItem("qualif");

