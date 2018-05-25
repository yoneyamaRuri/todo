(function(){

  function refreshList(taskList) {
    $('#mainlist').html('');
    for(var i=0; i<taskList.length; i++) {
      var liHtml = '<li class="list';
      if (taskList[i].completed) {
        liHtml += ' checked';
      }
      liHtml += '"><button class="checkbtn"><img src="images/checkicon_02.png" class="checkicon"></button><div class="task">';
      liHtml += taskList[i].text;
      liHtml += '</div><input type="button" class="deletebtn" value="×"></li>';
      $('#mainlist').append(liHtml);
    }
  }

  function getActiveList(taskList) {
    return taskList.filter(function (v) { return (!v.completed); });
  }
  function getCompletedList(taskList) {
    return taskList.filter(function (v) { return (v.completed); });
  }

  var taskList = [
    {
      completed: false,
      text: 'あああああ'
    },
    {
      completed: false,
      text: 'いいいいい'
    },
    {
      completed: true,
      text: 'ううううう'
    },
    {
      completed: false,
      text: 'えええええ'
    },
    {
      completed: false,
      text: 'おおおおお'
    }
  ];

  refreshList(taskList);



  /**
   * フィルタリング：全表示
   */
  $('.all').on('click', function() {
    refreshList(taskList);
  });

  /**
   * フィルタリング：未完了のみ表示
   */
  $('.active').on('click', function() {
    var showList = getActiveList(taskList);
    refreshList(showList);
  });

  /**
   * フィルタリング：完了のみ表示
   */
  $('.completed').on('click', function() {
    var showList = getCompletedList(taskList);
    refreshList(showList);
  });








    var taskEditModeFlg = false;

  /**
   * taskの追加をする
   */
  function addNewTask(inputStr) {
    $("#mainlist").append($('<li class="list"/>')
    .append('<button class="checkbtn"><img src="images/checkicon_02.png" class="checkicon"></button>')
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

  // liの変更欄
  var $changedTask = $('<input type="text" class="form-control more">');

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
  $taskListContainer.on('click', '.checkbtn', function() {
      //var buttonNomber = $('.checkbtn').index(this);
      $(this).parent().toggleClass('checked');
  });




  /**
   * 個別taskをクリックしたらinputに変わる
   */
 $('#mainlist').on('click', '.task', function() {

   if (taskEditModeFlg) {
     return　false;　//イベントのバブリングが止まる
   }
   taskEditModeFlg = true;

   var text = $(this).text();
   $(this).html($changedTask);
    $('.form-control.more').val(text); //ここで元々入ってるテキストを抽出する
    //console.log(text);
 });

  /**
  *　エンター押したら入力したtextに切り替わってinputを削除
  */
  $('#mainlist').on('keypress', '.form-control.more', function(e) {
     if (e.which === 13) {
       var newText = $(this).val();　 //新しく入力したinputの値を取る
       // $('.form-control.more').parent().html(newText);　//inputの親要素=divに↑で取得した値をテキストとして入れる
       $(this).parent().html(newText);　//inputの親要素=divに↑で取得した値をテキストとして入れる
       console.log(newText);
       $(this).remove();
       taskEditModeFlg = false;
    }
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

  // /**
  //  * フィルタリング：全表示
  //  */
  // $('.all').on('click', function() {
  //   $taskListContainer.children('li').show(); //"ul#mainlist"の、子要素のliを表示
  // });
  //
  // /**
  //  * フィルタリング：未完了のみ表示
  //  */
  // $('.active').on('click', function() {
  //   $taskListContainer.children('li').show();　
  //   $taskListContainer.children('li.checked').hide();　//ただし、checkedのclassがついたliは非表示
  // });
  //
  // /**
  //  * フィルタリング：完了のみ表示
  //  */
  // $('.completed').on('click', function() {
  //   $taskListContainer.children('li').show();
  //   $taskListContainer.children('li:not(.checked)').hide(); //checkedのclassがついたliは非表示
  // });

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
