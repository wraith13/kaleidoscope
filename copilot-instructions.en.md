# Copilot Instructions

[日本語版はこちら](./copilot-instructions.md)

> **Note:** In this project, always follow the overall project conventions first, and general best practices second.
> Also, please insert a space between alphanumeric and full-width characters.

## Overview

This document summarizes the guidelines and procedures for using GitHub Copilot in this project.

## How to Add a Supported Language

When adding a new supported language, be sure to complete all of the following steps. No other file edits are required.

1. Add language expressions to `resource/lang/<lang>.json` (copy an existing file as a template).
2. Run `npm run-script build locale` or `npm run-script build all`. (This will also update README.md and other relevant files.)

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
