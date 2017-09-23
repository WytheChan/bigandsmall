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
    }, 1000)

    var log = console.log.bind(console);

    //大、小按钮
    var bigBtn = $('.big-btn'),
        andBtn = $('.and-btn'),
        smallBtn = $('.small-btn');

    //归零按钮
    var zero = $('.zero')

    //大、小的数量
    var bigNum = $('.big-num'),
        andNum = $('.and-num'),
        smallNum = $('.small-num');

    var num = 0,
        num2 = 0;

    //归零操作 
    var td = $('article td');
    td.each(function (index, item) {
        zero.click(function () {
            $(item).removeClass('big');
            $(item).removeClass('small');
            num = 0;
            item.innerHTML = '';
            bigNum.html(0);
            smallNum.html(0);
        })
    })

    // function add(row){
    //     // var num = 0;
    //     bigBtn.click(function(){
    //         if($(row[num]).html()===''){
    //             $(row[num]).html($(this).html());
    //             $(row[num]).addClass('big');
    //             var big = $('.big');
    //             bigNum.html(big.length - 1);
    //         }
    //            if(num<60){
    //             num+=12
    //         }else{
    //             num=0;
    //             num++
    //         }
    //     })
    //     smallBtn.click(function(){
    //         if($(row[num]).html()===''){
    //             $(row[num]).html($(this).html());
    //             $(row[num]).addClass('small')
    //             var small = $('.small');
    //             smallNum.html(small.length - 1);
    //         }
    //         if(num<60){
    //             num+=12
    //         }else{
    //             num=0;
    //             num++;
    //         }
    //     })
    // }
    // add(td)



    var maxNumber = 0;
    var styleIndex = 0;
    var sureBtn = $('.sure-btn');

    bigBtn.click(function () {
        styleIndex = 1
        $(this).css('backgroundColor', 'orange');
    })
    smallBtn.click(function () {
        styleIndex = 2
        $(this).css('backgroundColor', 'orange');
    })
    andBtn.click(function () {
        styleIndex = 3
        $(this).css('backgroundColor', 'orange');
    })

    sureBtn.click(function () {

        if (styleIndex > 0) {


            maxNumber++
            if (maxNumber <= 6) {
                if (styleIndex === 1) {
                    $('#r1_' + maxNumber).html(bigBtn.html());
                    $('#r1_' + maxNumber).addClass('big');
                    $(bigBtn).css('backgroundColor', '');
                    var big = $('.big');
                    bigNum.html(big.length - 1);
                }
                if (styleIndex === 2) {
                    $('#r1_' + maxNumber).html(smallBtn.html());
                    $('#r1_' + maxNumber).addClass('small');
                    $(smallBtn).css('backgroundColor', '');
                    var small = $('.small');
                    smallNum.html(small.length - 1);
                }
                if (styleIndex === 3) {
                    $('#r1_' + maxNumber).html(andBtn.html());
                    $('#r1_' + maxNumber).addClass('and');
                    $(andBtn).css('backgroundColor', '');
                    var and = $('.and');
                    andNum.html(and.length - 1);
                }
            }

            if (maxNumber > 6) {
                var maxNumber2 = maxNumber / 6;
                if (maxNumber % 6 === 0) {
                    $('#r' + maxNumber2 + '_6').html(bigBtn.html());
                } else {
                    var preNumber = (Math.floor(maxNumber2)) + 1;
                    var addNumber = maxNumber - ((Math.floor(maxNumber2))*6);
                    
                    $('#r' + preNumber + '_' + addNumber).html(bigBtn.html());

                }
            }
        }
    })

    var d = 9 / 6;


}());