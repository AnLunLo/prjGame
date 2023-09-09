//定義初始變數
let UserID = 1033; //TODO改成動態，正式版本改成用account判斷?
let UserName = "貓抓抓小助手"
let Ccoin = "999999";
let Ruby = "999999";
let milkCount = 99;
let canCount = 99;
let hightestScore = 0;


// 確保 DOM 加載完成後執行代碼
document.addEventListener("DOMContentLoaded", function () {

    
    // 獲取所有需要的元素
    const submitButton = document.getElementById("memberIdLogin");
    const GameMain = document.querySelector('.canvas-container');
    const userMemberidlogin = document.getElementById("userMemberidlogin");
    const registerForm = document.getElementById('registerForm');
    const registerButton = document.getElementById('registerButton');
    const testDBlogin = document.getElementById('testDBlogin');
    const testGameDB = document.getElementById('testGameDB');


    // 註冊角色名稱
    // registerButton.addEventListener('click', function () {
    //     const characterName = document.getElementById('characterName').value;
    //     const registerData = {
    //         CharacterName: characterName,
    //     };

    //     fetch('/Api/Api/TestUserLogin/玩家註冊數據', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(registerData),
    //     })
    //         .then(response => response.json())
    //         .then(registerResponse => {
    //             handleRegisterResponse(registerResponse);
    //         })
    //         .catch(error => {
    //             console.error('註冊時發生錯誤:', error);
    //         });
    // });

});
