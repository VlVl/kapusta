$('li').click( function ( e ){
  $('li').removeClass('sel');
  this.className = 'sel';
})
