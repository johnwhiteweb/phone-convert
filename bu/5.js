// text a string, strip tags, look for a phone number inside...
// var words = str.split(" ");


// let str = "  lorem ipsum  09-5285594   050-9382456 טלפון-09-7701222"
let str = "טלפון-09-7701222"
// this case demonstrates 2 things : 1. need to combine the first part and to throw the second...

// first split -

let x = str.split(' - ').filter(w => w !== '');
console.log(x);


function findPhone(x){
    // splits words and ignores spaces:

     let str = x.split(' - ').filter(w => w !== '');
     str.forEach(e => {
        e.split(' - ').filter(i => i !== '');
    });
    
    // (/(?:,| )+/) (' ')
    // x.replace(/[\(\)\-\s]+/g, '');
    // return words;

    console.log(str);
  // check if an array item is a phone number

}


function replacePhoneNumbers(x) {

    x = str.split(' ').filter(w => w !== '');

    function testInfo(phoneInput) {
         var re = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;


        var OK = re.exec(phoneInput);

        if (!OK) {
             console.log('not a match' , OK);

            // out.textContent = `${phoneInput.value} isn't a phone number with area code!`;
        } else {
            console.log(`Thanks, your phone number is ${OK[0]}`);
            // out.textContent = `Thanks, your phone number is ${OK[0]}`;
        }
    }
    x.forEach(i => {
        testInfo(i)
    });
}

findPhone(str);
// replacePhoneNumbers(str)
