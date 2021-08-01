jQuery(document).ready(function ($) {
    let valid = false;



    $('#body1').contents().text(function () {
        var htmlString = $(this).html();
        if (!htmlString) { return }
        if (htmlString.slice(0, 1) == 0 || htmlString.slice(0, 1) == " ") {

            // setter !
            validate(htmlString);
            console.log(this);
            // once completed clean up - activate:
            //     $( this).wrap(function() {
            //     return "<a href='tel:" + $( this ).text() + "'></a>";
            //   });
        }

        function validate(x) {
            y = x.split(' ').filter(w => w !== '');
            function testInfo(y) {

                var re = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;
                var OK = re.exec(y);
                if (!OK) {
                    // console.log('not a match', OK);
                } else {
                    console.log(`number is ${OK[0]}`);

                    var newhtml = OK[0].replace(/href=['"]callto:/gi, 'href="tel:')
                    console.log(newhtml);
     
            }
                y.forEach(i => {
                    testInfo(i)
                });
            }


        });




});


