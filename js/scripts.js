const fadeIn = () => {
  $('.fade-in').each( function () {

      let top_of_object = $(this).position().top;
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > top_of_object) {

          $(this).animate({
              'opacity': '1'
          }, 500);

      } 
  });
}

fadeIn();

if ($(window).innerWidth() > 991) { 

  if ($('html.no-touch')) {

    $(".work-wrapper").hover(function (){
           $(this).find(".work-title").slideToggle("slow");
    });

  }
}

$('.work-wrapper').on('click', function(e){
  e.preventDefault();
  let text = $(this).find('.work-title').html();
  let url = $(this).find('.link').attr('href');
  console.log("url is", url);

  $('.modal-body').load('' + url + ' .main-content',function(){
        $('#myModal').modal({show:true});
    });
})

$(window).scroll( () => {
  fadeIn();
});

const backToTop = () => {

    let chaser = $('#js-chaser');
    let  windowHeight = $(window).height();

    if (chaser) {

      $(window).scroll(function() {

        if ($(window).scrollTop() >= windowHeight / 2) {
          chaser.fadeIn();
        }

        else {
          chaser.hide();
        };

      });

      chaser.on('click', () => {

        $('html, body').animate({scrollTop: '0px'}, 800);
 
      });

    };

};

backToTop();




