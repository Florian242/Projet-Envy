var x;

function show_Hide_Production(){
    document.getElementById("qualification").style.display="none";
    document.getElementById("developpement").style.display="none";
    document.getElementById("Production").style.display="inline"; 
}

function show_Hide_Qualification(){
    document.getElementById("production").style.display="none";
    document.getElementById("developpement").style.display="none"; 
    document.getElementById("qualification").style.display="inline";                 
}

function show_Hide_Developpement(){
    if (x==1){
        document.getElementById("developpement").style.display="inline";
        return x=0;
    }
    else{
        document.getElementById("developpement").style.display="none";
        return x=1;
    }
}