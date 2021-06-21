if (typeof textQualification === "undefined") {
    // Créer la div de textQualification si l'utilisateur clique sur le bouton pour la première fois.
    var textQualification=document.createElement("div"); 
    document.body.prepend(textQualification);
    textQualification.style.backgroundColor = "darkblue";
    textQualification.style.color = "white"; 
    textQualification.innerText="Vous êtes en environnement de qualification. Veillez à le garder en bon état pour les tests.";
    textQualification.setAttribute('id', 'textQualification');
    document.getElementById("textQualification").classList.add('classBandeauEnvironnement');

} else {
    // Affiche la div textQualification si l'utilisateur clique une deuxième fois ou plus sur le bouton.
    textQualification.style.visibility="visible";
    // On réinsere la div textQualification en haut de la page car quand on clique sur un des autres boutons la div textQualification devient hidden 
    // et est insérer en bas de la page pour éviter d'afficher une bande vide au début de la page.
    document.body.insertBefore(textQualification, document.body.firstChild);  
}

if (typeof textProduction !== "undefined") {
    // Si la div textProduction a été créer on la rend hidden.
    textProduction.style.visibility="hidden";
    // On insere la div textProduction a la fin de la page.
    document.body.insertBefore(textProduction, document.body.lastChild);  
}
        
if (typeof textDeveloppement !== "undefined") {
    // Si la div textDeveloppement a été créer on la rend hidden.
    textDeveloppement.style.visibility="hidden"; 
    // On insere la div textDeveloppement a la fin de la page.
    document.body.insertBefore(textDeveloppement, document.body.lastChild); 
}

//Créer une variable qualif dans le localStorage avec comme valeur : "qualification"
localStorage.setItem('qualif' , 'qualification');
var qualification = window.localStorage.getItem("qualif");

//Supprime les variables dev et prod du localStorage pour que a la prochaine connexion sur la page, seulement la div textQualification soit créer
window.localStorage.removeItem("dev");
window.localStorage.removeItem("prod");