const visual_s = new Swiper('#visual_slide',{
    autoplay: {delay:1000},
    loop:true,
    // swiper-pagination JS
    pagination: {
        el:'main .swiper-pagination',
        type: 'bullets', //부모 필수
    },
    // navigation js
    navigation: {
        nextEl:'main .swiper-button-next',
        prevEl:'main .swiper-button-prev',
    },
})