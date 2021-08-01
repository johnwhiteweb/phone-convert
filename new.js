jQuery(document).ready(function ($) {
    let valid = false;



    $('#body1').contents().text(function () {
        var htmlString = $(this).html();
        if (!$(this).html()) { return }
        if ($(this).html().slice(0, 1) == 0 || $(this).html().slice(0, 1) == " ") {

            y = htmlString.split(' ').filter(w => w !== '');
            console.log();
            // split list words - if a word begins with a number - mark it
            // setter !
            testInfo(y);
            // once completed clean up - activate:
            //     $( this).wrap(function() {
                //     return "<a href='tel:" + $( this ).text() + "'></a>";
                //   });

                // y.forEach(i => {
                //     testInfo(i)
                // });

            }
            
                
                
                function testInfo(x) {
                    console.log(x);
                    const mobile = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;
                    // const lendPhone = /^(?:0(?:2|3|4|8|9))(?:-?\d){8}$|^(0(?:-?\d){9})$/;
                   
                    console.log(x[0]);
                    
                    let OK = mobile.exec(x[0]);
                    // let OKL = lendPhone.exec(y);
                    
                if(OK == null){return}
                
                
                if (!OK ) {
                    // console.log('not a match', OK);
                } else {
                    console.log(`mobile number is ${OK[0]}`);
                    // console.log(`land number is ${OKL[0]}`);
                 
                    OK[0].replace(/href=['"]callto:/gi, 'href="tel:')
                    // OKL[0].replace(/href=['"]callto:/gi, 'href="tel:')
                    
     
            
        }



        };




});
});



