import * as augu from '@augu/eslint-config';
import type { ConfigWithExtends } from '@eslint/config-helpers';
import plugin from '@stylistic/eslint-plugin';

export async function stylistic(): Promise<ConfigWithExtends> {
	return {
		name: '@shipgirl/eslint-config:stylistic',
		extends: [
			plugin.configs['disable-legacy'],
			await augu.stylistic()
		],
		plugins: {
			'@stylistic': plugin
		},
		rules: {
			// https://eslint.style/rules/array-bracket-spacing
			'@stylistic/array-bracket-spacing': [ 'error', 'always', {
				'objectsInArrays': false,
				'arraysInArrays': false
			}],

			// https://eslint.style/rules/arrow-spacing
			'@stylistic/arrow-spacing': 'error',

			// https://eslint.style/rules/block-spacing
			'@stylistic/block-spacing': [ 'error', 'always' ],

			// https://eslint.style/rules/brace-style
			'@stylistic/brace-style': [ 'error', '1tbs' ],

			// https://eslint.style/rules/comma-dangle
			'@stylistic/comma-dangle': [ 'error', 'never' ],

			// https://eslint.style/rules/eol-last
			'@stylistic/eol-last': [ 'warn', 'always' ],

			// https://eslint.style/rules/indent
			'@stylistic/indent': [ 'error', 'tab', { 'SwitchCase': 1 }],

			// https://eslint.style/rules/indent-binary-ops
			'@stylistic/indent-binary-ops': [ 'error', 'tab' ],

			// https://eslint.style/rules/key-spacing
			'@stylistic/key-spacing': [ 'error', { 'mode': 'strict' }],

			// https://eslint.style/rules/keyword-spacing
			'@stylistic/keyword-spacing': [ 'error' ],

			// https://eslint.style/rules/member-delimiter-style
			'@stylistic/member-delimiter-style': [ 'error' ],

			// https://eslint.style/rules/no-multiple-empty-lines
			'@stylistic/no-multiple-empty-lines': [ 'error', { 'max': 1 }],

			// https://eslint.style/rules/no-trailing-spaces
			'@stylistic/no-trailing-spaces': [ 'warn', { 'ignoreComments': true }],

			// https://eslint.style/rules/object-curly-spacing
			'@stylistic/object-curly-spacing': [ 'error', 'always', {
				'objectsInObjects': false,
				'arraysInObjects': false
			}],

			// https://eslint.style/rules/quotes
			'@stylistic/quotes': [ 'error', 'single' ],

			// https://eslint.style/rules/semi
			'@stylistic/semi': [ 'error' ],

			// https://eslint.style/rules/space-before-blocks
			'@stylistic/space-before-blocks': [ 'warn' ],

			// https://eslint.style/rules/space-before-function-paren
			'@stylistic/space-before-function-paren': [ 'warn', {
				'anonymous': 'never',
				'named': 'never',
				'asyncArrow': 'always',
				'catch': 'always'
			}],

			// https://eslint.style/rules/space-in-parens
			'@stylistic/space-in-parens': [ 'warn', 'never' ],

			// https://eslint.style/rules/space-infix-ops
			'@stylistic/space-infix-ops': [ 'error', { 'int32Hint': false }],

			// https://eslint.style/rules/space-unary-ops
			'@stylistic/space-unary-ops': [ 'warn' ],

			// https://eslint.style/rules/spaced-comment
			'@stylistic/spaced-comment': [ 'warn', 'always', {
				'block': {
					'exceptions': [ '*' ],
					'balanced': true
				}
			}],

			// https://eslint.style/rules/switch-colon-spacing
			'@stylistic/switch-colon-spacing': [ 'error', {
				'after': true,
				'before': false
			}],

			// https://eslint.style/rules/template-curly-spacing
			'@stylistic/template-curly-spacing': [ 'error' ],

			// https://eslint.style/rules/template-tag-spacing
			'@stylistic/template-tag-spacing': [ 'error' ],

			// https://eslint.style/rules/type-annotation-spacing
			'@stylistic/type-annotation-spacing': [ 'error', {
				'before': false,
				'after': true
			}],

			// https://eslint.style/rules/type-generic-spacing
			'@stylistic/type-generic-spacing': [ 'error' ],

			// https://eslint.style/rules/type-named-tuple-spacing
			'@stylistic/type-named-tuple-spacing': [ 'error' ]
		}
	};
}
