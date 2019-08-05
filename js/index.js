$(function() {
  $(window).on("resize", function() {
    // 1.1获取窗口的宽度
    let clientWidth = $(window).width();
    // console.log(clientWidth);

    // 1.2 设置临界值  是显示大图  还是小图？
    let showBigImg = clientWidth >= 800;

    //1.3  获取所有item
    let $allItems = $("#lk_carousel .item");
    // console.log($allItems);

    //1.4  遍历
    $allItems.each(function(index, item) {
      // 1.4.1取出图片的路径
      let src = showBigImg
        ? $(item).data("large-img")
        : $(item).data("small-img");
      let imgUrl = 'url("' + src + '")';

      //1.4.2 设置背景
      $(item).css({
        backgroundImage: imgUrl
      });

      //1.4.3 设置img标签
      if (!showBigImg) {
        let $img = "<img src='" + src + "'>";
        $(item)
          .empty()
          .append($img); //empty()把所有内容清空，再插入图片
      } else {
        $(item).empty();
      }
    });
  });

  $(window).trigger("resize"); //一进来就调用上面的resize方法

  $(".carousel").carousel({
    interval: 2000
  });

  // 2. 工具提示
  $('[data-toggle="tooltip"]').tooltip();

  // 3.动态处理宽度
  $(window).on("resize", function() {
    let $ul = $("#lk_product .nav");
    let $allLis = $("[role='presentation']", $ul);
    // console.log($allLis);

    // 3.1遍历
    let totalW = 0;
    $allLis.each(function(index, item) {
      totalW += $(item).width();
    });
    console.log(totalW);

    let parentW = $ul.parent().width();

    //3.2 设置宽度
    if (totalW > parentW) {
      $ul.css({
        width: totalW + "px"
      });
    } else {
      $ul.removeAttr("style");
    }
  });

  // 4.导航处理
  let allLis = $("#lk_nav li");

  $(allLis[2]).on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $("#lk_hotlessons").offset().top
      },
      1000
    );
  });

  $(allLis[5]).on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $("#lk_link").offset().top
      },
      1000
    );
  });

  $(window).trigger("resize");
});
