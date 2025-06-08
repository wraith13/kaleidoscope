# Copilot Instructions

[日本語版はこちら](./copilot-instructions.md)

> **Note:** In this project, always follow the overall project conventions first, and general best practices second.
> Also, please use a style that inserts a space between alphanumeric and full-width characters.

## Overview

This document provides guidelines and instructions for utilizing GitHub Copilot in this project.

## How to Add a Supported Language

When adding a new supported language, follow all steps below. No other file edits are required.

1. Add the language expressions to `resource/lang/<lang>.json` (copy an existing file as a template).
2. Add the language to the master list in `script/index.ts` and `script/library/locale.ts` in locale id (de, en, es, ja, ru, tr, zh-cn, zh-tw) alphabetical order. This order is reflected in the UI.
3. Update the Multi-language Support section in `README.md`.
    - The notation and order must match the lang-label in each language file and the master list in `script/library/locale.ts`.
4. Update the `__*_DESCRIPTION__` sections in both `index.html.template` and `build.json` for the new language.
5. (If you edit this file, make the same changes to `copilot-instructions.md`.)

## Usage

- Add project-specific Copilot instructions or rules to this file.
- Ensure all team members receive consistent coding assistance.
- Examples: naming conventions, prohibited APIs, comment policies, etc.

## Notes

- Do not include confidential or personal information.
- Always review Copilot suggestions and modify as needed.
- Pay attention to licenses and copyrights.
- Insert a space between alphanumeric and full-width characters.

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot Labs](https://githubnext.com/projects/copilot-labs/)
