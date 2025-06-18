# Copilot Usage Instructions

[日本語版はこちら](./copilot-instructions.md)

> **Note:** In this project, always follow the project-wide conventions first, then general best practices.
> Also, always insert a space between alphanumeric characters and full-width characters.

## Overview

This document summarizes the guidelines and procedures for using GitHub Copilot in this project.

## Steps to Add Supported Languages

When adding a new supported language, be sure to complete all of the following steps. No other file edits are necessary.

1. Add language expressions to `resource/lang/<lang>.json` (copy from an existing file as a template).
2. Run `npm run-script build locale` or `npm run-script build all`. (This will also update the README.md.)

Japanese (`resource/lang/ja.json`) is the original, and English (`resource/lang/en.json`) has been verified for translation accuracy. All other languages are AI-generated and have not been verified. Therefore, when adding a new language, please refer to both Japanese and English.

## Usage

- Project-specific Copilot instructions and rules should be described in this file.
- This ensures all team members receive consistent coding assistance.
- Examples: naming conventions, prohibited APIs, comment policies, etc.

## Notes

- Do not include confidential or personal information.
- Always review Copilot suggestions and modify them as needed.
- Pay attention to licenses and copyrights.
- Always insert a space between alphanumeric characters and full-width characters.

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot Labs](https://githubnext.com/projects/copilot-labs/)
