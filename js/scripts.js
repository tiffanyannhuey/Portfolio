if ($(window).innerWidth() > 991) { 

  if ($('html.no-touch')) {

    $(".work-wrapper").hover(function (){
           $(this).find(".work-title").slideToggle("slow");
      });
  }
}

$('.work-wrapper').on('click', function(e){
  e.preventDefault();
  console.log(this);
  var text = $(this).find('.work-title').html();
  console.log(text);
  var url = $(this).find('.link').attr('href');
  console.log("url is", url);

  $('.modal-body').load('' + url + ' .main-content',function(){
        $('#myModal').modal({show:true});
    });
})


function backToTop () {

    var chaser = $('#js-chaser')

      windowHeight = $(window).height();

    if (chaser) {

      $(window).scroll(function() {

        if ($(window).scrollTop() >= windowHeight / 2) {

          chaser.fadeIn();

        }

        else {

          chaser.hide();

        };

      });



      chaser.on('click', function () {

        $('html, body').animate({scrollTop: '0px'}, 800);
 
      });

    };

  };

  // if ($(window).innerWidth() >= 768) {

    var backToTop = new backToTop;

  // };


