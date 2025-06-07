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
- 対応言語を追加する場合は、`resource/lang.*.json` にその言語の表現を記述し、`script/library/locale.ts` の master にその言語を lang-label 順で追記してください（この順番が UI 上にも反映されます）。
    - 一般的な国際化 UI では、ラテン系（英語・ドイツ語・スペイン語など）→キリル系（ロシア語など）→CJK（日本語・中国語・韓国語など）の順に並べる慣習があります。Unicode コードポイント順とは異なる場合があるため、README.md の Multi-language Support セクションや UI の言語リストもこの順番に揃えてください。
- また、サポート言語が増減した場合は `README.md` の Multi-language Support セクションも必ず修正してください。
- Multi-language Support の表記と言語の順番は、各言語ファイルの lang-label と `script/library/locale.ts` の master の順番に必ず合わせてください。
- これだけでUIも自動的に対応します。他のファイルの編集は不要です。
- このファイル（copilot-instructions.md）を修正した場合は、必ず copilot-instructions.en.md も同様に修正してください。

## 注意事項

- 機密情報や個人情報は記載しないでください。
- Copilot の提案は必ずレビューし、必要に応じて修正してください。
- ライセンスや著作権に注意してください。
- 英数字と全角文字の間にはスペースを入れてください。

## 参考リンク

- [GitHub Copilot 公式ドキュメント](https://docs.github.com/ja/copilot)
- [Copilot Labs](https://githubnext.com/projects/copilot-labs/)
