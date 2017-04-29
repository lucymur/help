;(function () {
    /**
     * Init fancybox
     */
    $(".fancybox").fancybox();


      $('.navigation-trigger, .menumob-accordion-close').on('click', function () {
    	$('body').toggleClass('mobile-nav-opened');
    	return false;
    });


      $(".menumob-accordion-title").on("click", function (){
      	$(this).parent().addClass("open").siblings().removeClass("open");
      })

})();

