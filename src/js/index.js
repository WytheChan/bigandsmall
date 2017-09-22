(function(){
    setInterval(function(){
        var date=new Date();
        var year=date.getFullYear(),
            month=date.getMonth()+1,
            day=date.getDate(),
            hour=date.getHours(),
            minute=date.getMinutes(),
            second=date.getSeconds();
            $('.year').html(year);
            $('.month').html(month);
            $('.day').html(day);
            $('.hour').html(hour);
            $('.minute').html(minute);
            $('.second').html(second);
    },1000)




}());