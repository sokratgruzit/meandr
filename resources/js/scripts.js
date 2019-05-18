$(document).ready(function() {
    // Animation to scroll down to the contact form
    $('.contact_form_open_btn_wrapper').click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#form_section").offset().top)
        }, 2000);
    });

    $('.contact_form_open_btn_wrapper').mouseenter(function() {
        $('.animated_icon').animate({
            width: "100%"
        });
    });

    $('.contact_form_open_btn_wrapper').mouseleave(function() {
        $('.animated_icon').animate({
            width: "54px"
        });
    });

    // Animation for contact form
    var form_inputs = $('#contact_form').children().length;

    $('#contact_form').click(function(e) {
        for (var i = 1; i < form_inputs - 1; i++) {
            if (e.target.id === 'input_' + i) {
                if ($('#' + e.target.id).val() !== '') {
                    $('.anim_' + i).addClass('anim_input').removeClass('anim_back_input');
                } else {
                    $('#' + e.target.id).val('');
                    $('.anim_' + i).addClass('anim_input').removeClass('anim_back_input');
                }
            } else {
                if ($('#input_' + i).val() !== '') {
                    $('.anim_' + i).addClass('anim_input').removeClass('anim_back_input');
                } else {
                    $('.anim_' + i).removeClass('anim_input').addClass('anim_back_input');
                }
            }
        }

        validateInputs(e.target.id);
    });

    // Contact form validation
    function validateInputs(input_id) {
        $('#' + input_id).change(function() {
            var currentValue = $(this).val();

            if(input_id === 'input_1') {
                var nameRegex = new RegExp(/^[ЁёА-я]{4,}(?: [ЁёА-я]+){0,2}$/);
                var checkInput = currentValue.match(nameRegex);
                var popup_text = document.createTextNode("Введите корректно Имя и Фамилию. Пример: Адольф Сталин.");
            }

            if(input_id === 'input_2') {
                var nameRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                var checkInput = currentValue.match(nameRegex);
                var popup_text = document.createTextNode("Введите корректно почту. Пример: example@gmail.com");
            }

            if(input_id === 'input_3') {
                var nameRegex = new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);
                var checkInput = currentValue.match(nameRegex);
                var popup_text = document.createTextNode("Введите корректно Имя и Фамилию. Пример: +7 926 666 66 66");
            }

            if(input_id === 'input_4') {
                var nameRegex = new RegExp(/^[ЁёА-я\-\s\d\.\"\«\»\„\“\\!\\?]+$/);
                var checkInput = currentValue.match(nameRegex);
                var popup_text = document.createTextNode('Введите корректно Имя и Фамилию. Пример: "Выхожу один я на дорогу!".');
            }
            
            if (checkInput === null) {
                $('.validation_popup_text').empty();
                $('.validation_popup').css('display', 'block');
                $('#' + input_id).val('');
                $('.validation_popup_text').append(popup_text);

                setTimeout(delayMessageFadeOut, 3000);
            } 
        });
    }

    function delayMessageFadeOut() {
        $('.validation_popup').fadeOut(400);
    }

    for (var i = 1; i < form_inputs - 1; i++) {
        if ($('#input_' + i).val() === '') {
            $('#submit_contact_form').attr('disabled', true).attr('style', 'opacity:.5');
        } 
    }

    $('#contact_form').change(function() {
        if ($('#input_1').val() !== '' && $('#input_2').val() !== '' && $('#input_3').val() !== '' && $('#input_4').val() !== ''){
            $('#submit_contact_form').removeAttr('disabled').removeAttr('style');
        } else {
            $('#submit_contact_form').attr('disabled', true).attr('style', 'opacity:.5');
        }
    });
});

// Animation for talents and suppotrs pages
var src, page = window.location.pathname.split("/").pop();
var rotate_obj = {
    factor: true, 
    tal_src: '/img/talent1.jpg',
    sup_src: '/img/support1.jpg',
    changeImg: function() { 
        if (page = 'talents') {
            src = this.tal_src;
        } else if (page = 'suppotrs') {
            src = this.sup_src;
        }
    }
};

$('.' + page + '_img').click(function() {
    if (rotate_obj.factor === true) {
        $('.' + page + '_img').attr('style', 'transform:rotateY(180deg);transition:2s');
        $('#' + page + '_1').css('opacity', '0');
        $('#' + page + '_2').css('opacity', '1');
        rotate_obj.changeImg;
        rotate_obj.factor = false;
    } else if (rotate_obj.factor === false) {
        $('.' + page + '_img').attr('style', 'transform:rotateY(360deg);transition:2s');
        $('#' + page + '_2').css('opacity', '0');
        $('#' + page + '_1').css('opacity', '1');
        rotate_obj.changeImg;
        rotate_obj.factor = true;
    }
});