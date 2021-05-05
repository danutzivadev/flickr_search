$(document).ready(function() {


    $('form').submit(function (evt) {
        evt.preventDefault();
        var sF = $('#search').val();
        console.log(sF);

        // the AJAX part
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        // var sw = $(form).text();
        var flickrOptions = {
            tags: sF,
            format: "json"
        };
        function displayPhotos(data) {
            var photoHTML = '<ul>';
            $.each(data.items,function(i,photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            }); // end each
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    }); // end click
}); // end ready (to be sure the html code is fully loaded)