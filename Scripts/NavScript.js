function doDropdown(){
    let nav = $("#Nav");
    if(nav.hasClass("Responsive")){
        nav.removeClass("Responsive");
    } else {
        nav.addClass("Responsive");
    }
}

function loadView(path){
    let main = $("#Main");
    main.load(path);
}