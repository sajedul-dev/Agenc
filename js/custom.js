$(function(){

  //slick slider
    
  $('.review-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        centerMode: true,
        dots:true,
      })

  //counter up

      $('.counter').counterUp({
        delay: 100,
        time: 2000
  });

  //bottom to top

    $(".bottom-to-top").click(function(){
      $("body,html") .animate({scrollTop:0},1000)
    })
    $(window).scroll(function(){
      let scroll = $(this).scrollTop()
      console.log(scroll)
      if(scroll > 300 ){
        $(".bottom-to-top").fadeIn(500)
      }else{
        $(".bottom-to-top").fadeOut(500)
      }
      //nav fixed operation
      
      if( scroll > 100){
        $(".nav-main").addClass("fixed")
      }else{
        $(".nav-main").removeClass("fixed")
      }
    })

    //preloader start

    $(window).on('load',function(){
      $(".preloader-main").delay(1000).fadeOut(500)
    })

    //mixitup plugin

    $('.all').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active')
    })

})

