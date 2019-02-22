

    $("#getQuote").on("click", function () {
        $.ajaxSetup({ cache: false });
        $.get("") 
        .done(function (data) {
            $("#quoteHolder").html(data[0].content + " ~ " + data[0].title);
        })
        .fail(function(){
            alert("Request failed. Try again");
        });
    });  
