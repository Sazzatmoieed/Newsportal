$(function() {
    if ($(window).width() > 768) { $('#MenuWrapper').on('hide.bs.collapse', function() { $('a.hide-menu').html('<i class="fas fa-bars align-middle pr-2"></i> à¦†à¦°à¦“'); });
        $('#MenuWrapper').on('show.bs.collapse', function() { $('a.hide-menu').html('<i class="fas fa-times align-middle pr-2"></i> à¦†à¦°à¦“'); }); } else { $('#MenuWrapper').on('hide.bs.collapse', function() { $('a.hide-menu').html('<i class="fas fa-bars align-middle"></i>'); });
        $('#MenuWrapper').on('show.bs.collapse', function() { $('a.hide-menu').html('<i class="fas fa-times align-middle"></i>'); }); }
    $("#MenuWrapper").collapse('hide');
    $(".header_right_part").click(function() { $("#MenuWrapper").collapse('toggle');
        $(".header").toggleClass("change_border");
        $("ul.navbar-nav li.nav-item").toggleClass("hide_main_menu"); });
    if ($(window).width() > 768) { $(".search-icon").click(function() { $(".navbar-brand,.header_right_part,.icon-search").toggle('fast');
            $("#navcol-1 ul li").toggleClass("hide_main_menu");
            $(".search-box").toggleClass('pt-2'); }); } else { $(".search-icon").click(function() { $(".mobile-navbar").toggle('fast');
            $(".search-box").toggleClass('pb-2').toggleClass('pt-2').toggleClass('px-1'); });
        $("a.hide-menu").click(function() { $(".mobile-top-header").toggle();
            $('#MenuWrapper').toggleClass('fullscreen').css({ 'border-top': '2px solid #ddd' });
            $('.mobile_header').toggleClass('hide_header'); }); }
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) { $("#desktop_navbar .navbar-light > div").removeClass('header').addClass("header_shadow");
            $("#MenuWrapper").collapse('hide');
            $('#navcol-1 ul li').removeClass('hide_main_menu'); } else { $("#desktop_navbar .navbar-light > div").addClass("header").removeClass("header_shadow").removeClass("change_border");
            $('#navcol-1 ul li').removeClass('hide_main_menu');
            $(".search-icon").click(function() { $(".navbar-brand,.header_right_part,.icon-search").show();
                $("#navcol-1 ul li").toggleClass("hide_main_menu"); }); }
    });
});
$("#back-top").hide();
$(function() { $(window).scroll(function() { if ($(this).scrollTop() > 150) { $('#back-top').fadeIn(); } else { $('#back-top').fadeOut(); } });
    $('#back-top a').click(function() { $('body,html').animate({ scrollTop: 0 }, 'fast'); return false; }); });

function topFunction() { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; }
$(function() {
    if ($(window).width() > 768) { $('#most-recent-news').slimScroll({ height: 410 });
        $('#most-viewed-news').slimScroll({ height: 410 }); }
    if ($(window).width() > 768) { $('#most-recent-news-home').slimScroll({ height: 410 });
        $('#most-viewed-news-home').slimScroll({ height: 410 }); }
    $('#live-news-sidebar').slimScroll({ height: 375 });
});
$('select[name="bd_division"]').on('change', function() { var sel_div = $(this).val();
    $('select[name="bd_district"] option').css('display', 'none');
    $('select[name="bd_district"] .dist-' + sel_div).css('display', 'block'); });
$('select[name="bd_district"]').on('change', function() { var sel_div = $(this).val();
    $('select[name="bd_thana"] option').css('display', 'none');
    $('select[name="bd_thana"] .thana-' + sel_div).css('display', 'block'); });
$('.dist_news_srch').on('click', function() {
    var div_data = '',
        dist_data = '';
    if ($('select[name="bd_division"] option:selected').attr('data-val'))
        div_data = $('select[name="bd_division"] option:selected').attr('data-val');
    if ($('select[name="bd_district"] option:selected').attr('data-val'))
        dist_data = $('select[name="bd_district"] option:selected').attr('data-val');
    var thana_data = $('select[name="bd_thana"]').val();
    var URL = 'country-news';
    if (div_data == '') { alert('please select the division first');
        $('select[name="bd_division"]').focus(); return false; }
    URL = URL + '/' + div_data;
    if (dist_data != '') URL = URL + '/' + dist_data;
    if (thana_data != '') URL = URL + '/' + thana_data;
    var getUrl = '/';
    window.location.href = getUrl + URL;
    return false;
});
$(document).ready(function() {
    function blink_text() { $('.blink').fadeOut(1000);
        $('.blink').fadeIn(1000); }
    setInterval(blink_text, 1000);
});