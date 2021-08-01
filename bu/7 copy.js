//begin:

jQuery(document).ready(function ($) {

    let bodyText = $('#departments').text(); //extract num
    let phoneNumber= '<a href="tel:1';

    $('#departments').text().forEach(x => {

    console.log(x);
        
    });

    // $('#departments').children().text(function() {
    //     console.log($(this));

    //     $(this).replaceWith(
    //         phoneNumber + $(this).text().replace(/-/g, '').replace(/ /g, '').replace(/\./g, '').replace(/x/g, ',') + '">' + jQuery(this).text() + "</a>"
    //     );
    //   });




//     var phonereg = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;

// // first split -

// let x = str.split(' - ').filter(w => w !== '');


// function findPhone(x){
//     // splits words and ignores spaces:

//      let str = x.split(' - ').filter(w => w !== '');
//      str.forEach(e => {
//         e.split(' - ').filter(i => i !== '');
//     });
    
//     // (/(?:,| )+/) (' ')
//     // x.replace(/[\(\)\-\s]+/g, '');
//     // return words;

//     console.log(str);
//   // check if an array item is a phone number

// }


// function replacePhoneNumbers(x) {

//     x = str.split(' ').filter(w => w !== '');

//     function testInfo(phoneInput) {
//          var re = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;


//         var OK = re.exec(phoneInput);

//         if (!OK) {
//              console.log('not a match' , OK);

//             // out.textContent = `${phoneInput.value} isn't a phone number with area code!`;
//         } else {
//             console.log(`Thanks, your phone number is ${OK[0]}`);
//             // out.textContent = `Thanks, your phone number is ${OK[0]}`;
//         }
//     }
//     x.forEach(i => {
//         testInfo(i)
//     });
// }

// findPhone(str);
// // replacePhoneNumbers(str)


});


