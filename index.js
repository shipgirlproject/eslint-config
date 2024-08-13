// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import * as augu from '@augu/eslint-config';
import globals from 'globals';

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
		// @ts-expect-error incorrect type from package, but still compatible
		augu.javascript(),
		// temp disable due to rule move from typescript-eslint (ts) -> stylistic (style)
		// await augu.typescript(),
		stylistic.configs['disable-legacy'],
		{
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
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
				'camelcase': [ 'off' ]
			}
		},
		{
			files: [
				'**/*.js',
				'**/*.cjs',
				'**/*.mjs'
			],
			rules: {
				'require-await': [ 'error' ],
				'no-unused-vars': [ 'warn' ]
			}
		}
	);
}
