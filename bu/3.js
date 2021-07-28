// add links to content function

jQuery(document).ready(function ($) {


    // var regex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/g;

    // var text = $("body").html();
    // console.log(text);
    // text = text.replace(regex, "<a href=\"tel:$&\">$&</a>");

    // $('#departments').html(text);




    $('#departments').text(function() {
        console.log($(this));
        $(this).replaceWith(
          '<a href="tel:1' + $(this).text().replace(/-/g, '').replace(/ /g, '').replace(/\./g, '').replace(/x/g, ',') + '">' + jQuery(this).text() + "</a>"
        );
      });

      

});