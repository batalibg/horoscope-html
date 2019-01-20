import jquery from 'jquery';
import ScrollReveal from 'scrollreveal';
import IMask from 'imask';

window.jQuery = window.$ = jquery;

(function () {

    /**
     * Burger-menu
     */
    $('.burger-menu').click(function () {
        var menu = $('.menu');
        var menuMask = $('.menu-mask');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown();
        }
    });

    /**
     * Scroll
     */
    $(".scroll-link").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href');

        if (id.length > 1) {

            var top = ($(id).offset().top - $('#app-header').height());

            $('body,html').animate({
                scrollTop: top
            }, 1500);

            $('.burger-menu').removeClass('active');
            $('.burger-menu-text').text("Меню");
            $('.menu').removeClass('active');
            $('.menu-mask').removeClass('active');
        }
    });

     /**
     * Form
     */
    $('.form-control').on('focus', function () {
        $(this).parents('.form-group').addClass('in-focus');
    });

    $('.form-control').on('blur', function () {
        if ($(this).val() !== "") {
            $(this).parents('.form-group').addClass('in-focus');
        } else {
            $(this).parents('.form-group').removeClass('in-focus');
        }
    });


    /**
     * Phone mask
     * @type {*|jQuery.fn.init|jQuery|HTMLElement}
     */
    const phones = $('[type="tel"]');
    Array.from(phones).forEach(phone => {
        new IMask(phone, {
            mask: '+{38} (000) 000-00-00'
        });
    });



    /**
     * Modal
     */
    // var orderModal = $('.custom-modal--order');
    // var closeModal = $('.close-modal');
    // var modalMask = $('.modal-mask');
    //
    // $('.open-order').on('click', function (e) {
    //     e.preventDefault();
    //     $(orderModal).addClass('active');
    //     $(modalMask).addClass('active');
    // });
    //
    //
    // $(closeModal).on('click', function () {
    //     $(orderModal).removeClass('active');
    //     $(modalMask).removeClass('active');
    // });
    //
    // $(modalMask).on('click', function () {
    //     $(orderModal).removeClass('active');
    //     $(modalMask).removeClass('active');
    // });



    /**
     * Animate scroll
     */
    // ScrollReveal().reveal('.intro-item', {
    //     origin: 'left',
    //     delay: 400,
    //     distance: '200px',
    // });
    // ScrollReveal().reveal('.intro-order', {
    //     origin: 'right',
    //     delay: 400,
    //     distance: '200px',
    // });
    // ScrollReveal().reveal('.pain-item', {
    //     origin: 'left',
    //     delay: 400,
    //     distance: '200px',
    // });
    // ScrollReveal().reveal('.pain-beforeAfter', {
    //     origin: 'right',
    //     delay: 400,
    //     distance: '200px',
    // });
    // ScrollReveal().reveal('.response-item', {
    //     origin: 'bottom',
    //     delay: 400,
    //     distance: '200px',
    // });


    /**
     * Preloader
     */
    // ;(function(){
    //     function id(v){return document.getElementById(v); }
    //     function loadbar() {
    //         var ovrl = id("overlay"),
    //             prog = id("progress"),
    //             stat = id("progstat"),
    //             img = document.images,
    //             c = 0;
    //         let tot = img.length;
    //
    //         function imgLoaded(){
    //             c += 1;
    //             var perc = ((100/tot*c) << 0) +"%";
    //             prog.style.width = perc;
    //             stat.innerHTML = perc;
    //             stat.style.left = perc;
    //             if(c===tot) return doneLoading();
    //         }
    //         function doneLoading(){
    //             ovrl.style.opacity = 0;
    //             setTimeout(function(){
    //                 ovrl.style.display = "none";
    //             }, 1200);
    //         }
    //         for(var i=0; i<tot; i++) {
    //             var tImg     = new Image();
    //             tImg.onload  = imgLoaded;
    //             tImg.onerror = imgLoaded;
    //             tImg.src     = img[i].src;
    //         }
    //     }
    //     document.addEventListener('DOMContentLoaded', loadbar, false);
    // }());

})(jQuery)