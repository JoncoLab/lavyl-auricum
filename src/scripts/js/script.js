/**
 * Created by Sher on 03.09.2017.
 */

const main = function () {
    const firstSmallAmountBtn = $('.first-small-item'),
        firstBigAmountBtn = $('.first-big-item'),
        secondSmallAmountItem = $('.second-small-item'),
        secondBigAmountItem = $('.second-big-item'),
        firstSmIt = $('.first-item').children('.small-item'),
        firstBgIt = $('.first-item').children('.big-item'),
        secondSmIt = $('.second-item').children('.small-item'),
        secondBgIt = $('.second-item').children('.big-item'),
        orderBtn = $('#order, .order'),
        orderCloseBtn = $('.close-btn'),
        orderBox = $('.make-order'),
        descParagraph = [
            $('.paragraph-desc'),
            $('.paragraph-instruction'),
            $('.paragraph-consistency')
        ],
        descCaption = [
            $('.desc'),
            $('.instruction'),
            $('.consistency')
        ];

    orderBtn.click(function () {
        orderBox.addClass('active');
    });

    orderCloseBtn.click(function() {
       orderBox.removeClass('active');
    });

    firstBgIt.hide();
    secondBgIt.hide();
    firstSmallAmountBtn.addClass('current');
    secondSmallAmountItem.addClass('current');

    firstBigAmountBtn.click(function () {
        firstSmIt.hide();
        firstBgIt.fadeIn('fast');
        $(this).addClass('current');
        firstSmallAmountBtn.removeClass('current');
    });

    firstSmallAmountBtn.click(function () {
        firstBgIt.hide();
        firstSmIt.fadeIn('fast');
        $(this).addClass('current');
        firstBigAmountBtn.removeClass('current');
    });

    secondBigAmountItem.click(function () {
        secondSmIt.hide();
        secondBgIt.fadeIn('fast');
        $(this).addClass('current');
        secondSmallAmountItem.removeClass('current');
    });

    secondSmallAmountItem.click(function () {
        secondBgIt.hide();
        secondSmIt.fadeIn('fast');
        $(this).addClass('current');
        secondBigAmountItem.removeClass('current');
    });

    for (var i = 0; i < descCaption.length; i++) {
        descCaption[i].click(function () {
            if (descCaption[0].is(event.target)) {
                descParagraph[0].slideDown('fast');
                descParagraph[1].slideUp('fast');
                descParagraph[2].slideUp('fast');
            } else if (descCaption[1].is(event.target)) {
                descParagraph[1].slideDown('fast');
                descParagraph[0].slideUp('fast');
                descParagraph[2].slideUp('fast');
            } else if (descCaption[2].is(event.target)) {
                descParagraph[2].slideDown('fast');
                descParagraph[0].slideUp('fast');
                descParagraph[1].slideUp('fast');
            }
        });
    }
};

$(document).ready(main);