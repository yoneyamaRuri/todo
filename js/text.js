(function(){
   $("img").hide(); //チェックボタン画像非表示
   $(".deletebtn").hide();

   $("input").on('keypress', function(e){ //liしか追加されないので、liの中身ごと追加できているが、classとidが付けられてない
     if(e.which === 13){
       $("ul").append($('<li/>').append('<button/>').append('<img>').append('<div/>').append('<input/>'));
     }
   });

   $("#allCerect").on('click', function(){
     $('img').toggle();
     $(".task").toggleClass('checked',);
   });

  $("li").on('click', function(){
    var indexNom = $("li").index($(this));
    $('img').eq(indexNom).toggle();
    $(".task").eq(indexNom).toggleClass('checked');
  });

  $("li").hover(function(){ //liにカーソルが来たらdeletebtnを表示する　※liの要素取得必要
    　var indexNom = $("li").index($(this));
    $(".deletebtn").eq(indexNom).show() .css('color',  '#cc9a9a');
  },
  function(){
    var indexNom = $("li").index($(this));
    $(".deletebtn").eq(indexNom).hide();
  }
    );

  $(".deletebtn").hover(function(){ //deletebtnにカーソルが来たら色を濃くする ※liの要素取得必要
    $(this).css('color',  '#af5b5e');
  },
  function(){
    $(this).css('color',  '');
  });

  $(".deletebtn").on('click', function(){　//deletebtnをクリックしたらliごと削除　
    $(this).parent("li").remove();
  });

  $(".clearComp").hover(function(){
    $(this).css('border-bottom', '#777 1px solid');
  },
  function(){
    $(this).css('border', '');
  });

  $("li a").hover(function(){ //deletebtnにカーソルが来たら色を濃くする ※liの要素取得必要
    var subIndexNo = $("li a").index($(this));
    $("a").eq(subIndexNo).addClass('serect');
  },
  function(){
    var subIndexNo = $("li a").index($(this));
    $("a").eq(subIndexNo).removeClass('serect');
  });

  $(".all").on('click', function(){
    $("ul mainlist").show();
    $(this).toggleClass('serect'); //枠線の固定が出来ていない
  });

  $(".Active").on('click', function(){
    $("li .task checked").toggleClass('hideContent'); //枠線の固定が出来ていない
  });

  $(".Completed").on('click', function(){
    if($("div").hasClass('task checked')){
      $("li .task checked").show();
    } else {
      $("li .tas").hide();
    };
  });



  $(function(){ // 数字が変化しないので、Activeなtaskだけカウントするようにする
    var classLength = $('.task').length;
    $("#count").text(classLength + " items left");
  });

})();
