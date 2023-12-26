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

function set() {
    Swal.fire({
        title: 'Settings',
        html: `
            <a href="javascript:void(0);" onclick="showMessage('玩法')">玩法</a><br>
            <a href="javascript:void(0);" onclick="showMessage('普通牌型說明')">普通牌型說明</a><br>
            <a href="javascript:void(0);" onclick="showMessage('特殊加分')">特殊加分</a>
        `,
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: true
    });
}

function showMessage(type) {
    var message = '';
    var style = 'style="text-align: left; font-family: Arial, sans-serif;"';

    if (type === '玩法') {
        message = `<div ${style}><ol>
                        <li>把牌分成四份，每份十三支。</li>
                        <li>各人把十三支牌配成三墩，稱為刁牌（出牌），稱首墩（第一墩）、中墩（第二墩）、尾墩（第三墩）。第一墩三張，第二、三墩各五張。</li>
                        <li>刁牌時，第一墩必須小於第二墩，第二墩必須小於或等於第三墩，否則為倒水。</li>
                        <li>比牌：各家先比牌型，再比數字（點數），不比花色。三墩分別比牌。牌型見下。</li>
                        <li>算分：每墩分開計分，4人分別比牌，贏墩加分，輸墩扣分，平手0分。</li>
                    </ol>
                    <p>☆牌型為：同花順>鐵支>葫蘆>同花>順子>三條>兩對>對子>烏龍。</p>
                    <p>☆點數大小:A>K>Q>J>10>9>8>7>6>5>4>3>2</p></div>`;
    } else if (type === '普通牌型說明') {
        message = `<div ${style}><ul>
                        <li>同花順：5張相同花色且數字連續的牌</li>
                        <li>鐵支（四梅）：4張相同點數的牌，配上1張雜牌</li>
                        <li>葫蘆：3張相同點數的牌配上一對</li>
                        <li>同花：5張花色相同的牌</li>
                        <li>順子：5張數字連續的牌</li>
                        <li>三條：3張相同點數牌配上兩張雜牌</li>
                        <li>兩對：2組對子，配上1張雜牌</li>
                        <li>對子：2張同點數的牌，俗稱「輪車」</li>
                    </ul></div>`;
    } else if (type === '特殊加分') {
        message = `<p style="text-align: center;">「輸給此玩家者」支付一定分數</p>
                    <div ${style}>
                    <ul>
                        <li>衝三（第一墩三條）：其他人需額外支付1分</li>
                        <li>中墩葫蘆：其他人需額外支付1分</li>
                        <li>中墩鐵支：其他人需額外支付3分</li>
                        <li>中墩同花順：其他人需額外支付4分</li>
                        <li>尾墩鐵支：其他人需額外支付2分</li>
                        <li>尾墩同花順：其他人需額外支付3分</li>
                        <li>打槍：三墩皆勝於另1玩家可打槍此玩家，被打槍的玩家須支付基本三分與特殊加分。</li>
                        <li>全壘打：一玩家打槍另外三名玩家，則此玩家得分再乘以二，負分由三名玩家平均分攤。</li>
                    </ul></div>`;
    }

    Swal.fire({
        title: type,
        html: message,
        showCloseButton: true,
        confirmButtonText: '確定'
    }).then((result) => {
        if (result.isConfirmed) {
            set(); // Return to the main menu
        }
    });
}



