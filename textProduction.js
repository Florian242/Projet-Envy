if (typeof textProduction === "undefined") {
    // Créer la div de textProduction si l'utilisateur clique sur le bouton pour la première fois.
    var textProduction =document.createElement("div"); 
    document.body.prepend(textProduction);
    textProduction.style.backgroundColor = "orange";
    textProduction.style.color = "white";
    textProduction.innerText="Vous êtes en environnement de production. Prudence !";
    textProduction.setAttribute('id', 'textProduction');
    document.getElementById("textProduction").classList.add('classBandeauEnvironnement');

} else {
    // Affiche la div textProduction si l'utilisateur clique une deuxième fois ou plus sur le bouton.
    textProduction.style.visibility="visible";
    // On réinsere la div textProduction en haut de la page car quand on clique sur un des autres boutons la div textProduction devient hidden 
    // et est insérer en bas de la page pour éviter d'afficher une bande vide au début de la page.
    document.body.insertBefore(textProduction, document.body.firstChild);  
}


if (typeof textDeveloppement !== "undefined") {
    // Si la div textDeveloppement a été créer on la rend hidden.
    textDeveloppement.style.visibility="hidden"; 
    // On insere la div textDeveloppement a la fin de la page.
    document.body.insertBefore(textDeveloppement, document.body.lastChild);
}   

if (typeof textQualification !== "undefined") {
    // Si la div textQualification a été créer on la rend hidden.
    textQualification.style.visibility="hidden";
    // On insere la div textQualification a la fin de la page.
    document.body.insertBefore(textQualification, document.body.lastChild); 
}

//Créer une variable prod dans le localStorage avec comme valeur : "production"
localStorage.setItem('prod' , 'production');
var production = window.localStorage.getItem("prod");

//Supprime les variables dev et qualif du localStorage pour que a la prochaine connexion sur la page, seulement la div textProduction soit créer
window.localStorage.removeItem("dev");
window.localStorage.removeItem("qualif");

