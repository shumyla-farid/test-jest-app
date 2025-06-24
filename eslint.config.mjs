import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { defineConfig } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    // TypeScript ESLint plugin and parser, if you use TS
    {
        files: ['**/*.{ts,tsx}'],
        plugins: { '@typescript-eslint': tseslint },
        languageOptions: {
            parser: tsParser,
        },
        // extends: ['plugin:@typescript-eslint/recommended'],
    },
    { ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'] },
    tseslint.configs.recommended,
])
