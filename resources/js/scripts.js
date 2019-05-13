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

    // $('.talent_img').click(function() {
    //     $('.talent_img').attr('style', 'transform:rotateY(180deg);transition:.5s');
    // });
});

var selector, id1, id2, rotation;
var rotate_obj = {
    factor: true, 
    tal_src: '/img/talent1.jpg',
    sup_src: '/img/support1.jpg',
    changeImgSrc: function() { 
        var src = '';
        if (rotate_obj.factor === true) {
            src = this.tal_src;
        } else if (rotate_obj.factor === false) {
            src = this.sup_src;
        }

        $('.talent_img').attr('src', src);
    }
};

if (rotate_obj.factor === true) {
    selector = '.talent_img';
    id1 = '#talent_1';
    id2 = '#talent_2';
    rotation = '180deg';
} else if (rotate_obj.factor === false) {
    selector = '.support_img';
    id1 = '#support_1';
    id2 = '#support_2';
    rotation = '360deg';
}

$(selector).click(function() {
    $(selector).attr('style', 'transform:rotateY(' + rotation + ');transition:2s');
    $(id1).css('opacity', '0');
    $(id2).css('opacity', '1');
    rotate_obj.changeImgSrc;
    rotate_obj.factor = !rotate_obj.factor;
    rotate_obj.src = rotate_obj.src;
    console.log(rotate_obj.factor);
});