// Get a refrence to the header a lement and sotre it in a variable
var keli_header = document.querySelector('header');

// Get a reference to the main element and store it in a variable
var keli_main = document.querySelector('main');

// Get a reference to the navigation and store it in a variable
var keli_navigation = document.querySelector('#keli-navigation');

// Get a reference to the view reset trigger and store it in a variable
var keli_view_reset = document.querySelector('#reset_view');

keli_navigation.addEventListener('click', function(e){
  e.preventDefault();
  let current_section = document.querySelector(e.target.getAttribute('href'));
  showSection(current_section);
});

function showSection( element ) {
  var menu_items = document.querySelectorAll('nav a');
  for( let i=0; i < menu_items.length; ++i ){
    let elementTarget = document.querySelector(menu_items[i].getAttribute('href'));
    if(elementTarget.classList.contains('translate')){
      elementTarget.classList.remove('translate');
    }
  }
  keli_header.classList.add('translate');
  keli_view_reset.classList.add('is-visible');
  if( element){
    element.classList.add('translate');
  }
}

keli_view_reset.addEventListener('click', function(){
  resetView();
});

function resetView() {
  keli_header.classList.remove('translate');
  var menu_items = document.querySelectorAll('nav a');
  for( let i=0; i < menu_items.length; ++i ){
    let elementTarget = document.querySelector(menu_items[i].getAttribute('href'));
    if(elementTarget.classList.contains('translate')){
      elementTarget.classList.remove('translate');
    }
  }
  keli_view_reset.classList.remove('is-visible');
}
