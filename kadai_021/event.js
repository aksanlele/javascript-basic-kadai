//btnというidを持つHTML要素を取得、定数に代入
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得、変数に代入
const newText = document.getElementById('text');

//btnがクリックされたときに
btn.addEventListener('click', () => {

    //2秒(2000ミリ秒)の待ち時間を設定、非同期処理を実行
    setTimeout(() => {

        //テキストを変更する
        newText.textContent = 'ボタンをクリックしました';
        
    }, 2000);
    
});