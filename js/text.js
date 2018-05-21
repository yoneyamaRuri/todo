(function(){

  $("img").hide(); //チェックボタン画像非表示
  $(".deletebtn").hide();
  $(".checkedLine").hide();


  $("input").on('keypress', function(e){ //完璧
  if(e.which === 13){
    var inputstr = $('.form-control').val();
    $("#mainlist").append($('<li class="list"/>')
    .append('<button class="checkbtn"><img src="images/checkicon_02.png">')
    .append('<div class="task">' + inputstr + '</div>')
    .append('<input type="button" class="deletebtn" value="×"/>'));
    $(".form-control").val("");
    $("img").hide();
    $(".deletebtn").hide();
  }
});
  $("#allCerect").on('click', function() { //item数が減らない
    $('img').toggle();
    $(".task").toggleClass('checkedLine');

  });

  $("ul").on('click',"li", function() {　
  var indexNom = $("li").index($(this));
  $("img").eq(indexNom).toggle();
  $(this).toggleClass('checked');
  $(this).toggleClass('checkedLine');　　//これが文字にかからないでliにかかってる
});

  $("ul").on('mouseenter', "li", function() {
  　var indexNom = $("li").index($(this));
  $(".deletebtn").eq(indexNom).show() .css('color',  '#cc9a9a');
  });
  $("ul").on('mouseleave', "li", function(){
  var indexNom = $("li").index($(this));
  $(".deletebtn").eq(indexNom).hide();
  });

  $("ul").on('mouseenter', 'input', function() {
  var indexNom = $("input").index($(this));
  $("input").eq(indexNom).css('color',  '#af5b5e');
  });
  $("ul").on('mouseleave', 'input', function() {
  var indexNom = $("input").index($(this));
  $("input").eq(indexNom).css('color',  '');
  });

  $("ul").on('click','.deletebtn', function(){　//deletebtnをクリックしたらliごと削除されるが、なぜか一番下のimgが表示される　
  $(this).parent("li").remove();
  });

  $("#clearComp").on({
  'mouseenter' :function(){
  $(this).css('border-bottom', '#777 1px solid');
},
'mouseleave' :function(){
  $(this).css('border', '');
}
});

  $(".btn").on('click','#clearComp', function(){
    $('.checked').remove();
  });

  $(function(){
  $(document).on('click', function() { //ローカル関数にして、liクリック毎に処理を行う
    var classLength = $('.list').not('.checked').length;
    $("#count").text(classLength + " items left");
  });
});



})();
