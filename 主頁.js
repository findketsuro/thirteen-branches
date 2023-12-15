let block = 1;
function introduction() {//當按下遊戲規則(顯示遊戲規則與其按鈕)
    document.querySelector("#introduction").style.display = "initial";
    document.querySelector("#block1").style.display = "initial";
    document.querySelector("#block2").style.display = "initial";
    document.querySelector("#X").style.display = "initial";
    document.getElementById("block1").addEventListener("click", function () {
        if (block == 2) {
            document.getElementById("block1").src = "imgs/說明方塊1.png"
            document.getElementById("block2").src = "imgs/說明方塊4.png"
            document.getElementById("introduction").src = "imgs/說明1.png"
            block = 1;
        }
    })
    document.getElementById("block2").addEventListener("click", function () {
        if (block == 1) {
            document.getElementById("block1").src = "imgs/說明方塊2.png"
            document.getElementById("block2").src = "imgs/說明方塊3.png"
            document.getElementById("introduction").src = "imgs/說明2.png"
            block = 2;
        }
    })
    document.getElementById("X").addEventListener("click", function () {
        document.querySelector("#introduction").style.display = "none";
        document.querySelector("#block1").style.display = "none";
        document.querySelector("#block2").style.display = "none";
        document.querySelector("#X").style.display = "none";
    })
}
function play() {//當按下開始遊戲(出現選擇按鈕，依選擇跳出新視窗，並關閉原視窗)
    document.querySelector("#oneplayer").style.display = "initial";
    document.querySelector("#players").style.display = "initial";
    document.getElementById("oneplayer").addEventListener("click", function () {
        window.open("13支-單人遊戲-01157108+01157103.html");
        window.opener = null;
        window.close();
    })
    document.getElementById("players").addEventListener("click", function () {
        window.open("13支-連線遊戲-01157108+01157103.html");
        window.opener = null;
        window.close();
    })
}
function set() {//當按下齒輪按鈕(出現控制選項)
    alert("SET")
    //確定:查看成就、查看牌譜、登入帳號
    //不確定:音樂大小、音效大小
}