$(document).ready(function(){

    // $('.mas-grid-cols').masonry({
    //     columnWidth : '.grid-sizer',
    //     itemSelector : '.item',
    // });
    

    $('.nav-icon').click(function(){
        $(this).toggleClass('open');
        $('header nav').toggleClass('open');
    });

    $('header .fss-wrap .search-icon').click(function(){
        $('header .search-box').addClass('show');
    });

    $('header .search-box .close-icon').click(function(){
        $('header .search-box').removeClass('show');
    });

    $('.recipes-wrap .recipes-slider .video-bg-img .play-icon').click(function(){
        $('.recipes-slider-video-popup-overlay').addClass('active');
        var videoUrl = $(this).attr('data');
        $('.recipes-slider-video-popup-overlay .video-col').html('<iframe src="https://www.youtube.com/embed/' + videoUrl + '?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
    });
     
    $('.recipes-slider-video-popup-overlay .close-icon').click(function(){
        $('.recipes-slider-video-popup-overlay .video-col').html('');
        $('.recipes-slider-video-popup-overlay').removeClass('active');
    });

    $('.top-banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        dots : true
    });

    $('.products-slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1171,
              settings: {
                variableWidth: false,
              }
            },
          ]
    });

    $('.recipes-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
    });

});
