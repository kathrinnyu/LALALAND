var sections = [
    'home', 'ados', 'one', 'two', 'aln', 'three', 'four',
    'plan', 'five', 'cosd', 'six', 'seven',
    'eight', 'nine', 'ten', 'end'
];

$('.menu').click(function(event){
    event.preventDefault();
    $('.slider').toggleClass('open');
});

$('.slider a').click(function() {
    $('.slider a').removeClass('active');
    $(this).addClass('active');
});

$('.miaside').hover(function(event){
    event.preventDefault();
    $(this).children('.overlaym').toggleClass('open');
    $(this).find('.descrip').toggle();
});

$('.sebside').hover(function(event){
    event.preventDefault();
    $(this).children('.overlays').toggleClass('open');
    $(this).find('.descrip').toggle();
});

$('#nine').hover(function(event){
    event.preventDefault();
    $(this).children('.overlays').toggleClass('open');
    $(this).find('.descrip').toggle();
});

$('.about').click(function(event){
    event.preventDefault();
    $(this).parents('.main').parents('.sectionmain').next('.sectionabout').toggleClass('open');
});

$('.aboutarrow').click(function(event){
    event.preventDefault();
    $(this).parents('.aboutpage').parents('.sectionabout').toggleClass('open');
});

$('.music').click(function(event){
    event.preventDefault();
    $(this).parents('.main').parents('.sectionmain').next('.sectionabout').next('.sectionmv').toggleClass('open');
});

$('.mvarrow').click(function(event){
    event.preventDefault();
    $(this).parents('.mvpage').parents('.sectionmv').toggleClass('open');
});

$('.right').click(function(event){
    event.preventDefault();
    $(this).parents('.miaside').parents('.scene').parents('.sectionpage').next('.sectionmia').toggleClass('open');
});

$('.miamvarrow').click(function(event){
    event.preventDefault();
    $(this).parents('.miamv').parents('.sectionmia').toggleClass('open');
});

$('.left').click(function(event){
    event.preventDefault();
    $(this).parents('.sebside').parents('.scene').parents('.sectionpage').next('.sectionseb').toggleClass('open');
});

$('.sebmvarrow').click(function(event){
    event.preventDefault();
    $(this).parents('.sebmv').parents('.sectionseb').toggleClass('open');
});

$('.down').click(function(event) {
    var bottom_of_screen = window.visualViewport.pageTop + window.visualViewport.height;
    for (var i = sections.length - 1; i >= 0; i--) {
        if ($('#' + sections[i]).offset()['top'] <= bottom_of_screen) {
            $('html, body').animate({
                scrollTop: $('#' + sections[i + 1]).offset().top
            }, 500);
            return;
        }
    }
});

$('.up').click(function(event) {
    var top_of_screen = window.visualViewport.pageTop;
    for (var i = 0; i < sections.length; i++) {
        if ($('#' + sections[i]).offset()['top'] >= top_of_screen) {
            $('html, body').animate({
                scrollTop: $('#' + sections[i - 1]).offset().top
            }, 500);
            return;
        }
    }
});

$(window).scroll(function(event) {
    var bottom_of_screen = $(window).scrollTop() + window.visualViewport.height;
    if (bottom_of_screen > $('#' + sections[1]).offset().top) {
        $('.up').css("visibility", "visible");
    } else {
        $('.up').css("visibility", "hidden");
    }
    if (bottom_of_screen >= $('body').height() - 50) {
        $('.down').css("visibility", "hidden");
    } else {
        $('.down').css("visibility", "visible");
    }
});