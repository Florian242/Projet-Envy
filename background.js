//Le backgroundScrip recoit le message
chrome.runtime.onMessage.addListener(
    function(response, sender, sendResponse) {
      //Vérifie si le message est 'production'  
      if (response=='production'){
        //Si oui on execute le script 'textProduction.js'
        chrome.tabs.executeScript({
        file: 'textProduction.js'
      });
      }
      //Vérifie si le message est 'production'
      if (response=='developpement'){
        //Si oui on execute le script 'textDeveloppement.js'
        chrome.tabs.executeScript({
          file: 'textDeveloppement.js'
        });
      }
      //Vérifie si le message est 'production'
      if (response=='qualification'){
        //Si oui on execute le script 'textQualification.js'
        chrome.tabs.executeScript({
          file: 'textQualification.js'
        });
      }
    }   
    );
  