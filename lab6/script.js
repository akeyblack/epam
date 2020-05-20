$(document).ready(function(e){
    $("#submit").on('submit', e => {
        e.preventDefault();
    });
    $("#send-form").on("submit", function(e) {
        e.preventDefault();
    }).validate({   
        rules: {
            name: {
                required:true,
                lettersonly: true,
            },
            email: {
                required:true,
                email:true,
                minlength: 5
            },
            message: {
                required: true,
                minlength: 1
            }
        },
        messages: {
            name: {
                required:"Please enter your name",
                lettersonly:"Pleasse enter correct name"
            },
            email: "Please enter valid email address",
            message: "Please enter your message"
        },
        submitHandler: function(form,event) {
            $.ajax({
                url: "https:/google.com.ua",
                type: "POST",
                data: $(form).serialize(form),
                dataType: "json"
            })
            event.preventDefault();
        }
    });
    
    jQuery.validator.addMethod("lettersonly", function(value,element){
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    $.ajax({
        url: "http://dummy.restapiexample.com/api/v1/employees",
        type: "GET",
        dataType: "json",
        success: function(data)
        {
            data.data.forEach(element => {
                $("#2nd").append(`<div>${element.employee_age} years ${element.employee_name} with salary ${element.employee_salary}</div>`);
            });
        }
    });
}); 

