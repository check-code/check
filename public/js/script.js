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


// login template script

(function ($) {
    "use strict";

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });


  })(jQuery);

// login template script

});
