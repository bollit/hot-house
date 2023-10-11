/* 发送短信 */
function submitNote() {
    var note = document.getElementById('note');
    var num = 60;
    var timer;
    note.onclick = function () {
        console.log('note');
    }
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
window.addEventListener('load', submitNote)