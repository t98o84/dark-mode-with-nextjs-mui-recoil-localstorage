# Next.js / MUI / Recoil / Local Storage を使用したダークモードの実装サンプル

## はじめに
※ 現在（2022-07-22）のRecoilは、experimentalステートなのでAPIが大きく変わる可能性があります。

実際にプロジェクトで使用しているわけではなく、あくまでサンプルなので、参考程度にとどめていただけたらと思います。

## 使用方法
1. ソースコードを取得
```shell
git clone https://github.com/takuya829/dark-mode-with-nextjs-mui-recoil-localstorage

```

2. プロジェクトディレクトリに移動
```
cd dark-mode-with-nextjs-mui-recoil-localstorage
```

3. ローカル環境の構築
```
docker compose run --rm node yarn
docker compose up --build
```

4. アクセスし確認  
http://localhost:3000/
