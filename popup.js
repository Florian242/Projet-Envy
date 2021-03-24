var textProduction = document.createElement('p')
textProduction.setAttribute("id","production")
textProduction.style.color = 'red'
textProduction.style.visibility="hidden"
textProduction.innerText =' Vous êtes en environnement de production. Prudence !'
document.body.append(textProduction)

var textQualification = document.createElement('p')
textProduction.setAttribute("id","qualification")
textQualification.style.visibility="hidden"
textQualification.style.color = 'red'
textQualification.innerText =' Vous êtes en environnement de qualification. Veuillez à le garder en bon état pour les tests.'
document.body.append(textQualification)

var textDeveloppement = document.createElement('p')
textProduction.setAttribute("id","developpement")
textDeveloppement.style.visibility="hidden"
textDeveloppement.style.color = 'red'
textDeveloppement.innerText =' Vous êtes en environnement de développement.'
document.body.append(textDeveloppement)



function show_Standart(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages

    textProduction.style.visibility="hidden";
    textQualification.style.visibility="hidden";
    textDeveloppement.style.visibility="hidden"; 
                                                                                                           
}     

function show_Hide_Production(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages sauf le message de production

    textProduction.style.visibility="visible";
    textQualification.style.visibility="hidden";
    textDeveloppement.style.visibility="hidden"; 
    
}

function show_Hide_Qualification(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages sauf le message de qualification

    textProduction.style.visibility="hidden";
    textDeveloppement.style.visibility="hidden"; 
    textQualification.style.visibility="visible";  
                  
}

function show_Hide_Developpement(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages sauf le message de développement

    textProduction.style.visibility="hidden";
    textQualification.style.visibility="hidden"; 
    textDeveloppement.style.visibility="visible";
   
}
