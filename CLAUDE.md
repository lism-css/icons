# CLAUDE.md

## プロジェクト概要

Lism Icons（npm: `@lism-css/icons`）は、ReactとAstroで使えるオリジナルのSVGアイコン集。Lism CSS本体（`lism-css`リポジトリ）には依存しない。単一パッケージのリポジトリで、lint系設定はルート直下。

- `design/`: 正本のIllustratorファイル（git LFS）と[設計文書](design/design.md)
- `src/svg/`: 出力用.aiから書き出したSVG。ビルド入力
- `src/react/`・`packages/astro/`・`src/data.ts`: SVGから生成するコンポーネントとデータ。Git管理するが手で編集しない
- `scripts/`: 同期・書き出し・生成スクリプト — [README](scripts/README.md)
- `docs/*.md`: プロジェクト文書（`docs/decisions.md`・`docs/illustrator-automation.md`）
- `.claude/commands/release.md`: リリース手順（`/release {バージョン}`）

## Git運用

- ブランチは`main`のみ。`dev`は作らない。PRのターゲットも`main`。
- タグは`v{バージョン}`。

## 公開情報の取り扱い（OSS）

GitHubへ書く内容（issue・PR・コミットメッセージ・コードコメント・ドキュメント）に次を含めない。

- ローカルの絶対パス（`/Users/...` などユーザー名を含むもの）
- メールアドレス・氏名などの個人情報
- このリポジトリと無関係な他プロジェクト名・顧客名・業務情報
- APIキー・トークン・環境変数の値などの秘密情報

ログやコマンド出力は相対パス等に置換・マスクしてから引用する。会話・グローバル設定・メモリ由来の情報は、明示的な指示がない限り投稿文に含めない。issue・PR作成後は本文を表示して漏洩がないか確認する。

## 主要コマンド

```bash
nr build # SVGから生成し、dist/ をビルド
nr generate:check # 生成物（src/react・packages/astro・src/data.ts）の一致を確認
nr typecheck
nr lint
nr test
nr sync:design # 設計用.aiから出力用.ai・SVGを同期して生成まで行う（Illustratorが必要）
```

## 注意事項

- 独自アイコンの追加・調整・復元・書き出しでは、ローカルスキル[edit-icons](.claude/skills/edit-icons/SKILL.md)に従う。
- UIの既定アイコンへの反映は`lism-css`リポジトリ側の`@lism-css/ui`の`gen:icons`で行う。手順は[scripts/README.md](scripts/README.md#uiの既定アイコンへ反映する)。
