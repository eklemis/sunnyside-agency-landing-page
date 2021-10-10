function show_menu(item){
    console.log(item.getAttribute("class"))
    let curr_class = item.getAttribute("class");
    if (curr_class == "hide"){
        document.getElementById("img-burger").setAttribute("src","./images/icon-close.svg");
        item.setAttribute("class", "show");
        document.getElementById("menu").style.display = "flex";
    }
    else{
        close_menu();
    }
}

function close_menu(){
    document.getElementById("img-burger").setAttribute("src","./images/icon-hamburger.svg")
    document.getElementById("btn-burger").setAttribute("class", "hide");
    document.getElementById("menu").style.display = "none";
}