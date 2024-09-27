// @ts-check
/* eslint-disable import-x/no-named-as-default-member, import-x/namespace */

import * as augu from '@augu/eslint-config';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';
import eslintPluginImportX from 'eslint-plugin-import-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * @param {string} rootdir Project root directory that contains tsconfig.json
 */
export default function config(rootdir) {
	return tseslint.config(
		{
			ignores: [
				'docs/*',
				'dist/*',
				'node_modules/*'
			]
		},
		eslint.configs.recommended,
		...tseslint.configs.recommendedTypeChecked,
		...tseslint.configs.stylisticTypeChecked,
		augu.javascript(),
		// temp disable due to rule move from typescript-eslint (ts) -> stylistic (style)
		// await augu.typescript(),
		eslintPluginImportX.flatConfigs.recommended,
		eslintPluginImportX.flatConfigs.typescript,
		stylistic.configs['disable-legacy'],
		{
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parser: tsParser,
				parserOptions: {
					projectService: true,
					tsconfigRootDir: rootdir
				},
				globals: {
					...globals.nodeBuiltin,
					...globals.builtin,
					...globals.es2021
				}
			},
			plugins: {
				'@stylistic': stylistic
			},
			rules: {
				'@stylistic/semi': [ 'error' ],
				'@stylistic/member-delimiter-style': [ 'error' ],
				'@stylistic/indent': [ 'error', 'tab', { 'SwitchCase': 1 }],
				'@stylistic/space-infix-ops': [ 'error' ],
				'@stylistic/key-spacing': [ 'error', { 'mode': 'strict' }],
				'@stylistic/keyword-spacing': [ 'error' ],
				'@stylistic/indent-binary-ops': [ 'error', 4 ],
				'@stylistic/type-generic-spacing': [ 'error' ],
				'@stylistic/type-named-tuple-spacing': [ 'error' ],
				'@stylistic/type-annotation-spacing': [ 'error', { 'before': false, 'after': true, 'overrides': { 'arrow': { 'before': true, 'after': true }}}],
				'@stylistic/quotes': [ 'error', 'single' ],
				'@stylistic/comma-dangle': [ 'error', 'never' ],
				'@stylistic/brace-style': [ 'error', '1tbs' ],
				'@stylistic/object-curly-spacing': [ 'error', 'always', { 'objectsInObjects': false, 'arraysInObjects': false }],
				'@stylistic/array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': false, 'arraysInArrays': false }],
				'@stylistic/block-spacing': [ 'error', 'always' ],
				'@stylistic/arrow-spacing': 'error',
				'@stylistic/switch-colon-spacing': [ 'error', { 'after': true, 'before': false }],
				'@stylistic/no-multiple-empty-lines': [ 'error', { 'max': 1 }],
				'@stylistic/eol-last': [ 'warn', 'always' ],
				'@stylistic/no-trailing-spaces': [ 'warn', { 'ignoreComments': true }],
				'@typescript-eslint/require-await': [ 'warn' ],
				'import-x/no-extraneous-dependencies': [ 'error' ],
				'import-x/no-mutable-exports': [ 'warn' ],
				'import-x/no-unused-modules': [ 'warn' ],
				'import-x/no-amd': [ 'error' ],
				'import-x/no-commonjs': [ 'error' ],
				'import-x/no-import-module-exports': [ 'error' ],
				'import-x/no-nodejs-modules': [ 'error' ],
				'import-x/unambiguous': [ 'warn' ],
				'import-x/no-absolute-path': [ 'error' ],
				'import-x/no-cycle': [ 'error' ],
				'import-x/no-relative-packages': [ 'error' ],
				'import-x/no-self-import': [ 'error' ],
				'import-x/no-useless-path-segments': [ 'warn' ],
				'import-x/consistent-type-specifier-style': [ 'error', 'prefer-top-level' ],
				'import-x/extensions': [ 'error', 'ignorePackages' ],
				'import-x/first': [ 'warn' ],
				'import-x/newline-after-import': [ 'warn' ],
				'import-x/no-default-export': [ 'warn' ],
				'import-x/no-unassigned-import': [ 'warn' ],
				'import-x/order': [
					'warn',
					{
						alphabetize: {
							caseInsensitive: true,
							order: 'asc'
						},
						groups: [
							'builtin',
							'external',
							'internal',
							'parent',
							'sibling'
						]
						// 'newlines-between': 'always'
					}
				],
				// use import-x/no-duplicate-imports
				'no-duplicate-imports': [ 'off' ]
			}
		},
		{
			files: [
				'**/*.js',
				'**/*.cjs',
				'**/*.mjs'
			],
			rules: {
				'require-await': [ 'warn' ],
				'no-unused-vars': [ 'warn' ]
			}
		}
	);
}
