(function ($) {
    "use strict";



    $('#date-picker').mobiscroll().datepicker({
        controls: ['date'],
        touchUi: true,
        responsive: {
            xsmall: {
                controls: ['date'],
                display: 'center',
                touchUi: true
            },
            small: {
                controls: ['date'],
                display: 'anchored',
                touchUi: true
            },
            custom: { // Custom breakpoint
                breakpoint: 992,
                controls: ['date'],
                display: 'anchored',
                touchUi: false
            }
        }
    });


    $('#datetime-picker').mobiscroll().datepicker({
        controls: ['datetime'],
        touchUi: true,
        responsive: {
            xsmall: {
                controls: ['datetime'],
                display: 'center',
                touchUi: true
            },
            small: {
                controls: ['datetime'],
                display: 'anchored',
                touchUi: true
            },
            custom: { // Custom breakpoint
                breakpoint: 992,
                controls: ['datetime'],
                display: 'anchored',
                touchUi: false
            }
        }
    });


    $('#date-time-picker').mobiscroll().datepicker({
        controls: ['date', 'time'],
        touchUi: true,
        responsive: {
            xsmall: {
                controls: ['date', 'time'],
                display: 'center',
                touchUi: true
            },
            small: {
                controls: ['date', 'time'],
                display: 'anchored',
                touchUi: true
            },
            custom: { // Custom breakpoint
                breakpoint: 992,
                controls: ['date', 'time'],
                display: 'anchored',
                touchUi: false
            }
        }
    });


    



})(jQuery);