// i would like to recieve all elements, do something and return them...

// // const phone = new RegExp('^[0-9.-]+[0-9.-]+\.{3,7,3}$');
// // var re = /^(?:-?\s)(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;
// // const phone = new RegExp('^[0-9.-/s]+[0-9.-]+\.{3,7,3}$');
const phone = new RegExp('^[0-9.-\s]?[0-9][0-9]');


// needs to separate content even more...


const el = document.querySelectorAll("div, p, li");



el.forEach(function(i) {
    console.log(i.textContent);
    console.log(phone.test(i.textContent));
  });



// console.log(phone.test(this));





// jQuery(document).ready(function ($) {


//     // let data =
//     $('#departments').find('*').contents().filter(function () {
        
        
//         // var phone = new RegExp('^[0-9.-]+@[0-9.-]+\.{3,7,3}$');
//         // var phone = new RegExp('^[0-9._-]{3,12}$');
//         var phone = new RegExp('^[0-9]{3}$');
//         console.log(phone.test(this));
//         // const regex = /^\-05\d-?\d{7}$/;
       
//         //  if(this.nodeType === 3 ){
//         //     if (phone.test(this)) {


//         //         console.log(this);
//         //         console.log("Your phone is legal.");



//         //     }

//         //     return console.log(this+ 'p');
//         // }
//         });

//     // var x = '-050-9382456'
//     // var x = '-050-9382456'
//     // // var phone = new RegExp('^[0-9.-]+[0-9.-]+\.{3,7,3}$'); ,[0-9]{7} // [\.-]
//     // var phone = new RegExp('^[0-9._-]{3,12}$');



//     // if (phone.test(x)) {
//     //     console.log('good');

//     // }



//     //    console.log(data);
// });


