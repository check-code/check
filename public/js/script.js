$(function() {

   $(".sideBtn").click(function() {
      // remove classes from all
      $(".sideBtn").removeClass("active_sidebtn");
      // add class to the one we clicked
      $(this).addClass("active_sidebtn");
   });

      $('.sideBtn').on('click',function() {
       if(!$('.rightArea').get(0).scrollHeight > $('.rightArea').height()){
        $( '.footer').show(); 
      }
      
    });

   var height;
    var trigger = 650;
    var scroll;
    if($(this).scrollTop()){
        trigger=0;
        scroll=0;
      }
    height = $('.rightArea').height();

        scroll=$(this).scrollTop();
        console.log(trigger - height+" "+scroll);
      if (scroll > trigger - height) {
        $( '.footer').show(100);
        console.log('show')

      } else {
        $('.footer').hide(100);
        console.log('hide')
      }

    $('.sideBtn').on('click',function() {
         if( ( $('.rightArea').get(0).scrollHeight <= $('.rightArea').height() ) ){
            $( '.footer').show();   
        }else{
            $( '.footer').hide();   
        }
        
    });
  

    $('.rightArea').scroll(function() {
        height = $('.rightArea').height();
        scroll=$(this).scrollTop() ;
        console.log(height -trigger+" "+scroll);
      if (scroll > trigger - height) {
        $( '.footer').show(100);
        console.log('show')

      } else {
        $('.footer').hide(100);
        console.log('hide')
      }
    });
});
