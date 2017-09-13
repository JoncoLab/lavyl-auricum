/**
 * Created by Sher on 03.09.2017.
 */

const main = function () {
    const firstSmallAmountBtn = $('.first-small-item'),
        firstBigAmountBtn = $('.first-big-item'),
        secondSmallAmountItem = $('.second-small-item'),
        secondBigAmountItem = $('.second-big-item'),
        firstSmIt = $('.first-item').children('.small-item-images, .small-item-add'),
        firstBgIt = $('.first-item').children('.big-item-images, .big-item-add'),
        secondSmIt = $('.second-item').children('.small-item-images, .small-item-add'),
        secondBgIt = $('.second-item').children('.big-item-images, .big-item-add'),
        orderBtn = $('#order, .order'),
        orderCloseBtn = $('.close-btn'),
        body = $('body'),
        firstDescParagraph = [
            $('.first-item-desc').children('.paragraph-desc'),
            $('.first-item-desc').children('.paragraph-instruction'),
            $('.first-item-desc').children('.paragraph-consistency')
        ],
        firstDescCaption = [
            $('.first-item-desc').children('.desc'),
            $('.first-item-desc').children('.instruction'),
            $('.first-item-desc').children('.consistency')
        ],
        secondDescParagraph = [
            $('.second-item-desc').children('.paragraph-desc'),
            $('.second-item-desc').children('.paragraph-instruction'),
            $('.second-item-desc').children('.paragraph-consistency')
        ],
        secondDescCaption = [
            $('.second-item-desc').children('.desc'),
            $('.second-item-desc').children('.instruction'),
            $('.second-item-desc').children('.consistency')
        ],
        images = [
            $('.first-item .small-item-images img:first-of-type'),
            $('.first-item .small-item-images img:last-of-type'),
            $('.first-item .big-item-images img:first-of-type'),
            $('.first-item .big-item-images img:last-of-type'),
            $('.second-item .small-item-images img:first-of-type'),
            $('.second-item .small-item-images img:last-of-type'),
            $('.second-item .big-item-images img:first-of-type'),
            $('.second-item .big-item-images img:last-of-type')
        ];

    var fullScreenImg = $('.full-screen-image img').attr('src');

    orderBtn.click(function () {
        body.addClass('active');
    });

    orderCloseBtn.click(function() {
       body.removeClass('active');
    });

    firstBgIt.hide();
    secondBgIt.hide();
    firstSmallAmountBtn.addClass('current');
    secondSmallAmountItem.addClass('current');

    firstBigAmountBtn.click(function () {
        firstSmIt.hide();
        firstBgIt.fadeIn('300ms');
        $(this).addClass('current');
        firstSmallAmountBtn.removeClass('current');
    });

    firstSmallAmountBtn.click(function () {
        firstBgIt.hide();
        firstSmIt.fadeIn('300ms');
        $(this).addClass('current');
        firstBigAmountBtn.removeClass('current');
    });

    secondBigAmountItem.click(function () {
        secondSmIt.hide();
        secondBgIt.fadeIn('300ms');
        $(this).addClass('current');
        secondSmallAmountItem.removeClass('current');
    });

    secondSmallAmountItem.click(function () {
        secondBgIt.hide();
        secondSmIt.fadeIn('300ms');
        $(this).addClass('current');
        secondBigAmountItem.removeClass('current');
    });

    for (var i = 0; i < firstDescCaption.length; i++) {
        firstDescCaption[i].click(function () {
            if (firstDescCaption[0].is(event.target)) {
                firstDescParagraph[0].slideDown('fast');
                firstDescParagraph[1].slideUp('fast');
                firstDescParagraph[2].slideUp('fast');
            } else if (firstDescCaption[1].is(event.target)) {
                firstDescParagraph[1].slideDown('fast');
                firstDescParagraph[0].slideUp('fast');
                firstDescParagraph[2].slideUp('fast');
            } else if (firstDescCaption[2].is(event.target)) {
                firstDescParagraph[2].slideDown('fast');
                firstDescParagraph[0].slideUp('fast');
                firstDescParagraph[1].slideUp('fast');
            }
        });
    }

    for (var j = 0; j < secondDescCaption.length; j++) {
        secondDescCaption[j].click(function () {
            if (secondDescCaption[0].is(event.target)) {
                secondDescParagraph[0].slideDown('fast');
                secondDescParagraph[1].slideUp('fast');
                secondDescParagraph[2].slideUp('fast');
            } else if (secondDescCaption[1].is(event.target)) {
                secondDescParagraph[1].slideDown('fast');
                secondDescParagraph[0].slideUp('fast');
                secondDescParagraph[2].slideUp('fast');
            } else if (secondDescCaption[2].is(event.target)) {
                secondDescParagraph[2].slideDown('fast');
                secondDescParagraph[0].slideUp('fast');
                secondDescParagraph[1].slideUp('fast');
            }
        });
    }
};

$(document).ready(main);