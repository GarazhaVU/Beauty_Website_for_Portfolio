function openMenu(evt){
    document.getElementById("scroll_menu_id").style.right = '0px';
}

function closeMenu(evt){
    document.getElementById("scroll_menu_id").style.right = '-475px';
}

function openWorks(evt, workName) {

    var i, tabcontent, tablinks;
    document.getElementById("All").style.className = "works_image";
    tabcontent = document.getElementsByClassName("works_image");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("works_links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(workName).style.display = "flex";
    evt.currentTarget.className += " active";
}

