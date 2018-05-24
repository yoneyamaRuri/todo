(function(){

  /**
   * taskの追加をする
   */
  function addNewTask(inputStr) {
    $("#mainlist").append($('<li class="list"/>')
    .append('<button class="checkbtn"><img src="images/checkicon_02.png" class="checkicon">')
    .append('<div class="task">' + inputStr + '</div>')
    .append('<input type="button" class="deletebtn" value="×"/>'));
  }

  /**
   * 未完了のtask件数を表示
   */
  function setActiveTaskNumText() {
    var classLength = $('.list:not(.checked)').length;
    $(".count").text(classLength + " items left");
  }

  // taskリストのul
  var $taskListContainer = $("ul#mainlist");
  // task入力欄
  var $taskInput = $('#input-group input');

  /**
   * 新規登録
   */
  $taskInput.on('keypress', function(e) {
    if(e.which === 13) {
      var inputStr = $('.form-control').val();
      $(".form-control").val("");
      addNewTask(inputStr);
    }
  });

  /**
   * 個別taskチェック・チェック解除
   */
  $taskListContainer.on('click','.checkbtn', function() {
      var buttonNomber = $('.checkbtn').index(this);
      $('.list').eq(buttonNomber).toggleClass('checked');
  });

  /**
   * taskの一括チェック・チェック解除
   */
  $("#allCerect").on('click', function() {
    var checkedNum = $('.list:not(.checked)').length;
    if (checkedNum === 0) {
      $('.list').removeClass('checked'); //全てにcheckedがついているときは、addClassしてcheckedを外す
    } else {
      $('.list:not(.checked)').addClass('checked');　//それ以外はcheckedを付ける　※toggleClassをすると、チェックボタンの表示が揃わないので使わない
    }
  });

  /**
   * 個別task削除
   */
  $taskListContainer.on('click','.deletebtn', function() {
    $(this).parent(".list").remove();
  });

  /**
   * チェック済みを一括削除
   */
  $("#subcontent").on('click','.clearComp', function() {
    $('.checked').remove();
  });

  /**
   * フィルタリング：全表示
   */
  $('.all').on('click', function() {
    $taskListContainer.children('li').show(); //"ul#mainlist"の、子要素のliを表示
  });

  /**
   * フィルタリング：未完了のみ表示
   */
  $('.active').on('click', function() {
    $taskListContainer.children('li').show();　
    $taskListContainer.children('li.checked').hide();　//ただし、checkedのclassがついたliは非表示
  });

  /**
   * フィルタリング：完了のみ表示
   */
  $('.completed').on('click', function() {
    $taskListContainer.children('li').show();
    $taskListContainer.children('li:not(.checked)').hide(); //checkedのclassがついたliは非表示
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
