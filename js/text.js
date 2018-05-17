(function(){
   $("img").hide(); //チェックボタン画像非表示
   $("#deletebtn").hide();


   $("#allCerect").click(function(){
     $('img').toggle();
     $("#list").toggleClass('checked');
   });

  $("#checkbtn").click(function(){
    $('img').toggle();
    $("#list").toggleClass('checked');
  });

  $("li").hover(function(){
    $("#deletebtn").show() .css('color',  '#cc9a9a');
  },
  function(){
    $("#deletebtn").hide();
  }
    );

  $("#deletebtn").hover(function(){
    $(this).css('color',  '#af5b5e');
  },
  function(){
    $(this).css('color',  '');
  });

  $("#deletebtn").on('click', function(){
    $(this).parent("li").remove();
  });

  $(".clearComp").hover(function(){ //これをアンダーラインのhoverにする
    $(this).css('color', 'pink');
  },
  function(){
    $(this).css('color', 'yellow');
  }
    );

})();
