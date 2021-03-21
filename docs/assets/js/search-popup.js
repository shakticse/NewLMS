(function ($) {
    "use strict";


    if ($('.side-menu__toggler').length) {
        $('.side-menu__toggler').on('click', function (e) {
            $('.side-menu__block').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.side-menu__block-overlay').length) {
        $('.side-menu__block-overlay').on('click', function (e) {
            $('.side-menu__block').removeClass('active');
            e.preventDefault();
        });
    }

})(jQuery);