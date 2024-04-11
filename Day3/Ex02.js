function showClock() {
    var currentDate = new Date();
    var divClock = document.getElementById("divClock");
    var getHour = currentDate.getHours();
    var now = getHour < 12 ? "오전 " : "오후 ";
    var hours = getHour >12 ? getHour-12 : getHour;
    var msg ="Current Time : " + now + hours +"시 " +
    currentDate.getMinutes() +"분 " + currentDate.getSeconds()+"초 ";
    divClock.innerHTML = msg;

    setTimeout(showClock,1000);
}


var imgArr = ["/css/apeach1.png","/css/apeach2.gif","/css/apeach3.png"
            ,"/css/apeach4.png","/css/apeach5.gif"]

function showImg() {
    var imgNum = Math.round(Math.random()*4);
    var objImg = document.getElementById("chgImg");
    objImg.src = imgArr[imgNum];
}

function openNotice(){
    window.open("Ex03.html","Notice",
    'width=500,height=500,left=700, top=200');
}