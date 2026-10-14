// 面接練習ページの設定
// 合言葉の変更方法：index.html を「index.html#setup」で開き、新しい合言葉を入力して表示された passHash を下に貼り付けます。
window.APP_CONFIG = {
  title: '大津町 二次面接練習',
  // 現在の合言葉は「otsu2026」です。必ず変更してからご利用ください。
  passHash: '1ev0dg8okfx',
  defaultSeconds: 60,

  // ---- AI採点・成績の記録（Google Apps Script）。使わない場合は空のままにします ----
  // endpoint : Apps Script をウェブアプリとして公開したときに発行される URL
  // appToken : Apps Script のスクリプトプロパティ APP_TOKEN と同じ文字列
  endpoint: '',
  appToken: 'kg-yt8SSjLCmpt2lrqqZqau9EUa'
};
