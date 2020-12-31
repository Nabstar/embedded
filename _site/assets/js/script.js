window.addEventListener( "load", function () {

    const name = document.getElementById( "name" );
    const thought = document.getElementById( "thought" );

    submitComment("lukman", "awesome content");

    function submitComment(name, comment) {

        console.log(name + " " + comment);

    }

});

