function show_Standart(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages

    document.getElementById("qualification").style.display="none";
    document.getElementById("developpement").style.display="none";
    document.getElementById("production").style.display="none";                                                                                                        
}     

function show_Hide_Production(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages sauf le message de production

    document.getElementById("qualification").style.display="none";
    document.getElementById("developpement").style.display="none";
    document.getElementById("production").style.display="inline"; 
}

function show_Hide_Qualification(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages sauf le message de qualification

    document.getElementById("production").style.display="none";
    document.getElementById("developpement").style.display="none"; 
    document.getElementById("qualification").style.display="inline";                 
}

function show_Hide_Developpement(){

    // La procedure n'as pas de parametre
    // La procedure ne renvoie rien 
    // la procedure cache tous les messages sauf le message de développement

    document.getElementById("production").style.display="none";
    document.getElementById("qualification").style.display="none"; 
    document.getElementById("developpement").style.display="inline";
}
