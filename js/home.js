if ($('.archive_submit').is(':visible')) {
    $('.archive_submit').click(function() {
        var URL = window.location.origin;
        var sel_day = $('select[name="arch_day"]').val();
        var sel_month = $('select[name="arch_month"]').val();
        var sel_year = $('select[name="arch_year"]').val();
        var sel_edition = $('select[name="edition"]').val();
        if (sel_day == '') { $('select[name="arch_day"]').css('background', '#FF9').focus(); } else if (sel_month == '') { $('select[name="arch_month"]').css('background', '#FF9').focus(); } else if (sel_year == '') { $('select[name="arch_year"]').css('background', '#FF9').focus(); } else {
            var sel_date = sel_year + '/' + sel_month + '/' + sel_day;
            if (sel_edition != '') URL = URL + '/archive/' + sel_edition + '/';
            var d1 = sel_year + '-' + sel_month + '-' + sel_day;
            var d2 = '2017-12-28';
            if (Date.parse(d2) >= Date.parse(d1)) {
                if (sel_edition == 'online-edition')
                    URL = URL + '/archive/online-edition/' + sel_date;
                else
                    URL = URL + '/archive/print-edition/' + sel_date;
                window.location.href = URL;
            } else { if (sel_edition == '') URL = URL + '/archive/' + sel_date;
                else URL = URL + sel_date;
                window.location.href = URL; }
        }
    });
}
var today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
var base_url = window.location.href;
var current_archive_date = today;
var last_archive_date = today;
var sel_edition = '';
var url_prefix = base_url + 'archive/';
var url_postfix = '';
new js_calender({ language: 'bn', container: '#archive_calendar', url_prefix: url_prefix, url_postfix: url_postfix, delimeter: '/', lowest_year: '2013-05-07', current_date: current_archive_date, last_date: last_archive_date, calender_archive_url: '', });
$.ajax({ url: 'https://www.jugantor.com/get_token', type: 'get', dataType: 'json', success: function(result) { $('meta[name="csrf-token"]').attr('content', result.token);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': result.token } });
        document.querySelector('#poll_token').value = result.token; }, error: function(xhr, status, error) { console.log(xhr); } });
$('.pollSubmit').click(function() { var poll_val = $("input[name='poll']:checked").val(); if (poll_val == '' || poll_val == undefined) { alert('à¦¯à§‡ à¦•à§‹à¦¨à§‹ à¦à¦•à¦Ÿà¦¿ à¦¨à¦¿à¦°à§à¦¬à¦¾à¦šà¦¨ à¦•à¦°à§à¦¨!!'); } else { $('.right_poll_cont form').submit(); } });
var date = new Date();
var list = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
var listBN = ['à¦«à¦œà¦°', 'à¦œà§‹à¦¹à¦°', 'à¦†à¦¸à¦°', 'à¦®à¦¾à¦—à¦°à¦¿à¦¬', 'à¦‡à¦¶à¦¾'];
var listTime = ['à¦­à§‹à¦°', 'à¦¬à§‡à¦²à¦¾', 'à¦¬à¦¿à¦•à§‡à¦²', 'à¦¸à¦¨à§à¦§à§à¦¯à¦¾', 'à¦°à¦¾à¦¤'];
var listSun = ['sunrise', 'sunset'];
var listSunBN = ['à¦¸à§‚à¦°à§à¦¯à§‹à¦¦à¦¯à¦¼', 'à¦¸à§‚à¦°à§à¦¯à¦¾à¦¸à§à¦¤'];

function en_to_bn_number_conversion(en_number) {
    var bn_number = '';
    for (var i = 0; i < en_number.length; i++) { if (en_number[i] == '0') bn_number = bn_number + "à§¦"; if (en_number[i] == '1') bn_number = bn_number + "à§§"; if (en_number[i] == '2') bn_number = bn_number + "à§¨"; if (en_number[i] == '3') bn_number = bn_number + "à§©"; if (en_number[i] == '4') bn_number = bn_number + "à§ª"; if (en_number[i] == '5') bn_number = bn_number + "à§«"; if (en_number[i] == '6') bn_number = bn_number + "à§¬"; if (en_number[i] == '7') bn_number = bn_number + "à§­"; if (en_number[i] == '8') bn_number = bn_number + "à§®"; if (en_number[i] == '9') bn_number = bn_number + "à§¯"; if (en_number[i] == ':') bn_number = bn_number + ":"; }
    return bn_number;
}
for (var i in list) { if (i == 2) { var times = prayTimes.getTimes(date, [23.777176, 90.399452], +7.3, "auto", "12h"); } else { var times = prayTimes.getTimes(date, [23.777176, 90.399452], +6, "auto", "12h"); } }
sun = '<span class="sunrise">' + listSunBN[1] + " : " + en_to_bn_number_conversion(times[listSun[1].toLowerCase()]) + '</span>';
sun += '<span class="sunset">' + listSunBN[0] + " : " + en_to_bn_number_conversion(times[listSun[0].toLowerCase()]) + '</span>';
var html = '<table cellspacing="1" cellpadding="1" width="100%">';
for (var i in list) {
    if (i == 2) { var times = prayTimes.getTimes(date, [23.777176, 90.399452], +7.3, "auto", "12h"); } else { var times = prayTimes.getTimes(date, [23.777176, 90.399452], +6, "auto", "12h"); }
    var timeEN = times[list[i].toLowerCase()];
    html += '<tr><td><span class="prayerName">' + listBN[i] + '</span></td>';
    html += '<td><span class="prayerTime">' + en_to_bn_number_conversion(times[list[i].toLowerCase()]) + '</span></td></tr>';
}
html += '</table>';
document.getElementById('tableSunTimes').innerHTML = sun;
document.getElementById('tablePrayTimes').innerHTML = html;