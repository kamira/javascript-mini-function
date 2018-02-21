/* 含動畫 */
$("input").keyup(function(){
    $(this).stop().animate({ width: $(this).val().length*22 },100);
});
