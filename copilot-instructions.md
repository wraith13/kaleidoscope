# Copilot 利用手順

[English version here](./copilot-instructions.en.md)

> **注意:** このプロジェクトでは、まずプロジェクト全体の慣例に従い、次に一般的なベストプラクティスに従ってください。
> また、英数字と全角文字の間には必ずスペースを挿入してください。

## 概要

このドキュメントは、本プロジェクトで GitHub Copilot を利用する際のガイドラインと手順をまとめたものです。

## 対応言語の追加手順

新しい対応言語を追加する場合は、以下のすべての手順を必ず実施してください。これ以外のファイル編集は不要です。

1. `resource/lang/<lang>.json` に言語表現を追加（既存ファイルをテンプレートとしてコピー）。
2. `npm run-script build locale` あるいは `npm run-script build all` を実行。( README.md も含めて、これで更新されます。 )

日本語( `resource/lang/ja.json` )がオリジナルで、英語( `resource/lang/en.json` )は翻訳内容を検証済みですが、他は全て AI 生成されたものを検証無しで使用しています。この為、新しい言語を追加する際には日本語と英語を参照してください。

## 利用方法

- プロジェクト固有の Copilot 指示やルールはこのファイルに記載してください。
- チーム全員が一貫したコーディング支援を受けられるようにします。
- 例：命名規則、禁止 API、コメント方針など

## 注意事項

- 機密情報や個人情報は記載しないでください。
- Copilot の提案は必ず確認し、必要に応じて修正してください。
- ライセンスや著作権に注意してください。
- 英数字と全角文字の間にはスペースを挿入してください。

## 参考

- [GitHub Copilot ドキュメント](https://docs.github.com/ja/copilot)
- [Copilot Labs](https://githubnext.com/projects/copilot-labs/)
