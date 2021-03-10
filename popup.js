var x;

function show_Hide_Production(){
    if (x==1){
        document.getElementById("production").style.display="inline";
        return x=0;
    }
    else{
        document.getElementById("production").style.display="none";
        return x=1;
    }
}

function show_Hide_Qualification(){
    if (x==1){
        document.getElementById("qualification").style.display="inline";
        return x=0;
    }
    else{
        document.getElementById("qualification").style.display="none";
        return x=1;
    }
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