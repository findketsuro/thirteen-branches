let block = 1;
function introduction() {//����U�C���W�h(��ܹC���W�h�P����s)
    document.querySelector("#introduction").style.display = "initial";
    document.querySelector("#block1").style.display = "initial";
    document.querySelector("#block2").style.display = "initial";
    document.querySelector("#X").style.display = "initial";
    document.getElementById("block1").addEventListener("click", function () {
        if (block == 2) {
            document.getElementById("block1").src = "imgs/�������1.png"
            document.getElementById("block2").src = "imgs/�������4.png"
            document.getElementById("introduction").src = "imgs/����1.png"
            block = 1;
        }
    })
    document.getElementById("block2").addEventListener("click", function () {
        if (block == 1) {
            document.getElementById("block1").src = "imgs/�������2.png"
            document.getElementById("block2").src = "imgs/�������3.png"
            document.getElementById("introduction").src = "imgs/����2.png"
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
function play() {//����U�}�l�C��(�X�{��ܫ��s�A�̿�ܸ��X�s�����A�����������)
    document.querySelector("#oneplayer").style.display = "initial";
    document.querySelector("#players").style.display = "initial";
    document.getElementById("oneplayer").addEventListener("click", function () {
        window.open("13��-��H�C��-01157108+01157103.html");
        window.opener = null;
        window.close();
    })
    document.getElementById("players").addEventListener("click", function () {
        window.open("13��-�s�u�C��-01157108+01157103.html");
        window.opener = null;
        window.close();
    })
}
function set() {//����U�������s(�X�{����ﶵ)
    alert("SET")
    //�T�w:�d�ݦ��N�B�d�ݵP�СB�n�J�b��
    //���T�w:���֤j�p�B���Ĥj�p
}