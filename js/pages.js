//show item pagination 
$(function () {
    $(".pagin-div").slice(0, 4).show();
    var show_divs = $(".pagin-div");
    if (show_divs.length < 5) {
        $(".more-btn").fadeOut();
    } else {
        $(".more-btn").fadeIn();
    }

    $(".more-btn button").on('click', function () {
        $(".pagin-div:hidden").slice(0, 2).slideDown();
        var hidden_divs = $(".grid-item:hidden");
        if (hidden_divs.length == 0) {
            $(".more-btn").fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});


//faqs
$(document).on("click", ".faq-title", function () {
    $(this).parent().toggleClass("active");
    $(this).parent().siblings().removeClass("active");
});

//faqs
$(document).on("click", ".nav-item", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

//contact form 

var $form = $(".contact-form");
$form.validate({
    errorPlacement: function errorPlacement(error, element) {
        if ((element.attr("type") == "select")) {
            error.after(element);
        } else {
            element.after(error)
        }
    },

    rules: {
        username: {
            minlength: 5
        },

        email: {
            email: true
        },
        message: {
            minlength: 20,
            maxlength: 500

        }
    },

    messages: {},
    submitHandler: function () {
        swal.fire({
            title: 'تم إرسال الرسالة بنجاح',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(function () {
            $form[0].submit();
        }, 3000)
    }
});