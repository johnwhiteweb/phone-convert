jQuery(document).ready(function ($) {


const hc = ' --00-9382456 ';




// let bodyText = $('#departments').text(); 

    // $(this).replaceWith(
    //   '<a href="tel:1' + $(this).text().replace(/-/g, '').replace(/ /g, '').replace(/\./g, '').replace(/x/g, ',') + '">' + jQuery(this).text() + "</a>"
    // );
    $('#departments').contents().text(function() {
       let valid = false;

     $(this).text().slice(0,1) == 0 ? validate($(this).text()) : null;
    //    if($(this).text().slice(0,1)
      
       function validate(x){

        if(x[0] != "<" && x[1] != "n" ){
           return valid = true

        }
    }
});



    //     console.log(valid, x);

   
    //     // console.log('e',$(this)[0]);
    //     validate($(this).text());

    //     valid ? testPhone($(this)[0]): null;

    


// function testPhone(bodyText){
//     console.log(bodyText);

//     const regex = /^\s{0,}?-{0,}?\d{2,3}-?\d{7}\s?$/;
//     if(regex.test(bodyText)) {
//         console.log("Your phone is legal.");
//     }else{
//         console.log("nope");

//     }
// }


// let y = $('#departments > *).text());


// testPhone(this)
    
    
    });