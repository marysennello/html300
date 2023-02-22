$( document ).ready(function() {
    console.log( "ready!" );

const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
  new bootstrap.Tooltip(t)
})


//END
})
