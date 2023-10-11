function setRem() {
    var width = 375,
        clientWidth = document.documentElement.clientWidth || document.body.clientWidth,
        clientWidth = clientWidth < 375 ? 375 : clientWidth;
    html_ = document.querySelector('html');
    html_.style.fontSize = (clientWidth / width) * 10 + 'px';
}


window.addEventListener('load', setRem);
window.addEventListener('resize', setRem)
