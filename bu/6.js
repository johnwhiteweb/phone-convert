let str = "טלפון-09-7701222"
// this case demonstrates 2 things : 1. need to combine the first part and to throw the second...

// first split -

// let x = str.split(' - ').filter(w => w !== ''); //success

// var x = str.replace(/,\s+/, ",").split('-')

// if an item split is a number and the next item is a number +
// join them back ! - make sure no more then 3
// repeat !
// capture the word fax 'פקס // if the string contains- skip


var phonereg = /^(?:0(?!5)(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;


function ReplacePhoneNumbers(oldhtml) {
    //Created by Jon Meck at LunaMetrics.com - Version 1.0
    var newhtml = oldhtml.replace(/href=['"]callto:/gi,'href="tel:')
    newhtml = newhtml.replace(phonereg, function ($0, $1, $2, $3, $4, $5, $6) {
        if ($3) return $1;
        else if ($4) return $2+$4+$5+$6;
        else return $2+""+$5+""+$6; }); 
    return newhtml;
    }

   let x =  ReplacePhoneNumbers(str)
console.log(x);