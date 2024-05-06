let problemNum = -1;
const data = [{ptitle: `問1`, pdescription: 'CAP定理に関する記述として、適切なものはどれか。', 
    item1text: 'システムの可用性は基本的に高く、サービスは利用可能であるが、整合性については厳密ではない。しかし、最終的には整合性が取れた状態になる。',
    item1desc: 'アの解説です。',
    item2text: 'トランザクション処理は、データの整合性を保証するので、実行結果が矛盾した状態になることはない。',
    item2desc: 'イの解説です。',
    item3text: '複数のトランザクションを並列に処理したときの実行結果と、直列で逐次処理したときの実行結果は一致する。',
    item3desc: 'ウの解説です。',
    item4text: '分散システムにおいて、整合性、可用性、分断耐性の三つを同時に満たすことはできない。',
    item4desc: 'エの解説です。',
    ansNum: 4},
    {ptitle: `問2`, pdescription: '大文字のアルファベットで始まる膨大な数のデータを、規則に従って複数のノードに割り当てる。このようにあらかじめ定めた規則に従って、複数のノードにデータを分散して割り当てる方法はどれか。', 
    item1text: '2相コミットプロトコル',
    item1desc: 'アの解説です。',
    item2text: 'コンシステントハッシング',
    item2desc: 'イの解説です。',
    item3text: 'シャーディング',
    item3desc: 'ウの解説です。',
    item4text: 'レプリケーション',
    item4desc: 'エの解説です。',
    ansNum: 3},
    {ptitle: `問3`, pdescription: '概念データモデルの説明として、最も適切なものはどれか。', 
    item1text: '階層モデル、ネットワークモデル、関係モデルがある。',
    item1desc: 'アの解説です。',
    item2text: '業務プロセスを抽象化して表現したものである。',
    item2desc: 'イの解説です。',
    item3text: '集中型DBMSを導入するか、分散型DBMSを導入するかによって内容が変わる。',
    item3desc: 'ウの解説です。',
    item4text: '対象世界の情報構造を抽象化して表現したものである。',
    item4desc: 'エの解説です。',
    ansNum: 4}];

function init(num) {
    problemNum = num;
    const source = document.getElementById("problem-template").innerHTML;
    const template = Handlebars.compile(source);

    //console.log(data[num-1]);

    const html = template(data[num-1]);
    document.getElementById('area').innerHTML = html;
}
function toNext() {
    const current = problemNum + 1;
    const ret = ('00' + current).slice(-2);
    window.location.href = `problem${ret}.html`;
}
function answer(actual) {
    const expected = data[problemNum-1].ansNum;
    
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
    answerBtns = Array.from(answerBtns);
    answerBtns.forEach(btn => {
        // ボタン無効化
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