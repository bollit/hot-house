/* (function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 320 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 300);
    }, false);
})(); */

function setRem() {
    var ui_w = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    clientWidth = clientWidth < 375 ? 375 : clientWidth;
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
window.onresize = setRem;
window.onload = setRem;
