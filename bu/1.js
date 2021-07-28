// validate phone num using regex

jQuery(document).ready(function ($) {
    let numPhone = '09-7701222';
    //let numPhone = 'seou';
    
    function replacePhoneNumbers(x) {
        
        
        function testInfo(phoneInput) {
            var re = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;
            
        
           
            var OK = re.exec(phoneInput);
           
            if (!OK) {
                console.log('not a match' , OK);
                
                // out.textContent = `${phoneInput.value} isn't a phone number with area code!`;
            } else {
                console.log(OK[0]);
                // out.textContent = `Thanks, your phone number is ${OK[0]}`;
            }
        } 
        testInfo(x)
    }
    

    //replacePhoneNumbers(numPhone);
     $('.contact-form-thumb-phon').html(replacePhoneNumbers($(".main-content").html()))







});