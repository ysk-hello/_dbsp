function toNext(current) {
    current = current + 1;
    let ret = ('00' + current).slice(-2);
    console.log(ret);
    window.location.href = `problem${ret}.html`;
}
function answer(expected, actual) {
    // document.getElementById('answer-btn-area').style.display = 'none';
    
    //document.getElementById('answer-area').style.display = 'block';
    //document.getElementById('explain-area').style.display = 'block';

    document.getElementById(`item${expected}`).classList.add('border', 'border-3', 'border-primary', 'rounded');

    let ansLetter;
    switch (actual) {
        case 1:
            ansLetter = 'ア';
            break;
        case 2:
            ansLetter = 'イ';
            break;
        case 3:
            ansLetter = 'ウ';
            break;
        case 4:
            ansLetter = 'エ';
            break;
        default:
            break;
    }

    document.getElementById(`result-area`).classList.remove('d-none');

    document.getElementById(`item1-explain`).classList.remove('d-none');
    document.getElementById(`item2-explain`).classList.remove('d-none');
    document.getElementById(`item3-explain`).classList.remove('d-none');
    document.getElementById(`item4-explain`).classList.remove('d-none');

    //document.getElementById('your-answer').textContent = `解答: ${ansLetter}`;
    document.getElementById(`item${expected}`).firstElementChild.textContent = '正解';
    document.getElementById(`item${actual}`).children[1].textContent = '解答';

    let answerBtns = document.getElementsByClassName('answer-btn');
    answerBtns = Array.from(answerBtns);
    answerBtns.forEach(btn => {
        btn.disabled = true;
    });

    if (expected === actual) {
        //alert('正解');
        document.getElementById('result').classList.add('text-primary');
        document.getElementById('result').textContent = '〇正解';
    } else {
        //alert('不正解');
        document.getElementById('result').classList.add('text-danger');
        document.getElementById('result').textContent = '×不正解';
    }
}