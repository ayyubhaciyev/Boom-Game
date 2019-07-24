let A = [];
let B = [];
let C = [];
let n = 6;
//let BoomCount = Math.floor((n * n) * 0.2);
img = "";
let point = 0;
let timer;

Start();

function Matrix() {
    for (let i = 0; i < n * n; i++) {
        A[i] = i;
    }
}

function Rnd() {
    for (var i = 0; i < n; i++) {
        B[i] = [];
        C[i] = [];
        for (let j = 0; j < n; j++) {
            x = Math.floor(Math.random() * (A.length - 1));
            B[i][j] = A[x];
            A.splice(x, 1);
        }
    }

}


function Start() {
    point = 0;
    clearInterval(timer);
    Matrix();
    Rnd();
    Table();
}

function Check(ImgType, i, j) {
    if (ImgType === "img/boom.png") {
        alert("Game Over!");
        timer = setInterval(Start, 1500);
    } else {
        point += n;
    }

    C[i][j] = ImgType;
    Table();
}

function Table() {
    let tbl = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            img_type = (B[i][j]) % n == 0 ? "img/boom.png" : "img/ok.png";
            img = C[i][j] === undefined ? "img/square-icon.png" : C[i][j];
            tbl += `<div class="box"><img onclick="Check('${img_type}',${i},${j})" id="${i}_${j}" src="${img}" /></div>`;
        }
    }
    document.getElementsByClassName("game-board")[0].innerHTML = tbl;
    document.getElementsByClassName("point")[0].innerHTML = point + "<br /> Point";

}