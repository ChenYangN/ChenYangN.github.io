//点击上一页下一页
var $$ = jQuery.noConflict();
$$(function () {
    // $$('.wenb_input').on('touchstart',function (event) {
    //     // $$(this).siblings('input[type="checkbox"]').prop('checked','true');
    //     event.stopPropagation();
    // })


    var bannerHeight = $$('.banner').height();

    var letterHeight = $$('.letter').height();
    //点击投票实现定位到投票
    $$('.vote').on('click',function () {
        $$(document).scrollTop(bannerHeight+letterHeight);
    })

    $$('.num-1 #question_1').find('li').eq(0).find('label').on('click',function () {
        $$(this).parents('.content-info').attr('flag','t').siblings('.content-info').attr('flag','t');

    })
    $$('.num-1 #question_1').find('li').eq(1).find('label').on("click",function () {
        $$(this).parents('.content-info').attr('flag','f').siblings('.content-info').attr('flag','f');
        //滚动距离
        var offsetTop = $$(this).parents('.award').offset().top;
        var scrolllenght = $$(this).parents('.award').height();
        // $$(document).scrollTop(offsetTop+scrolllenght);
        $$('html,body').animate({scrollTop: offsetTop+scrolllenght}, 800);
    })


    $$('.num-2 #question_19').find('li').eq(0).find('label').on('click',function () {
        $$(this).parents('.content-info').attr('flag','t').siblings('.content-info').attr('flag','t');

    })
    $$('.num-2 #question_19').find('li').eq(1).find('label').on("click",function () {
        $$(this).parents('.content-info').attr('flag','f').siblings('.content-info').attr('flag','f');
        //滚动距离
        var offsetTop = $$(this).parents('.award').offset().top;
        var scrolllenght = $$(this).parents('.award').height();
        // $$(document).scrollTop(offsetTop+scrolllenght);
        $$('html,body').animate({scrollTop: offsetTop+scrolllenght}, 800);
    })
    $$('.num-3 #question_38').find('li').eq(0).find('label').on('click',function () {
        $$(this).parents('.content-info').attr('flag','t').siblings('.content-info').attr('flag','t');

    })
    $$('.num-3 #question_38').find('li').eq(1).find('label').on("click",function () {
        $$(this).parents('.content-info').attr('flag','f').siblings('.content-info').attr('flag','f');
        //滚动距离
        var offsetTop = $$(this).parents('.award').offset().top;
        var scrolllenght = $$(this).parents('.award').height();
        // $$(document).scrollTop(offsetTop+scrolllenght);
        $$('html,body').animate({scrollTop: offsetTop+scrolllenght}, 800);
    })



})