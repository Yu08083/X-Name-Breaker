## プロジェクト名: X(Twitter) 名前改行ツール
目的: Xの名前欄で「改行」を可能にする特殊文字（LSEP: U+2028）への一括置換。

webで使いたい方：https://yu08083.github.io/X-Name-Breaker/

## 📁 ファイル構成
・index.html - アプリの構造・手順ガイド<br>
・style.css - X風のモダンなUIデザイン<br>
・script.js - 改行置換ロジック・コピー機能<br>
## 🛠 使い方
1.3つのファイルを同じフォルダに保存して index.html をブラウザで開く。<br>
2.入力欄で「Enterキー」を使って改行し、名前を入力。<br>
3.「変換してコピー」を押し、Xのプロフィール編集で貼り付け。<br>
## ⚠️ 注意事項
・表示: スマホ版公式アプリでは改行されますが、PCブラウザ版では空白に見えます。<br>
・制限: Xの名前制限（50文字）に準拠。LSEP自体も1文字として計算されます。<br>
・変換ロジック: JavaScriptの .replace(/\r?\n/g, '\u2028') を使用。<br>

コアの部分(js)

```
const lsep = '\u2028';
const convertedText = input.replace(/\r?\n/g, lsep);
