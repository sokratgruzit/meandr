$(document).ready(function() {
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