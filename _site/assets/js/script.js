(function ($) {

    console.log("hsd");

    $("form").on("submit", function(event) {

        event.preventDefault();

        $(".submitbtn").prop("disabled", true);
        $(".lds-ring").toggle();

        var formValues=$(this).serialize();

        $.post('https://api-bridge-staticman.herokuapp.com/v2/entry/Nabstar/blog/master/comments', formValues, function(data) {

            resetForm();
            $(".submitbtn").prop("disabled", false);
            $(".lds-ring").toggle();

        });

    });

    function resetForm() {
        $(".visitorname input").val("");
        $(".visitorcomment textarea").val("");
    }

})(jQuery);
