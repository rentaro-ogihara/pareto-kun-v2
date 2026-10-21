# パレート君

LOGILESS の出荷実績CSV（全荷主分）を読み込み、荷主・卸先・商品ごとの出荷個数、割合、推移を分析するツールです。
CSVはブラウザの中だけで処理し、外部には送信しません。

## GitHub Pages への公開

1. GitHub で新しいリポジトリ `pareto-kun` を作成する
2. このフォルダの中のファイル（index.html、chart.umd.min.js、manifest.webmanifest、sw.js、icon.svg、icon-192.png、icon-512.png、maskable-512.png）を、すべてリポジトリの一番上（直下）にアップロードする
3. リポジトリの Settings → Pages で、Branch を `main`、フォルダを `/ (root)` にして保存する
4. 数分後、`https://ユーザー名.github.io/pareto-kun/` で開けるようになる
5. Chrome または Edge で開き、アドレスバー右側のインストールボタンからアプリとしてインストールする

## 毎日の使い方

1. ロジレスから前日分の出荷実績CSV（全荷主分）をダウンロードし、共有ドライブのフォルダにそのまま保存する
2. パレート君を開き、「フォルダから最新を取り込む」を押す（初回は「フォルダを選んで取り込む」で、パソコン版Googleドライブ上の同じフォルダを選ぶ）
3. 右上で荷主を選ぶ

## 更新するとき

index.html などを修正したら、sw.js の `VERSION` の数字を上げてからアップロードしてください。
