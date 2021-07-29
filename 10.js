
jQuery(document).ready(function ($) {


    $( "#departments" ).contents()


      .filter(function() {
    
         return this.nodeType === 3;

      })
        .wrap( "<a href='#'></a>" )
        .end()
      .filter( "br", "a" , "&nbsp;" )
      .remove();
    
    
    
    });