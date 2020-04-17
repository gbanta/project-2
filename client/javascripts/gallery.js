// jshint esversion: 6

let controller = function () {
  let prefixURL =
    "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
  let suffixURL = "&format=json&jsoncallback=?";
  //get value entered by user from textbox
  let flickrTag = $("input").val();
  let requestURL = prefixURL + flickrTag + suffixURL;

  //clear old photos
  $(".photos").html("");

  $.getJSON(requestURL, function (flickrResponse) {
    flickrResponse.items.forEach(function (item, index) {
      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        // attach the img tag to the main
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
    });
  });
};

//register the onclick and keypress handlers
$(document).ready(function () {
  $("button").on("click", controller);
});
