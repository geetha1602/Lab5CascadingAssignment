$(document).ready(function () {
    GetCountry();
    $('#City').attr('disabled', true);
    $('#Country').change(function () {
        $('#City').attr('disabled', false);
        var id = $(this).val();
        $('#City').empty();
        $('#City').append('<Option>--Select City--</Option>');
        $.ajax({
            url: '/CascadeDD/City?id='+id,
            success: function (result) {
                $.each(result, function (i, data) {
                    $('#City').append('<Option value=' + data.cityId + '>' + data.cityName + '</Option>')
                });
            }
        })
    })
})

function GetCountry() {
    $.ajax({
        url: '/CascadeDD/Country',
        success: function (result) {
            $.each(result, function (i, data) {
                $('#Country').append('<Option value=' + data.countryId + '>' + data.countryName + '</Option>')
            });
        }
    })
}