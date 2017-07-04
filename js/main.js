$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        videoWidth: true,
        videoHeight: true, 
        responsive:{
            0:{
                items:1
            }
        }
    })
});