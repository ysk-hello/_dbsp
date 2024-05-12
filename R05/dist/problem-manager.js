"use strict";
const data = [
    {
        ansNum: 4
    },
    {
        ansNum: 3
    },
    {
        ansNum: 4
    }
];
// 問題No
const filename = window.location.href.split('/').pop();
console.log(filename);
const problemNum = parseInt(filename.replace('.html', '').replace('problem', ''));
// ボタン1
const btn1 = document.getElementById('btn1');
btn1.onclick = () => answer(1);
// ボタン2
const btn2 = document.getElementById('btn2');
btn2.onclick = () => answer(2);
// ボタン3
const btn3 = document.getElementById('btn3');
btn3.onclick = () => answer(3);
// ボタン4
const btn4 = document.getElementById('btn4');
btn4.onclick = () => answer(4);
// 次へボタン
const nextBtn = document.getElementById('next-btn');
nextBtn.onclick = () => toNext();
// 関数
function toNext() {
    const current = problemNum + 1;
    const ret = ('00' + current).slice(-2);
    window.location.href = `problem${ret}.html`;
}
function answer(actual) {
    const expected = data[problemNum - 1].ansNum;
    // 正解を線で囲む
    document.getElementById(`item${expected}`).classList.add('border', 'border-3', 'border-primary', 'rounded');
    // 表示
    document.getElementById(`result-area`).classList.remove('d-none');
    document.getElementById(`item1-explain`).classList.remove('d-none');
    document.getElementById(`item2-explain`).classList.remove('d-none');
    document.getElementById(`item3-explain`).classList.remove('d-none');
    document.getElementById(`item4-explain`).classList.remove('d-none');
    document.getElementById(`item${expected}`).firstElementChild.textContent = '正解';
    document.getElementById(`item${actual}`).children[1].textContent = '解答';
    let answerBtns = document.getElementsByClassName('answer-btn');
    let answerBtns2 = Array.from(answerBtns);
    answerBtns2.forEach(btn => {
        // ボタン無効化
        btn.disabled = true;
    });
    if (expected === actual) {
        //alert('正解');
        document.getElementById('result').classList.add('text-primary');
        document.getElementById('result').textContent = '〇正解';
    }
    else {
        //alert('不正解');
        document.getElementById('result').classList.add('text-danger');
        document.getElementById('result').textContent = '×不正解';
    }
}
//# sourceMappingURL=problem-manager.js.map