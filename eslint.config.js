import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'

export default [
    // Node CLI scripts in npm/ are not browser/React code
    { ignores: ['dist', 'npm'] },

    // Source files
    {
        files: ['src/**/*.{js,jsx}'],
        ignores: ['src/**/*.test.{js,jsx}', 'src/**/__tests__/**'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: { ...globals.browser, ...globals.es2020 },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            // Template-wide patterns the original codebase relies on
            'no-unused-vars': 'warn',
            'react-hooks/exhaustive-deps': 'warn',
            // Template uses use* named factory functions at module level (not real hooks)
            'react-hooks/rules-of-hooks': 'warn',
            // Template passes children as props in a few places
            'react/no-children-prop': 'warn',
            // Template has a few minor code-style issues
            'no-case-declarations': 'warn',
            'no-empty': 'warn',
        },
    },

    // Test files — vitest globals, no React-refresh rule
    {
        files: ['src/**/*.test.{js,jsx}', 'src/**/__tests__/**/*.{js,jsx}', 'src/test/**/*.{js,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.es2020,
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                vi: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
            },
        },
        plugins: { react },
        settings: { react: { version: 'detect' } },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'warn',
        },
    },
]
