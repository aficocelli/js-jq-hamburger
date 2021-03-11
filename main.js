// creo variabile per menu Hamburger

var hamburgerBtn = $ (".header-right > a");

var hamburgerMenu = $ (".hamburger-menu");

var closeMenu = $ (".close");

// inserisco azione click al menu Hamburger

hamburgerBtn.click(

  function(){

    hamburgerMenu.addClass("active");

  }

);

closeMenu.click(

  function() {

    hamburgerMenu.removeClass("active");

  }

);
