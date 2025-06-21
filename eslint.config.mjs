import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import { dirname } from 'path'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

export default tseslint.config(
	{
		ignores: ['dist/**', 'eslint.config.mjs']
	},

	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			eslintPluginPrettierRecommended
		],

		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest
			},
			sourceType: 'commonjs',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		},

		plugins: {
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports
		},

		rules: {
			eqeqeq: ['warn', 'always'],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true,
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			],
			'simple-import-sort/exports': 'warn',
			'simple-import-sort/imports': 'error',
			'unused-imports/no-unused-imports': 'warn'
		}
	}
)
