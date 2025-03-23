var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute('href', "/failure.ico");
    document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
    clearTimeout(titleTime);
  } else {
    document.querySelector("[rel='icon']").setAttribute('href', "/favicon-32x32-next.png");
    document.title = '(ฅ>ω<*ฅ) 噫又好了~';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
