// creo variabile per menu Hamburger

var hamburgerBtn = $ (".header-right > a");

var hamburgerMenu = $ (".hamburger-menu");

// inserisco azione click al menu Hamburger

hamburgerBtn.click(

  function(){

    hamburgerMenu.addClass("active");

  }

);
