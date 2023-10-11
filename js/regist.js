/* 发送短信 */
var verify;
function registNote() {
    var note = document.getElementById('note');
    var num = 60;
    var timer;
    touch.on(note, 'tap', function () {
        var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        var phone = document.getElementsByClassName('phone')[0].value;
        if (phone == '') {
            alert('请输入手机号');
        } else if (!reg.test(phone)) {
            alert('手机号输入有误。请核对后重新输入');
            phones = false;
        } else if (reg.test(phone)) {
            this.disabled = true;
            clearInterval(timer);
            timer = setInterval(function () {
                num--;
                note.innerHTML = num + '秒';
                if (num == 55) {
                    verify = parseInt(Math.random() * 10000);
                    alert(verify)
                }
                if (num < 0) {
                    note.innerHTML = '发送验证码';
                    note.disabled = false;
                }
            }, 1000)
        }

    })
}
/* 注册验证 */
window.addEventListener('load', registNote)
var registButton = document.getElementsByClassName('registBox')[0].firstElementChild;
touch.on(registButton, 'tap', function () {
    var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    var phone = document.getElementsByClassName('phone')[0].value;
    var phones = true;
    if (phone == '') {
        alert('手机号输入不能为空');
        phones = false;
    } else if (!reg.test(phone)) {
        alert('手机号输入有误。请核对后重新输入');
        phones = false;
    } else if (reg.test(phone)) {
        phones = true;
    }
    var note = document.getElementsByClassName('note')[0].value;
    var notes = true;
    if (note == '') {
        notes = false;
        alert('短信验证码不能为空');
    } else if (note != verify) {
        notes = false;
        alert('短信验证码错误');
    } else if (note == verify) {
        notes = true;
    }
})