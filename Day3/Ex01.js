var array = [];
function getArr() {
    document.getElementById("getArr").innerHTML = 
    "현재 배열의 값 : " + array.join(", ");

}

function inputBtn() {
    var num = parseInt(document.getElementById("inputNum").value);
    if (isNaN(num)) {
        alert("⚠️ 숫자를 입력해 주세요!");
    } else {
        array.push(num);
    }
    getArr();

    document.getElementById("inputNum").value = "";
    document.getElementById("inputNum").focus();
}

function shiftBtn() {
    var num = array.shift();
    if (!isNaN(num)) {
        alert("숫자가 띠용~ 🙄 : "+num);
    } else {
        alert("⚠️ 배열이 비어있습니다!");
    }
    getArr();
}

function popBtn() {
    var num = array.pop();
    if (!isNaN(num)) {
        alert("숫자가 띠용~ 🙄 : "+num);
    } else {
        alert("⚠️ 배열이 비어있습니다!");
    }
    getArr();
}

function reverseBtn() {
    array.reverse();
    getArr();
}

function sortBtn() {
    array.sort(function(a,b) {
        return a-b;
    });
    getArr();
}

// function makeFriends() {
//     var myFriends = window.prompt("친구가 몇명인가요?", "");

//     for (var i = 0; i < parseInt(myFriends); i++) {
//         var textBox = document.createElement("input");
//         var newLine = document.createElement("br");

//         textBox.type = "text";

//         document.body.appendChild(textBox);
//         document.body.appendChild(newLine);
//     }

// }

// var arrayWindowVersion = new Array();
// var arrayOfficeVersion = new Array();

// arrayWindowVersion.push("윈도우 2000");
// arrayWindowVersion.push("윈도우 XP");
// arrayWindowVersion.push("윈도우 비스타");

// arrayOfficeVersion.push("오피스 XP");
// arrayOfficeVersion.push("오피스 2003");
// arrayOfficeVersion.push("오피스 2007");

// function setVersion() {
//     var objProduct = document.getElementById("product");
//     var objVersion = document.getElementById("version");

//     var selectedValue = objProduct.options[objProduct.selectedIndex].value;

//     while (objVersion.options.length > 1) {
//         objVersion.options[1] = null;
//     }

//     switch (selectedValue) {
//         case "Windows":
//             for (var i = 0; i < arrayWindowVersion.length; i++) {
//                 objVersion.options[objVersion.options.length] =
//                     new Option(arrayWindowVersion[i], arrayWindowVersion[i]);
//             }
//             break;
//         case "Office":
//             for (var i = 0; i < arrayOfficeVersion.length; i++) {
//                 objVersion.options[objVersion.options.length] =
//                     new Option(arrayOfficeVersion[i], arrayOfficeVersion[i]);
//             }
//             break;
//     }
// }
