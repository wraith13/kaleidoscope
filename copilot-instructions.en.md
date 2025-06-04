# Copilot Instructions

[日本語版はこちら](./copilot-instructions.md)

> **Note:** In this project, always follow the overall project conventions first, and general best practices second.
> Also, please use a style that inserts a space between alphanumeric and full-width characters.

## Overview

This document provides guidelines and instructions for utilizing GitHub Copilot in this project.

## Usage

- Add project-specific Copilot instructions or rules to this file.
- Ensure all team members receive consistent coding assistance.
- Examples: naming conventions, prohibited APIs, comment policies, etc.
- To add a supported language, add the expressions for that language to `resource/lang.*.json` and add the language to the master in `script/library/locale.ts` in lang-label order (this order is reflected in the UI).
- When you add or remove a supported language, be sure to update the Multi-language Support section in `README.md` as well.
- The notation and order of Multi-language Support in README.md must always match the lang-label in each language file and the order of the master in `script/library/locale.ts`.
- This alone will automatically support the UI. No other file needs to be edited.
- When you make changes to this file (copilot-instructions.en.md), be sure to make the same changes to copilot-instructions.md as well.

## Notes

- Do not include confidential or personal information.
- Always review Copilot suggestions and modify as needed.
- Pay attention to licenses and copyrights.
- Insert a space between alphanumeric and full-width characters.

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot Labs](https://githubnext.com/projects/copilot-labs/)
