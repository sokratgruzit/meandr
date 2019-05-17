$(document).ready(function() {
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

    var form_inputs = $('#contact_form').children().length;

    $('#contact_form').click(function(e) {
        for (var i = 1; i < $('#contact_form').children().length - 1; i++) {
            if (e.target.id === 'input_' + i) {
                $('#' + e.target.id).val('');
                $('.anim_' + i).addClass('anim_input').removeClass('anim_back_input');
            } else {
                $('.anim_' + i).removeClass('anim_input').addClass('anim_back_input');
            }
        }
    });
});

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