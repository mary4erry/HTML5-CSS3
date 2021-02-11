
jQuery(document).ready(function() {
    // jQuery('img.animated').hover(
    //     function() {
    //     jQuery('img.animated').addClass('pulse'),
    //     function() {
    //     jQuery('img.animated').removeClass('pulse'); // Убираем класс
    //  }
    // });
    
    jQuery('.chooseUnit1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 300
    });
    jQuery('.chooseUnit3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 300
    });

    jQuery('.chooseUnit4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 300
    });

    jQuery('.chooseUnit2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 300
    });

    jQuery('.offerUnitLeft1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });

    jQuery('.offerUnitLeft2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
    jQuery('.offerUnitRight1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
    jQuery('.offerUnitRight2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
});