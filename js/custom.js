
//AOS
AOS.init();

$(window).on("load", function () {
    $("body").removeClass("no-trans");
});


$(".menu-icon").on("click",function () {
    $(this).toggleClass("open");
    $(".main-menu").toggleClass("open");   
     $("html, body").toggleClass("open-menu");   
});


//tooltip
tippy('.tooltip-link', {
    arrow: true,
    placement: 'bottom',

});


// $(function () {
//     var $wins = $(window); // or $box parent container
//     var $boxs = $(".header-icon");
//     $wins.on("click.Bst", function (event) {
//         if (
//             $boxs.has(event.target).length === 0 && //checks if descendants of $box was clicked
//             !$boxs.is(event.target) //checks if the $box itself was clicked
//         ) {
//             $(".slide-menu").slideUp("fast")

//         }
//     });
// });


