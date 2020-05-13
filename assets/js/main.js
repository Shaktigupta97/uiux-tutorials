$('#open-side-nav').on('click', function(){
  // var side_nav_ele = $('#side-nav');

  $('#side-nav').toggleClass('open');

  // if(side_nav_ele.hasClass('open')){
  //   side_nav_ele.removeClass('open');
  // } else {
  //   side_nav_ele.addClass('open');
  // }
});

function loadTemplate(){
  /** var element = $(".class, #id, [attribute], tag"); */

  var ajaxElements = $('[data-load-template]');

  // Each loop
  ajaxElements.each(function(index, element){
    var theElement = $(element);

    $.ajax({
      method: "GET",
      url: theElement.data('load-template'),
      data: {}
    }).done(function(response) {
      theElement.html(response);
    })
    
  });
}

loadTemplate();

/** Load Particle JS Container */
try{
  particlesJS.load('particles-js', '/assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
} catch (err) {}

//typeit js
new TypeIt("#multipleStrings", {
  strings: ["Learn", "Create", "and", "Develop", "with"],
  speed: 50,
  cursor: true
}).go();


//loader
function functionSequence(){
  $('#pre-loader').animate({
    'top': -100 + '%',
    'opacity': 0
  }, 500, function(){
    $(this).remove();
  });
  
  setTimeout(() => {
    $('.book-loader-base').animate({
      'top': -100 + '%',
      'opacity': 0
    }, 300, function(){    //1500 is duration of going of loader
      $(this).remove();
    });
  }, 1500);                //1500 is duration of going of loader
}
// =========================================================
// On Load
// =========================================================
if (window.addEventListener) {
  window.addEventListener('load', function () {
    functionSequence();
  });
} else {
  window.attachEvent('onload', function () {
    functionSequence();
  });
}


// $('.single-item').slick({
//   slidesToShow: 3,
//   autoplay: true,
//   centerPadding: '40px',
//   arrows: false,
// });
