/* 导航栏隐藏菜单点击 */
var list = document.querySelector('.list').children;
for (var i = 0; i < list.length; i++) {
    list[i].setAttribute('index', i);
    list[i].onclick = function () {
        document.querySelector('nav').style.position = 'fixed';
        document.querySelector('nav').style.top = '0';
        var index_ = this.getAttribute('index');
        for (var k = 0; k < list.length; k++) {
            list[k].className = '';
            list[index_].className = 'active';
        }
        var someList = document.getElementsByClassName('someList')[0].children;
        for (var j = 0; j < someList.length; j++) {
            someList[j].className = '';
            someList[index_].className = 'active';
        }

        var mask = document.getElementsByClassName('mask')[0];
        mask.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + 'px';
        mask.style.height = (document.documentElement.clientHeight || document.body.clientHeight) + 'px';
        mask.style.position = 'fixed';
        mask.style.top = '0';
        mask.style.display = 'block';
        mask.onclick = function () {
            this.style.display = 'none';
            document.querySelector('nav').style.position = '';
            document.querySelector('nav').style.top = '';
            for (var k = 0; k < list.length; k++) {
                list[k].className = '';
            }
            for (var j = 0; j < someList.length; j++) {
                someList[j].className = '';
            }

        }
    }
}