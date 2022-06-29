// $('#modal .btn-close').click(function(){
//     $('#modal').css('display', 'none');
//   });



$(function(){
    /* 
        1. Introduction 하단 썸네일을 클릭하면 모달창 표시
        2. 닫기 버튼 누르면 모달창 꺼짐
    */ 
    $('#intro .col').click(function(){
        $('#modal').removeClass('on');
    });
    $('#modal .btn-close').click(function(){
        $('#modal').addClass('on');
    });
});

