/* 登录切换 */
function loginSwitch() {
    var switchover = this.document.getElementsByClassName('switchover')[0].children;
    for (var i = 0; i < switchover.length; i++) {
        switchover[i].setAttribute('index', i);
        switchover[i].addEventListener('click', function () {
            var index_ = this.getAttribute('index');
            for (var k = 0; k < switchover.length; k++) {
                switchover[k].className = '';
                switchover[index_].className = 'select';
            }
            var select = document.getElementsByTagName('article')[0].children;
            for (var s = 0; s < select.length; s++) {
                select[s].className = '';
                select[index_].className = 'select';
            }
            var loginBox = document.getElementsByClassName('loginBox')[0].children;
            for (var l = 0; l < loginBox.length; l++) {
                loginBox[l].className = '';
                loginBox[index_].className = 'select';
            }
        })
    }
}
window.addEventListener('load', loginSwitch)

/* 发送短信 */
function loginNote() {
    var note = document.getElementById('note');
    var num = 60;
    var timer;
    touch.on(note, 'tap', function () {
        this.disabled = true;
        clearInterval(timer);
        timer = setInterval(function () {
            num--;
            note.innerHTML = num + '秒';
            if (num == 55) {
                alert(parseInt(Math.random() * 10000))
            }
            if (num < 0) {
                note.innerHTML = '发送验证码';
                note.disabled = false;
            }
        }, 1000)
    })
}
window.addEventListener('load', loginNote)
