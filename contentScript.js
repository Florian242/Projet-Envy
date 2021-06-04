//On fait un getItem pour vérifier si la variable prod avec comme valeur "production" existe dans le localStorage 
//si oui on envoi un message au backgroundScript avec comme valeur "production".
if (localStorage.getItem("prod")=='production'){
    chrome.runtime.sendMessage('production'); 
}

//On fait un getItem pour vérifier si la variable dev avec comme valeur "developpement" existe dans le localStorage 
//si oui envoi un message au backgroundScript avec comme valeur "developpement".
if (localStorage.getItem("dev")=='developpement'){
    chrome.runtime.sendMessage('developpement'); 
}

//On fait un getItem pour vérifier si la variable qualif avec comme valeur "qualification" existe dans le localStorage 
//si oui envoi un message au backgroundScript avec comme valeur "qualification".
if (localStorage.getItem("qualif")=='qualification'){
    chrome.runtime.sendMessage('qualification'); 
}