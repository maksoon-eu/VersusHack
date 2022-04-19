
let nav = $("#nav");
let logo = $("#logo")
let link = $("#link");
let navToggle = $("#navToggle");
let funcLinkLeft = $("#funcLinkLeft");
let funkLinkRight = $("#funkLinkRight");
let func = $("#func");
let funcList = $('#funcList');

let fortImg = $('#fortImg');
let funcImg = $('#funcImg');
let favcImg = $('#favcImg');

let fortImg2 = $('#fortImg2');
let funcImg2 = $('#funcImg2');
let favcImg2 = $('#favcImg2');

let play = $('#play')


let desckFirst = $("#desckFirst");
let desckSecond = $("#desckSecond");
let desckThird = $("#desckThird");
let desckFourth = $("#desckFourth");
let desckFiveth = $("#desckFiveth");
let desckSixth = $("#desckSixth");

funcLinkLeft.addClass("active")
funcList.fadeOut();

$(function() {

    funcLinkLeft.on('click', function() {
        funcLinkLeft.addClass('active');

        funcList.delay(10).fadeOut();

        func.delay(400).fadeIn();


        funkLinkRight.removeClass('active');
    });


});

$(function() {

    funkLinkRight.on('click', function() {
        funkLinkRight.addClass('active');
        func.delay(10).fadeOut();

        funcList.delay(400).fadeIn();

        funcLinkLeft.removeClass('active');
    });
});




$(function() {

    navToggle.on('click', function() {
        navToggle.toggleClass('burger-active');

        link.toggleClass('show');

        logo.toggleClass('flex');

        nav.toggleClass('show');
    });
});

let SimSlider = $("#SimSlider");

SimSlider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<img class="slider-sim__left" src="assets/images/More.svg" alt="">',
    nextArrow: '<img class="slider-sim__right" src="assets/images/More2.svg" alt="">'
});

let reviewsSlider = $("#reviewsSlider");

reviewsSlider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
        }
    ]
});

let workSlider = $("#workSlider");

workSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    prevArrow: '<img class="slider-arrows__left" src="assets/images/arrow.svg" alt="">',
    nextArrow: '<img class="slider-arrows__right" src="assets/images/arrow.svg" alt="">'
});



$(document).ready(function() {

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
        disableOn: 100,
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade',
        removalDelay: 160
	});

});


/* Modal
    =====================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        workSlider.slick('setPosition');

    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });









    









