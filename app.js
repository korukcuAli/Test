$(document).ready(function() {
    $('#getTimes').on('click', function() {
        var city = $('#city').val();
        var url = 'https://api.aladhan.com/v1/timingsByCity?city=' + city + '&country=Turkey&method=13&school=1';
        $.getJSON(url, function(data) {
            if (data && data.data && data.data.timings) {
                var t = data.data.timings;
                $('#selected-city').text(city + ' için namaz saatleri');
                $('#imsak').text(t.Imsak);
                $('#sunrise').text(t.Sunrise);
                $('#dhuhr').text(t.Dhuhr);
                $('#asr').text(t.Asr);
                $('#maghrib').text(t.Maghrib);
                $('#isha').text(t.Isha);
                $('#times').removeClass('hidden');
            }
        });
    });
});
