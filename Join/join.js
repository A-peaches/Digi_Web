function checkId() {
    var id = document.getElementById("id").value;
    if (id.length < 4 || id.length > 12) {
        alert("ID는 4~12자 사이로 입력해주세요!");
        return false;
    } else {

        for (var i = 0; i < id.length; i++) {
            var charId = id.charCodeAt(i);
            if (!((charId > 47 && charId < 59) ||
                (charId > 64 && charId < 91) ||
                (charId > 96 && charId < 123))) {
                alert("ID는 영문 대소문자와 숫자로만 입력해주세요!");
                return false;
            }
        }
    }

    return true;
}

function checkPwEquals() {
    var pw1 = document.getElementById("pw").value;
    var pw2 = document.getElementById("pw2").value;

    if (pw1 != pw2) {
        alert("비밀번호 확인이 올바르지 않습니다!");
        return false;

    }
    return true;
}


function checkPw() {
    var pw = document.getElementById("pw").value;
    if (pw.length < 4 || pw.length > 12) {
        alert("PW는 4~12자 사이로 입력해주세요!");
    } else {
        for (var i = 0; i < pw.length; i++) {
            var charPw = pw.charCodeAt(i);
            if (!((charPw > 47 && charPw < 59) ||
                (charPw > 64 && charPw < 91) ||
                (charPw > 96 && charPw < 123))) {
                alert("pw는 영문 대소문자와 숫자로만 입력해주세요!");
                return false;
            }
        }
    }

    return true;
}

function checkEmail() {
    var email = document.getElementById("email").value;


    var idx = email.indexOf("@");
    if (idx == -1 || idx == 0 || idx == email.length - 1) {
        alert("email은 id@domain.com 형식으로 입력해주세요!");
        return false;
    }

    return true;

}

function checkIdNo() {
    let arr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    let tot = 0;
    let jumin1 = document.getElementById("idNo").value;
    if(jumin1.length != 13){
        alert("주민번호가 유효하지 않습니다!");
        return false;
    }else{
    let check = jumin1.charAt(12);
    for (i = 0; i < jumin1.length - 1; i++) {
        tot += arr[i] * jumin1.charAt(i);
    }
    tot %= 11;
    tot = 11 - tot;
    if (tot == 10) {
        tot = 0;
    }
    if (tot == 11) {
        tot = 1;
    }
    if (tot != check) {
        alert("올바른 주민번호가 아닙니다!");
        return false;
    }
    }
    return true;
}

function checkBirth(){
    var birth = document.getElementById("idNo").value.slice(0,6);
    var year = parseInt(birth.slice(0,2));
    var month = parseInt(birth.slice(2,4));
    var day =  parseInt(birth.slice(4,6));

    if(year < 30) {
        document.getElementById("year").value = 2000 + year;
        document.getElementById("month").value = month;
        document.getElementById("day").value = day;
    } else {
        document.getElementById("year").value = 1900 + year;
        document.getElementById("month").value = month;
        document.getElementById("day").value = day;
    }

}

function checkHabit(){
    var habit = document.getElementsByName("habit");
    var answer = 0;
    for (var i = 0; i<habit.length; i++){
        if(habit[i].checked) {
            answer++;
        }
    }

    if(answer == 0) {
        alert("하나 이상의 관심분야에 체크해주세요!");
        return false;
    }

    return true;
}

function checkinfo() {
    var myinfo = document.getElementById('myInfo').value;

    console.log(myinfo);
    if(myinfo.length < 30) {
        alert("자기소개는 30자 이상 작성해주세요!");
        return false;
    }

    return true;
}



function onClick() {
    if(!checkId()) return;
    if(!checkPw()) return;
    if(!checkPwEquals()) return;
    if(!checkEmail()) return;
    if(!checkIdNo()) return;
    checkBirth();
    if(!checkHabit()) return;
    if(!checkinfo()) return;

    window.open('mailto:example@kakao.com?subject=join&body=join');
}
