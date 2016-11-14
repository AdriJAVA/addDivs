window.onload = function(){
    
    document.getElementById("anadir").onclick = anadir;
    document.getElementById("borrar").onclick = borrar;
    document.getElementById("borrarCont").onclick = borrarCont;
}

var indice = 0;

var indice2 = 0;

function anadir(){
    
    var texto = document.getElementById("texto");
    
    var color = document.getElementById("color");
    
    indice++; 
    
    indice2++;
    
    var div = document.createElement("DIV");
    
    div.className = "nuevo";
    
    var p = document.createElement("P");
    
    var node = document.createTextNode(texto.value);
    
    p.className = "parrafo";
    
    p.appendChild(node);
        
    div.appendChild(p);
    
    if(indice === 1){
        div.style.margin = "120px auto";
        div.style.marginBottom = "0px";
    }else{
        div.style.margin = "20px auto";
    }
    
    div.style.background = color.style.backgroundColor;
    
    document.getElementById("contenedor").appendChild(div);
    
    texto.value = "";
}

function borrar (){
    if(indice > 0){
        indice--;
        var divBorrar = document.getElementsByClassName("nuevo");
        divBorrar[indice].parentNode.removeChild(divBorrar[indice]);
    }
}

function borrarCont (){
    if(indice2 > 0){
        indice2--;
        var parrafoBorrar = document.getElementsByClassName("parrafo");
        parrafoBorrar[indice2].parentNode.removeChild(parrafoBorrar[indice2]);
    }
}
