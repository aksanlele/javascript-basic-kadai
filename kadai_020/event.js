//btnというidを持つHTML要素を取得、定数に代入
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得、変数に代入
const newText = document.getElementById('text');

//btnがクリックされたときに
btn.addEventListener('click', () => {
    //テキストを変更する
    newText.textContent = 'ボタンをクリックしました';
});