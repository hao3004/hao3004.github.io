
/*            *  *   *    ****                    */
/*            ****  ***   *  *                    */
/*            *  * *   *  ****     Hao_dev_ekogi  */


/*______________________________________________________________________________________
__________________________________________________________________EKOGI LOADING_________
________________________________________________________________________________________*/

$(window).load(function() {
    $('body').removeClass('preloading');
    $('#preload').delay(1000).fadeOut('slow');
});

/*______________________________________________________________________________________
________________________________________________EKOGI MENU TOGGLE AUTOMATICALLY_________
________________________________________________________________________________________*/

let ekogimenu = document.querySelector(".ekogi-menu");
let ekogibutton = document.querySelector(".ekogi-menu__button");

toggleMenu = () => {
  ekogimenu.classList.toggle("open");
}

ekogibutton.addEventListener("click", function() {
  clearInterval(interactionPreview);
  toggleMenu();
});

let interactionPreview = setInterval(() => {
  toggleMenu();
}, 2000)

/*______________________________________________________________________________________
_______________________________________EKOGI SLICK SLIDER - lib-type: automatic_________
________________________________________________________________________________________*/

$(document).ready(function(){
    $('.esogi-slider-autoplay').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: true/*,
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]*/
    });
});
/*______________________________________________________________________________________
_____________________________________________________________________CONTENT-FIELD______
________________________________________________________________________________________*/
/*
jQuery(document).ready(function($) {

    $('.ekogi-info', '#site-name__dialoge').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById('curent-field').innerHTML='My Info :))';
    });
});
*/
$(document).ready(function(){
    $("#curent-field").hover(function(){
        document.getElementById("curent-field").innerHTML = "Hi,<br/> we make it awesome";
    });
    $(".site-name").hover(function(){
        document.getElementById("curent-field").innerHTML = "Hi,<br/> we make it awesome";
    });
});

