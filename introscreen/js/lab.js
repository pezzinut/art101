$(document).ready(function() {
    let intro = $('.intro');
    let logo = $('.logo-header');
    let logoSpan = $('.logo');

    // add event list to the whole window
    $(window).on('DOMContentLoaded', function() {
        setTimeout(function() {
            logoSpan.each(function(idx, span) {
                setTimeout(function() {
                    $(span).addClass('active');
                }, (idx + 1) * 400);
            });

            setTimeout(function() {
                logoSpan.each(function(idx, span) {
                    setTimeout(function() {
                        $(span).removeClass('active').addClass('fade');
                    }, (idx + 1) * 50);
                });
            }, 2000);

            setTimeout(function() {
                intro.css('top', '-100vh');
            }, 2300);
        });
    });
});