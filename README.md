# typst を用いた卒論テンプレート

## 必要要件

- Homebrew
- Go 言語
- Node.js

## インストール

```bash
./init.sh
```

## コマンド

- `task`: タスクの一覧を表示します
- `task compile`: `main.typ` を `exports/main.pdf` にコンパイルします
- `task compile:watch`: `main.typ` を監視して、変更があれば `exports/main.pdf` にコンパイルします
- `task commit`: コミットメッセージを生成します
- `task fmt`: 全ての `.typ` ファイルをフォーマットします

## actions secret

- GOOGLE_DRIVE_SECRET: google drive api を有効化したサービスアカウントの json ファイルを base64 エンコードしたもの
- GOOGLE_DRIVE_FOLDER_ID: ファイルをアップロードするフォルダの ID
