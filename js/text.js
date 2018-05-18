(function(){
   $("img").hide(); //チェックボタン画像非表示
   $(".deletebtn").hide();

   $("input").on('keypress', function(e){ //liしか追加されないので、liの中身ごと追加できているが、classとidが付けられてない
     if(e.which === 13){
       var liDom = $("<li>",{
         "class" : "list"
       });
       $("ul").append($('<li/>').append('<button/>').append('<img>').append('<div/>').append('<input/>'));
     }
   });

   $("#allCerect").on('click', function(){
     $('img').toggle();
     $(".task").toggleClass('checked');
   });

  $(".checkbtn").on('click', function(){　//チェックボタンと色変更・横線の表示非表示切り替え　※要素の取得必要
    $('img').toggle();
    $(".task").toggleClass('checked');
  });

  $("li").hover(function(){ //liにカーソルが来たらdeletebtnを表示する　※liの要素取得必要
    　var i = $("li").index();
    $(".deletebtn").show() .css('color',  '#cc9a9a');
  },
  function(){
    $(".deletebtn").hide();
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

  $(".subcnt li").on('click', function(){
    $("li").hide();
    $('list li[class="checked"]').show();
  });

    $(".list").hover(function(){ //全てのliのインデックス番号が表示される 反応しなかったの同じidを使ってるから？修正してみる
    console.log($("li").index(this));
  });

})();
