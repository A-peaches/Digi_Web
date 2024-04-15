function onClick(){
    let input = document.getElementById("input");
    let result = document.getElementById("result");

    result.style.textDecoration = decoration();
    result.style.color = color();
    result.style.fontSize = size();
    result.style.fontWeight = bold();
    result.style.fontStyle = style();
    result.style.textTransform = upperlower();
    document.getElementById("result").innerHTML = input.value;
}

function color(){
    let color = document.getElementById("color").value;
    return color;
}

function decoration(){
    let decoration = document.getElementsByName("deco");
    let deco = "";
    for(var i = 0; i<decoration.length; i++){
        if(decoration[i].checked){
            deco = decoration[i].value;
            break;
        }
    }
    return deco;

}



function bold() {
    let bold = document.getElementsByName("bold");
    let bol = "";
    for(var i=0; i<bold.length; i++){
        if(bold[i].checked){
            bol = bold[i].value;
        } else {
            bol = "normal";
        }
    }
    console.log(bol);

    return bol;
}

function style() {
    let style = document.getElementsByName("style");
    let st = "";
    for(var i=0; i<style.length; i++){
        if(style[i].checked){
            st = style[i].value;
        } else {
            st = "normal";
        }
    }

    return st;
}

function size(){
    let drainage = document.getElementsByName("em");
    let size = parseFloat(document.getElementById("size").value);
    let em = 1;
    for(var i=0; i<drainage.length; i++) {
        if(drainage[i].checked) {
            em = parseFloat(drainage[i].value);
        }
    }
    

    return (size * em) +"pt";

}

function upperlower(){
    let upperlower = document.getElementsByName("transform");
    let uplow = "";

    for(var i =0; i<upperlower.length; i++){
        if(upperlower[i].checked) {
            uplow = upperlower[i].value;
        }
    }

    return uplow;
}