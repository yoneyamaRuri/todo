(function(){

  /**
   * taskの追加
   */
  function addNewTask(text) {
    $("#mainlist").append($('<li class="list"/>')
    .append('<button class="checkbtn"><img src="images/checkicon_02.png class="checkicon">')
    .append('<div class="task">' + text + '</div>')
    .append('<input type="button" class="deletebtn" value="×"/>'));
  }

  /**
   * 未完了のtask件数を表示
   */
  function setActiveTaskNumText() {
    var classLength = $('.list:not(.checked)').length;
    $("#count").text(classLength + " items left");
  }


  // taskリストのul
  var $taskListContainer = $("ul#mainlist");
  // task入力欄
  var $taskInput = $('#input-group input');



  /**
   * 新規登録
   */
  $taskInput.on('keypress', function(e){ //完璧
    if(e.which === 13){
      var inputStr = $('.form-control').val();
      $(".form-control").val("");
      addNewTask(inputStr);
    }
  });

  /**
   * 個別taskチェック・チェック解除
   */
  $taskListContainer.on('click',"li", function() {
    $(this).toggleClass('checked');
  });

  /**
   * taskの一括チェック・チェック解除
   */
  $("#allCerect").on('click', function() {
    var checkedNum = $('.list:not(.checked)').length;
    if (checkedNum === 0) {
      $('.list').removeClass('checked');
    } else {
      $('.list:not(.checked)').addClass('checked');
    }
  });

  /**
   * 個別task削除
   */
  $taskListContainer.on('click','.deletebtn', function(){　//deletebtnをクリックしたらliごと削除されるが、なぜか一番下のimgが表示される　
    $(this).parent("li").remove();
  });

  /**
   * チェック済みを一括削除
   */
  $(".btn").on('click','#clearComp', function(){
    $('.checked').remove();
  });

  /**
   * フィルタリング：全表示
   */
  $('.all').on('click', function() {
    $taskListContainer.find('li').show();
  });

  /**
   * フィルタリング：未完了のみ表示
   */
  $('.active').on('click', function() {
    $taskListContainer.find('li').show();
    $taskListContainer.find('li.checked').hide();
  });

  /**
   * フィルタリング：未完了のみ表示
   */
  $('.completed').on('click', function() {
    $taskListContainer.find('li').show();
    $taskListContainer.find('li:not(.checked)').hide();
  });


  /**
   * 未完了のtask件数を表示
   */
  $(document).on('click keypress', function() {
    setActiveTaskNumText();
  });
  $(window).on('load', function () {
    setActiveTaskNumText();
  });


})();
