// FAIL

jQuery(document).ready(function ($) {
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {


        // var countrycodes = "1"
        // var delimiters = "-|\\.|—|–| "
        // var phonedef = "\\+?(?:(?:(?:" + countrycodes + ")(?:\\s|" + delimiters + ")?)?\\(?[2-9]\\d{2}\\)?(?:\\s|" + delimiters + ")?[2-9]\\d{2}(?:" + delimiters + ")?[0-9a-z]{4})"
        // var spechars = new RegExp("([- \(\)\.:]|\\s|" + delimiters + ")", "gi") //Special characters to be removed from the link
        // var phonereg = new RegExp("((^|[^0-9])(href=[\"']tel:)?((?:" + phonedef + ")[\"'][^>]*?>)?(" + phonedef + ")($|[^0-9]))", "gi")
        
        // $(body > div).html()
        // $('.main-content').html()
        
        
        // var phonedef = new RegExp( "^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$");

        function escapeRegExp(string) {
            return string.replace(/^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/g, '\\$&'); // $& means the whole matched string
          }


        function ReplacePhoneNumbers(x) {


            var re = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;
            function testInfo(phoneInput) {
                console.log();
            var OK = re.exec(phoneInput.value);

            if (!OK) {

                // out.textContent = `${phoneInput.value} isn't a phone number with area code!`;
            } else {
                console.log(OK[0]);
                // out.textContent = `Thanks, your phone number is ${OK[0]}`;
            }
            testInfo(x)
            } 

            // var newhtml = oldhtml.replace(/href=['"]callto:/gi,'href="tel:')
            // console.log(newhtml);
            // newhtml = newhtml.replace(phonereg, function ($0, $1, $2, $3, $4, $5, $6) {

            // });
            // newhtml = newhtml.replace(phonereg, function ($0, $1, $2, $3, $4, $5, $6) {
            //     if ($3) return $1;
            //     else if ($4) return $2+$4+$5+$6;
            //     else return $2+""+$5+""+$6; }); 
            // return newhtml;
            }
            
            $('.contact-form-thumb-phon').html(ReplacePhoneNumbers($(".main-content").html()))
            // $('.main-content').html(ReplacePhoneNumbers($(".main-content").html()))

    // }
});