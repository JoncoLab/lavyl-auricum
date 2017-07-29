/**
 * Created by Saladin on 04.04.2017.
 */

var main = function () {
    var smallIt = $('.small-item'),
        bigIt = $('.big-item'),
        smallItSens = $('.small-item-sens'),
        bigItSens = $('.big-item-sens'),
        smallAmount = $('#small-item'),
        bigAmount = $('#big-item'),
        smallAmountSens = $('#small-item-sens'),
        bigAmountSens = $('#big-item-sens');

    smallAmount.addClass('current');
    smallAmountSens.addClass('current');
    bigIt.hide();
    bigItSens.hide();

    bigAmount.click(function () {
        smallAmount.removeClass('current');
        $(this).addClass('current');
        smallIt.hide();
        bigIt.fadeIn('slow');
    });

    smallAmount.click(function () {
        bigAmount.removeClass('current');
        $(this).addClass('current');
        bigIt.hide();
        smallIt.fadeIn('slow');
    });

    bigAmountSens.click(function () {
        smallAmountSens.removeClass('current');
        $(this).addClass('current');
        smallItSens.hide();
        bigItSens.fadeIn('slow');
    });

    smallAmountSens.click(function () {
        bigAmountSens.removeClass('current');
        $(this).addClass('current');
        bigItSens.hide();
        smallItSens.fadeIn('slow');
    });
};

$(document).ready(main);