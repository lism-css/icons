import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default defineConfig(
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.astro/**',
      '**/.turbo/**',
      // エージェント用スキルの補助スクリプト（ExtendScript と Node テスト）は lint 対象外
      '.claude/**',
      'eslint.config.mjs',
      'lint-staged.config.mjs',
      '**/.prettierrc.cjs',
    ],
  },
  eslintConfigPrettier,
  eslint.configs.recommended,
  // JavaScriptファイルには通常のrecommendedを適用
  tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: {
          allowDefaultProject: ['scripts/*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // TypeScriptファイルには型チェック付きのrecommendedを適用
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    settings: {
      react: {
        version: '18',
      },
    },
    plugins: {
      react,
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/prop-types': 0,

      'react/no-unknown-property': [
        2,
        {
          ignore: ['jsx', 'global'],
        },
      ],

      // TypeScript ESLint rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
    },
  },
  // scripts/*.mjs は型情報なしで lint する。
  // tseslint v8 + ESLint v9 の projectService は、複数ファイルを同時に投入したときに
  // 新規 .mjs を default project に登録し損なうことがあり、lint-staged 経由の pre-commit で
  // "not found by the project service" になるため、これらは projectService の対象外にする。
  {
    files: ['scripts/*.mjs'],
    languageOptions: {
      parserOptions: { projectService: false },
    },
  },
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: false,
        project: null,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { astroHTML: 'readonly' },
    },
    rules: {
      'react/no-unknown-property': 'off',
      'no-irregular-whitespace': 'off',
    },
  }
);
