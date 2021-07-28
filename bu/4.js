// comb and filter text FAIL but this.nodeType !== 1 is interesting

jQuery(document).ready(function ($) {


$( "#departments" ).contents()
  .filter(function() {

     return this.nodeType === 3;
    return this === 'Department 3 - (555) 123-6789';
  })
    .wrap( "<a href=''></a>" )
    .end()
  .filter( "br" )
  .remove();



});