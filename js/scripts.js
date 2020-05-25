const fadeIn = () => {

  $(window).on("load",function() {
    $(window).scroll(function() {
      let windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade-in").each(function() {
        let top_of_object = $(this).offset().top;
        
        if (top_of_object < windowBottom) { 
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { 
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); 
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

  $('.modal-body').load('' + url + ' .main-content',function(){
        $('#myModal').modal({show:true});
    });
})

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




