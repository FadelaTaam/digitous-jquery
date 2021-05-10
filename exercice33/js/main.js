$(function () {
    $("button").click(function () {
        $.ajax({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function (data, statuts, response) {

                console.log("data", data[0].capital, data[0].name);

                $("#exercise").html(

                    "Country: <strong class='important'>" + data[0].name + "</strong><br>" +
                    "Capital: <strong class='important'>" + data[0].capital

                );
        

            }
        });
    });
    
});