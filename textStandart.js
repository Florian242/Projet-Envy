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
if (typeof textQualification !== "undefined") {
    // Si la div textQualification a été créer on la rend hidden.
    textQualification.style.visibility="hidden";
    // On insere la div textQualification a la fin de la page.
    document.body.insertBefore(textQualification, document.body.lastChild); 
}

//Supprime les variables dev,qualf et prod du localStorage pour que a la prochaine connexion sur la page, il y est un affichage standard.
window.localStorage.removeItem("dev");
window.localStorage.removeItem("prod");
window.localStorage.removeItem("qualif");
