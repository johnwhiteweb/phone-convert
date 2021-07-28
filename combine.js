jQuery(document).ready(function ($) {

    $('.main-content').text(function () {
        const regex = /^\-05\d-?\d{7}$/;

        var test = $(this).match(/(-+)\.(' '+)/);
        var filename = test[1];
        console.log(filename); 
        // let x = $(this).split(' - ').filter(w => w !== '');


        // $(this).replaceWith(
        //     '<a href="tel:1' + $(this).text().replace(/-/g, '').replace(/ /g, '').replace(/\./g, '').replace(/x/g, ',') + '">' + jQuery(this).text() + "</a>"
        // );







    });
});