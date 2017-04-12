// Developed and Designed by Ankit R Gadiya <https://ankitrgadiya.in>

$(document).ready(function(){

	// Navbar collapse
    $(".button-collapse").sideNav();

    // Parallex Container
    $('.parallax').parallax();

    // Syntax highlighting
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
