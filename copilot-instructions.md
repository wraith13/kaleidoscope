# Copilot Instructions

[English version](./copilot-instructions.en.md)

> **注意:** 本プロジェクトでは、まず第一にプロジェクト全体の慣習に従い、第二に一般的なベストプラクティスに従ってください。
> また、英数字と全角文字の間にはスペースを入れるスタイルで統一してください。

## 概要

このドキュメントは、GitHub Copilot をプロジェクトで活用するためのガイドライン・インストラクションです。

## 使い方

- このファイルにプロジェクト固有の Copilot 指示やルールを記載してください。
- チームメンバーが一貫したコーディング支援を受けられるようにします。
- 例: 命名規則、使用禁止 API、コメント方針など
- 対応言語を増やす場合は、`resource/lang.*.json` にその言語での表現を記述し、`script/library/locale.ts` でその言語を読み込み・登録し、`resource/control.json` も合わせて編集してください。

## 注意事項

- 機密情報や個人情報は記載しないでください。
- Copilot の提案は必ずレビューし、必要に応じて修正してください。
- ライセンスや著作権に注意してください。
- 英数字と全角文字の間にはスペースを入れてください。

## 参考リンク

- [GitHub Copilot 公式ドキュメント](https://docs.github.com/ja/copilot)
- [Copilot Labs](https://githubnext.com/projects/copilot-labs/)
