(function($) { // Begin jQuery
  $(function() { // DOM ready
    //Set Date to Current Year
    var date = new Date().getFullYear();
    console.log(date)
    $('#footer-date').html(date);

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });

	// Toggle close nav when page is clicked
    $('.nav-list').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('.nav-list').on('click', function() {
      $('#nav-toggle').removeClass('active');
    });

  }); // end DOM ready
})(jQuery); // end jQuery
