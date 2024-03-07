$("#thumbnails img").click(function () {
    var myImg = $(this).attr("src");
    $("#preview img").fadeTo(500, 0.1, function () {
        $("#preview img").attr("src", myImg);
        $("#preview img").fadeTo(500, 1);
    });
});


