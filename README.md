# OKIYA式 テレポートギミック Ver.2 ドキュメント

Docusaurusで作成した公式ドキュメントサイトです。Node.js 20以上を使用します。

## ローカルで確認する

```bash
npm install
npm run start
```

ブラウザで `http://localhost:3000/okiya-teleport-docs/` を開きます。

## 公開前に変更する場所

`docusaurus.config.js` の `YOUR_GITHUB_USERNAME` を、GitHubのユーザー名またはOrganization名へ変更してください。GitHub Actionsではリポジトリ所有者を自動取得するため、そのままでも公開ビルドは動作します。

## GitHub Pagesへ公開する

1. このフォルダーの中身を `okiya-teleport-docs` リポジトリのルートへ置く
2. GitHubの **Settings → Pages → Build and deployment** を開く
3. **Source** で **GitHub Actions** を選ぶ
4. `main` ブランチへpushする
5. **Actions** タブの `Deploy to GitHub Pages` が完了するまで待つ

公開URLは `https://<GitHubユーザー名>.github.io/okiya-teleport-docs/` です。

## Unityスクリーンショットを差し替える

各 `.mdx` ページにある `screenshot-placeholder` のブロックが画像の差し替え位置です。

1. 画像を `static/img/screenshots/` に保存する
2. プレースホルダーを次の形式へ置き換える

```mdx
![設定画面の説明](/img/screenshots/example.png)
```

Docusaurusが公開先のサブパスを反映して画像URLを処理します。ファイル名は半角英数字とハイフンで統一するのがおすすめです。

## 主な構成

- `docs/` — ドキュメント本文
- `src/pages/` — トップページ
- `src/css/custom.css` — 全体デザイン
- `static/img/` — ロゴと画像
- `.github/workflows/` — GitHub Pages公開設定
- `sidebars.js` — 左サイドバーの並び
