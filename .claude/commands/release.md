---
description: バージョン更新・タグ付け・GitHub リリース作成を一貫して行う。npm publish はユーザー手動
argument-hint: "{バージョン}"
---

# Release

`@lism-css/icons`のバージョン更新・タグ付け・リリースノート生成・GitHub リリース作成を一貫して行う。npm publish はユーザーが手動で行う。changelog ファイルは持たない。


## 引数

`$ARGUMENTS` はリリースバージョン（例: `0.1.0`）。不足していればユーザーに確認する。


## 現在の状態

- 現在のブランチ: !`git branch --show-current`
- 最新タグ: !`git tag --list 'v*' --sort=-version:refname | head -n 1`
- 現在のバージョン: !`node -p "require('./package.json').version"`


## 手順

### 1. main ブランチの確認

- `main` 以外にいる場合は警告し、`main` に切り替えてよいか確認する
- `git status --porcelain` が空であることを確認する。差分があれば停止する
- `git pull origin main` で最新にする

### 2. バージョン更新

`package.json` の `version` が引数と一致していればスキップする。異なる場合:

1. `version` を更新する
2. `git add package.json` → `git commit -m "chore: v{バージョン}"`
3. push してよいか確認 → `git push origin main`

### 3. 前回タグの特定

`v*` の最新タグを前回タグとする。無ければリポジトリの最初のコミットからを対象にする。

### 4. リリースノートの生成

前回タグ〜HEAD の `git log --oneline` からリリースノートを日本語で生成する。コミットメッセージが日本語ならそのまま使う。空のカテゴリは省略する。

```markdown
## What's Changed

### Features
- 変更内容の説明 (コミットハッシュ短縮形)

### Bug Fixes
- 変更内容の説明 (コミットハッシュ短縮形)

### Other
- 変更内容の説明 (コミットハッシュ短縮形)
```

| コミット | カテゴリ |
| --- | --- |
| `feat` または新機能追加 | Features |
| `fix` またはバグ修正 | Bug Fixes |
| `chore` `refactor` `style` `perf` `ci` `build` | Other |
| `docs`（ドキュメントのみ） | 除外 |

### 5. ユーザーに確認

タグ名 `v{バージョン}` とリリースノートを表示し、続行の許可を得る。修正の指示があれば従う。

### 6. npm publish（ユーザー手動）

案内して完了を待つ。`prepack` がビルドを実行する。`git-checks` が有効なので、`main` かつ作業ツリーがクリーンな状態で実行する。

```
pnpm publish を実行してください。

完了したら教えてください。
```

### 7. タグ付けと GitHub リリースの作成

publish の完了をユーザーが確認した後に行う。

1. `git tag v{バージョン}` → `git push origin v{バージョン}`
2. リリースノートを Write ツールで一時ファイルに書き、`gh release create v{バージョン} --title "v{バージョン}" --notes-file {パス}` で作成し、ファイルを消す。`gh release` のファイル指定は `--notes-file`（`-F`）で、`--body-file` ではない。`--notes "..."`・HEREDOC・`$(mktemp)`・リダイレクトは使わない（本文が壊れる、または許可リストで照合できず承認待ちで止まる）
