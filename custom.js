function bar_call(){
    document.getElementById('menu_bar_div').style.left = '0px';
    document.getElementById("cross").style.display = 'inline-block';
    document.getElementById('overlay').style.display = 'inline-block';
}


function crossing(){
    document.getElementById("cross").style.display = 'none';
    document.getElementById('menu_bar_div').style.left = '-100%';
    document.getElementById('overlay').style.display = 'none';
}
