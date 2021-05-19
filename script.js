$(function () {
  $(".sun").click(function (e) {
    e.stopPropagation();
    $("html").toggleClass("container-night");
    $(".sky-night").toggleClass("sky-night-fade");
    $("p, h1").toggleClass("text-color");
    $(".ocean-night").toggleClass("ocean-night-fade");
    $(".moon").toggleClass("moon-fade");
    $(".ocean").toggleClass("animation-stop");
    $(".bird").toggleClass("birds-fly");
    $(".boat").toggleClass("boat-sail");
    $(".mountain-top, .mountain-top >*").toggleClass("mountain-top-night");
    $(".mountain-middle, .mountain-middle >*").toggleClass(
      "mountain-middle-night"
    );
    $(".mountain-back, .mountain-back >*").toggleClass("mountain-back-night");
    $(".cloud").delay(2500).fadeToggle(2500);
    $(".stars").toggleClass("stars-fade");
    $(".shooting-star").toggleClass("shooting");
    let wenhou = $("#i");
    let tt = wenhou.html();
    if (tt === "早安") {
      wenhou.html("晚安");
    } else if (tt === "晚安") {
      wenhou.html("早安");
    }
    let gaobai = $("#YAMF");
    let aa = gaobai.html();
    if (aa === "特殊的星期四快乐。") {
      gaobai.html("我喜欢你。");
    } else if (aa === "我喜欢你。") {
      gaobai.html("特殊的星期四快乐。");
    }
    let zhufu = $("#subtitle");
    let bb = zhufu.html();
    if (bb === "记住每一个，和你度过的早安还有晚安") {
      zhufu.html("希望你每天都能开开心心");
    } else if (bb === "希望你每天都能开开心心") {
      zhufu.html("记住每一个，和你度过的早安还有晚安");
    }
    var angle = $(".sun-container").data("angle") + 360 || 360;
    $(".sun-container").css({
      transform: "rotate(" + angle + "deg)",
    });
    $(".sun-container").data("angle", angle);
  });
});
