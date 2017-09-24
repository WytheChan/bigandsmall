(function () {
    //现在时间
    setInterval(function () {
        var date = new Date();
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds();
        $('.year').html(year);
        $('.month').html(month);
        $('.day').html(day);
        $('.hour').html(hour);
        if (minute < 10) {
            $('.minute').html('0' + minute)
        } else {
            $('.minute').html(minute);
        }
        if (second < 10) {
            $('.second').html('0' + second)
        } else {
            $('.second').html(second);
        }
    }, 1000);


    //大、和、小按钮
    var bigBtn = $('.big-btn'),
        andBtn = $('.and-btn'),
        smallBtn = $('.small-btn');

    //归零按钮
    var zero = $('.zero');

    //倒计时
    var count = $('.count').find('span');
    var start = $('.start'),
        stop = $('.stop');

    //大、和、小的数量
    var bigNum = $('.big-num'),
        andNum = $('.and-num'),
        smallNum = $('.small-num');

    var td = $('article td');
    var maxNumber = 0; //格子总数
    var styleIndex = 0;　 //大、和、小索引
    var sureBtn = $('.sure-btn');
    var timer = null;


    //选中大和小按钮====>改变索引和背景色
    bigBtn.click(function () {
        styleIndex = 1;
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    smallBtn.click(function () {
        styleIndex = 2;
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    andBtn.click(function () {
        styleIndex = 3;
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });


    //点击确认按钮
    sureBtn.click(function () {

        //索引大于零，即大和小其中一个被选中的时候
        if (styleIndex > 0) {
            maxNumber++　　
            $(this).siblings().removeClass('active');

            //第一种情况，总数小于6，即格子第一列格子
            if (maxNumber <= 6) {
                if (styleIndex === 1) {
                    $('#r1_' + maxNumber).html(bigBtn.html());
                    $('#r1_' + maxNumber).addClass('big');
                    var big = $('.big');
                    bigNum.html(big.length - 1);
                }
                if (styleIndex === 2) {
                    $('#r1_' + maxNumber).html(smallBtn.html());
                    $('#r1_' + maxNumber).addClass('small');
                    var small = $('.small');
                    smallNum.html(small.length - 1);
                }
                if (styleIndex === 3) {
                    $('#r1_' + maxNumber).html(andBtn.html());
                    $('#r1_' + maxNumber).addClass('and');
                    var and = $('.and');
                    andNum.html(and.length - 1);
                }
            }

            //第二种情况，即第二列开始的列的格子
            if (maxNumber > 6) {
                var maxNumber2 = Math.floor(maxNumber / 6);　　

                //第一种情况，总数能整除6，即行数肯定是第6行
                if (maxNumber % 6 === 0) {
                    if (styleIndex === 1) {
                        $('#r' + maxNumber2 + '_6').html(bigBtn.html());
                        $('#r' + maxNumber2 + '_6').addClass('big');
                        var big = $('.big');
                        bigNum.html(big.length - 1);
                    }
                    if (styleIndex === 2) {
                        $('#r' + maxNumber2 + '_6').html(smallBtn.html());
                        $('#r' + maxNumber2 + '_6').addClass('small');
                        $(smallBtn).css('backgroundColor', '');
                        var small = $('.small');
                        smallNum.html(small.length - 1);
                    }
                    if (styleIndex === 3) {
                        $('#r' + maxNumber2 + '_6').html(andBtn.html());
                        $('#r' + maxNumber2 + '_6').addClass('and');
                        var and = $('.and');
                        andNum.html(and.length - 1);
                    }
                } else {

                    //第二种情况，总数不能整除6
                    var preNumber = maxNumber2 + 1; //获取第二列开始的列数
                    var addNumber = maxNumber - (maxNumber2 * 6); //获取行数
                    if (styleIndex === 1) {
                        $('#r' + preNumber + '_' + addNumber).html(bigBtn.html());
                        $('#r' + preNumber + '_' + addNumber).addClass('big');
                        var big = $('.big');
                        bigNum.html(big.length - 1);
                    }
                    if (styleIndex === 2) {
                        $('#r' + preNumber + '_' + addNumber).html(smallBtn.html());
                        $('#r' + preNumber + '_' + addNumber).addClass('small');
                        var small = $('.small');
                        smallNum.html(small.length - 1);
                    }
                    if (styleIndex === 3) {
                        $('#r' + preNumber + '_' + addNumber).html(andBtn.html());
                        $('#r' + preNumber + '_' + addNumber).addClass('and');
                        var and = $('.and');
                        andNum.html(and.length - 1);
                    }
                }
            }
        }
        bigBtn.attr("disabled", true).siblings().attr("disabled", true);
        clearInterval(timer);
        count.html(30);
        styleIndex = 0;
    });

    //获取遮罩层和修改按钮
    var mask = $('.mask'),
        bigBtn2 = $('.big-btn2'),
        andBtn2 = $('.and-btn2'),
        smallBtn2 = $('.small-btn2'),
        sureBtn2 = $('.sure-btn2');

    var tdId;

    td.each(function (index, item) {
        //归零操作 
        zero.click(function () {
            $(item).removeClass('big');
            $(item).removeClass('and');
            $(item).removeClass('small');
            item.innerHTML = '';
            bigNum.html(0);
            andNum.html(0);
            smallNum.html(0);
            maxNumber = 0;
            styleIndex = 0;
            clearInterval(timer);
            count.html(30);
            bigBtn.removeClass('active').siblings().removeClass('active');
        });

        //双击出现修改窗口，传出当前格子ID

        $(item).dblclick(function () {
            if ($(item).html() !== '') {
                mask.slideDown(300);
                tdId = $(item).attr('id');
            }

        });
        return tdId;
    });

    //点击按钮修改当前格子内容
    bigBtn2.click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        if (!$('#' + tdId).hasClass('big')) {
            bigNum.html(Math.floor(bigNum.html()) + 1);
        }
        $('#' + tdId).addClass('big');
        $('#' + tdId).html(bigBtn2.html());

        if ($('#' + tdId).hasClass('and')) {
            $('#' + tdId).removeClass('and');
            if (andNum.html() > 0) {
                andNum.html(Math.floor(andNum.html()) - 1);
            }
        };
        if ($('#' + tdId).hasClass('small')) {
            $('#' + tdId).removeClass('small');
            if (smallNum.html() > 0) {
                smallNum.html(Math.floor(smallNum.html()) - 1);
            }
        };
    });
    andBtn2.click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        if (!$('#' + tdId).hasClass('and')) {
            andNum.html(Math.floor(andNum.html()) + 1);
        }
        $('#' + tdId).addClass('and');
        $('#' + tdId).html(andBtn2.html());

        if ($('#' + tdId).hasClass('big')) {
            $('#' + tdId).removeClass('big');
            if (bigNum.html() > 0) {
                bigNum.html(Math.floor(bigNum.html()) - 1);
            }
        };
        if ($('#' + tdId).hasClass('small')) {
            $('#' + tdId).removeClass('small');
            if (smallNum.html() > 0) {
                smallNum.html(Math.floor(smallNum.html()) - 1);
            }
        };
    });
    smallBtn2.click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        if (!$('#' + tdId).hasClass('small')) {
            smallNum.html(Math.floor(smallNum.html()) + 1);
        }
        $('#' + tdId).addClass('small');
        $('#' + tdId).html(smallBtn2.html());

        if ($('#' + tdId).hasClass('big')) {
            $('#' + tdId).removeClass('big');
            if (bigNum.html() > 0) {
                bigNum.html(Math.floor(bigNum.html()) - 1);
            }
        };
        if ($('#' + tdId).hasClass('and')) {
            $('#' + tdId).removeClass('and');
            if (andNum.html() > 0) {
                andNum.html(Math.floor(andNum.html()) - 1);
            }
        };
    });

    sureBtn2.click(function () {
        $(this).siblings().removeClass('active');
        mask.slideUp(300);
    })



    //点击开始按钮后可以选择大和小，开启倒计时
    start.click(function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var time = count.html();
            if (time > 0) {
                time--
                count.html(time)
            };
            if (count.html() == 0) {
                bigBtn.attr("disabled", true).siblings().attr("disabled", true);
            }
            if (count.html() == 10) {
                document.getElementById('time-bgm').play();
            }
        }, 1000);

        count.html(30)
        document.getElementById('start-bgm').play();
        bigBtn.removeAttr("disabled").siblings().removeAttr('disabled');
    });

    //停止计时
    stop.click(function () {
        clearInterval(timer);
        document.getElementById('stop-bgm').play();
        bigBtn.attr("disabled", true).removeClass('active').siblings().attr("disabled", true).removeClass('active');
    })

}());