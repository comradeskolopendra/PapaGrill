$(".header__burger").on("click", function() {
    $(".menubar").addClass("menubar__active")
    $(".menubar").toggle("slide")
    $(".header__burger .header__burger_item").toggleClass("header__burger_item__active")
})