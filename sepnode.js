// i would like to recieve all elements, do something and return them...

jQuery(document).ready(function ($) {


    // let data =
    $('#departments').find('*').contents().filter(function () {

        // var phone = new RegExp('^[0-9.-]+@[0-9.-]+\.{3,7,3}$');
        var phone = new RegExp('^[0-9._-]{3,12}$');
        // const regex = /^\-05\d-?\d{7}$/;
        console.log(this);
        // if(this.nodeType === 3 ){
            if (phone.test(this)) {


                console.log(this);
                console.log("Your phone is legal.");



            }

        });

    // var x = '-050-9382456'
    // var x = '-050-9382456'
    // // var phone = new RegExp('^[0-9.-]+[0-9.-]+\.{3,7,3}$'); ,[0-9]{7} // [\.-]
    // var phone = new RegExp('^[0-9._-]{3,12}$');



    // if (phone.test(x)) {
    //     console.log('good');

    // }



    //    console.log(data);
});


