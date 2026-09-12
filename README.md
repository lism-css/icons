# Lism Icons

ReactとAstroで使えるオリジナルのSVGアイコン集です。Lism CSSへの依存はありません。


## 使い方

```sh
pnpm add @lism-css/icons
```

Reactでは`/react`から読み込みます。

```tsx
import { HomeIcon, StarHalfIcon } from '@lism-css/icons/react';

<HomeIcon aria-label="ホーム" size={24} />
<StarHalfIcon strokeWidth={2} aria-label="半分の星" />
```

Astroでは`/astro`から読み込みます。

```astro
---
import { HomeIcon, StarHalfIcon } from '@lism-css/icons/astro';
---

<HomeIcon aria-label="ホーム" size={24} />
<StarHalfIcon stroke-width={2} aria-label="半分の星" />
```

`@lism-css/icons/react/HomeIcon`や`@lism-css/icons/astro/HomeIcon`からdefault importすることもできます。名前は`star-half`→`StarHalfIcon`、`menu-2`→`Menu2Icon`のようにパスカルケースへ変換して`Icon`を付けています。

大きさは`size`で幅・高さをまとめて指定でき、既定は`1em`です。`width`・`height`を個別に指定した場合はそちらを優先します。色は`currentColor`で周囲の文字色を引き継ぎます。線幅の既定は`1.5`で、Reactでは`strokeWidth`、Astroでは`stroke-width`で指定できます。Astroでは`strokeWidth`も受け付け、両方あれば`stroke-width`を優先します。

線幅は`weight`で段階名としても指定できます。`light`・`regular`・`bold`がそれぞれ線幅`1`・`1.5`・`2`に変換され、`strokeWidth`（Astroでは`stroke-width`も）を併記した場合はそちらを優先します。`weight`はSVG属性としては出力しません。

```tsx
<HomeIcon weight="bold" />
```

塗り版は`HeartFillIcon`のように別コンポーネントで、`weight`で線と塗りを切り替えることはできません。`StarHalfIcon`は左半分の塗りと外周の線を組み合わせており、線幅の変更は外周に反映されます。`HeartFillIcon`など塗りだけのアイコンは線幅で太さが変わりません。`BadFillIcon`・`BanFillIcon`・`BookFillIcon`・`CalendarFillIcon`・`GoodFillIcon`・`NoteFillIcon`のように塗り版でも線を残すアイコンでは、その線に線幅指定が適用され、塗りの外形は変わりません。

通常は装飾として読み上げ対象から外します。アイコン単体に意味を持たせる場合は`aria-label`か`aria-labelledby`を指定してください。標準のSVG属性を渡せるほか、Reactでは`ref`と子要素、Astroではslotも使用できます。

## SVGデータ

`@lism-css/icons/data`から、全アイコンの`icons`、名前の型`IconName`を読み込めます。各アイコンは`viewBox`、ルート属性の`attributes`、内部マークアップの`body`を持ちます。属性名は`stroke-width`などSVGの表記です。

## 制作データとライセンス

収録アイコンは、円・直線・共通の寸法から設計したオリジナルです。MITライセンスで提供します。ライセンス本文は[LICENSE](./LICENSE)を参照してください。

編集元は`design/lism-icons-geometric-study.ai`です。regular・fill一覧に配置した原寸マスターから、出力専用の`design/lism-icons.ai`を生成します。設計方針は[設計文書](./design/design.md)、同期・SVG書き出し・パッケージ生成の操作は[制作スクリプトの使い方](./scripts/README.md)を参照してください。

`src/svg/`には出力用.aiから書き出したSVGを保存し、アイコンデータとReact/Astroコンポーネントの生成入力にします。ビルドでは.aiを読みません。アイコンの追加・削除はSVGの一覧から自動で反映されます。
