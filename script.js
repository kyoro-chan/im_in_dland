$(function(){

    var count = 1;

    $('#contrybear-show').click(function(){
        $('#modal-titole').text('どのアトラクションにする？')
        $("#first-btn").text('ライド系').addClass('rideat');
        $("#second-btn").text('シアター系');
        $('#showimg').css('display', 'none');
        $('#show-modal').fadeIn();
        $('#atimg').fadeIn();
        $('.modal').fadeIn();
    });

    /* ショーを選択した場合のモーダル */
    $('#show-modal-show').click(function(){
        $('#show-modal').fadeIn();
        $('.modal').fadeIn();
    });

    /* ショーモーダルのボタン押下時 */
    $('.show-btn').click(function(){
        if(count > 1){
            $('.unshow-second').show();
            $('.reset-btn').css('margin-top','90px')
        }

        $('#show-modal').hide();
        $('.modal').fadeOut();
        $('#entrance').hide();
        $('.plan-right').hide();

        if($(this).hasClass("rideat")){
            $('.unshow-pure').hide();
            $(".countrybare").fadeIn();
            $('.unshow-bbm').fadeIn();
            $('.unshow').fadeIn();

        }else{
            $('.unshow-pure').fadeIn();
            $(".arnest").fadeIn();
            $('.unshow').fadeIn();
        }
        
        $(".reset-btn").fadeIn();
    });

    $('.reset-btn').click(function(){
       
        $('#entrance').fadeIn();
        $('.plan-right').fadeIn();

        $(".countrybare").hide();
        $('.unshow-bbm').hide();
        $('.unshow').hide();
        $(".arnest").hide();
        $(".reset-btn").hide();

        $("#first-btn").text('自分も手拍子で参加したい').removeClass('rideat');
        $("#second-btn").text('写真に収めたい');

        count ++;
    });
});
