// Si le bouton textProduction est cliqué , on execute le script du fichier 'textProduction.js' sur la page chrome actuel.
function textProduction() {
    chrome.tabs.executeScript({
      file: 'textProduction.js'
    }); 
}
  
document.getElementById('textProduction').addEventListener('click', textProduction);

// Si le bouton textDeveloppement est cliqué , on execute le script du fichier 'textDeveloppement.js' sur la page chrome actuel.
function textDeveloppement() {
    chrome.tabs.executeScript({
      file: 'textDeveloppement.js'
    }); 
}
  
document.getElementById('textDeveloppement').addEventListener('click', textDeveloppement);

// Si le bouton textQualification est cliqué , on execute le script du fichier 'textQualification.js' sur la page chrome actuel.
function textQualification() {
    chrome.tabs.executeScript({
      file: 'textQualification.js'
    }); 
}
  
document.getElementById('textQualification').addEventListener('click', textQualification);

// Si le bouton textStandard est cliqué , on execute le script du fichier 'textStandard.js' sur la page chrome actuel.
function textStandard() {
  chrome.tabs.executeScript({
    file: 'textStandard.js'
  }); 
}

document.getElementById('textStandard').addEventListener('click', textStandard);
