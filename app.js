let error = 0;
$(document).ready(function(){
    $("#payment").slideUp();

    $("input").focus(function(){
      $(this).css('border', '1px solid #ccc');
    });

    $("#surname, #name").blur(function(){
        element=$(this).val();
        if(element===""){
            $(this).css('border', '3px solid red');
            $('#name-error').html('Неправильний ввід');
        }
        else{
            $('#name-error').html('');
        }
            
    });

    $("#region, #district, #city").blur(function(){
        element=$(this).val();
        if(element===""){
            $(this).css('border', '3px solid red');
            $('#address-error').html('Неправильний ввід');
        }
        else{
            $('#address-error').html('');
        }
    });

    $("#postal-code").blur(function(){
        element=$(this).val();
        if(isNaN(element) || element===""){
            $(this).css('border', '3px solid red');
            $('#address-error').html('Неправильний ввід');
        }
        else{
            $('#address-error').html('');
        }
    });

    $("#phone").blur(function(){
        element=$(this).val();
        if(isNaN(element) || element===""){
            $(this).css('border', '3px solid red');
            $('#tel-error').html('Неправильний ввід');
        }
        else{
            $('#tel-error').html('');
        }
    });

    $("#email").blur(function(){
        element=$(this).val();
        if(!element.includes('@')){
            $(this).css('border', '3px solid red');
            $('#email-error').html('Неправильний ввід');
        }
        else{
            $('#email-error').html('');
        }
    });

    $("#length").blur(function(){
        element=$(this).val();
        if(isNaN(element) || element===""){
            $(this).css('border', '3px solid red');
            $('#length-error').html('Неправильний ввід');
        }
        else{
            $('#length-error').html('');
        }
    });

    $("#length, #connector").change(function(){
        length=$('#length').val();
        price = length*20;
        
        if($('#Type-C').is(":checked"))
            price+=20;
        else if($('#Micro-usb').is(":checked")) 
            price+=15;
        else
            price+=10;
        
            $('#price').html('Ціна: '+price+' грн');
    });

    $("#continue").click(function(){
        $("#information").slideUp();
        $("#payment").slideDown();
        
    });

    $("#pay").click(function(){
        let information = {
            surname: $('#surname').val(),
            name: $('#name').val(),
            city: $('#city').val(),
            district: $('#district').val(),
            region: $('#region').val(),
            postalCode: $('#postal-code').val(),
            country: $('#country').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            date: $('#date').val(),
            color: $('#color').val(),
            length: $('#length').val(),
            TypeC: $('#Type-C').is(":checked"),
            MicroUsb: $('#Micro-usb').is(":checked"),
            MiniUsb: $('#Mini-usb').is(":checked"),
            additionally: $('#additionally').val(),
            cardName: $('#card-name').val(),
            cardNumber: $('#card-number').val(),
            cardExp: $('#card-exp').val(),
            cardCvv: $('#card-cvv').val()
        }
        console.log(information);
    });

  });