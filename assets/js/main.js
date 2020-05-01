
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
