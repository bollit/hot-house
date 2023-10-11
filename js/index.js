window.addEventListener('load', function () {
    this.document.getElementsByClassName('advertising')[0].firstElementChild.firstElementChild.addEventListener('touchstart', function () {
        var advertising = document.getElementsByClassName('advertising')[0];
        advertising.style.display = 'none';
    })
})