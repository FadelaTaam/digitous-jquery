$(function () {
    $("button").click(function () {

        let country= $("input").val();
                console.log(country)

        $.ajax({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/name/"+ country ,
            success: function (data, statuts, response) {

                $("#exercise").html(

                    "Country: <strong class='important'>" + data[0].name + "</strong><br>" +
                    "Capital: <strong class='important'>" + data[0].capital

                )

            }
        });
    });
    
});