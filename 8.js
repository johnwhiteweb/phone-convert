// var str = '097-701222';
var str = '-050-9382456';
// var str = 'טלפון-09-7701222';
// let out = _.words(str, /[0-9,-]+/g);




// console.log(_.words(str, /[0-9,-]+/g));
// out[1] == '-' ? out.pop('-') : null;
// console.log(out[0]);

// console.log(_.words(str, /[^, ][1-9]+/g)); // 0-9]{2}{3}|[0-9]{7}

const regex = /^\-05\d-?\d{7}$/;

    if(regex.test(str)) {
        console.log("Your phone is legal.");
    }
    else {
        console.log("Your phone isn't legal.");
    }
 
