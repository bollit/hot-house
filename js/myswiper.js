var mySwiper = new Swiper('.swiper', {
    autoplay: {
        delay: 1500,//1秒切换一次
        // disableOnInteraction: true,
    },
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            switch (number) {
                case 1:
                    myNum = '1'
                    break;
                case 2:
                    myNum = '2'
                    break;
                case 3:
                    myNum = '3'
                    break;
                case 4:
                    myNum = '4'
                    break;
                case 5:
                    myNum = '5'
                    break;
                default: myNum = number
            }
            return myNum;
        },
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

//鼠标滑过pagination控制swiper切换
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
    mySwiper.pagination.bullets[i].onclick = function () {
        this.click();
    };
}

// 监听鼠标悬停事件
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}

// 监听鼠标离开事件
mySwiper.el.onmouseleave = function () {
    mySwiper.autoplay.start();
}