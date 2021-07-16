function bar_call(){
    document.getElementById('menu_bar_div').style.left = '0px';
    var node = document.createElement("I");
    node.className = "fas fa-times cross";
    document.getElementById("top_menu").appendChild(node);
    
    var node2 = document.createElement("div");
    node2.className = "overlay";
    document.getElementById("top_menu").appendChild(node2);

    document.getElementsByClassName('overly').style.left = '85vw';
}