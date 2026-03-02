import process from 'node:process';
import type { ConfigWithExtends } from '@eslint/config-helpers';
import * as tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export function typescript(): ConfigWithExtends {
	return {
		name: '@shipgirl/eslint-config:typescript',
		extends: {
			...tseslint.configs.recommendedTypeChecked,
			...tseslint.configs.stylisticTypeChecked
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tsParser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: process.cwd()
			}
		},
		rules: {
			'@typescript-eslint/require-await': [ 'warn' ],
			'@typescript-eslint/adjacent-overload-signatures': [ 'warn' ],
			'@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
			'@typescript-eslint/explicit-member-accessibility': [ 'error', {
				accessibility: 'explicit',
				overrides: {
					accessors: 'no-public',
					constructors: 'no-public'
				}
			}],
			'@typescript-eslint/prefer-literal-enum-member': [ 'warn', { allowBitwiseExpressions: true }],
			'@typescript-eslint/parameter-properties': [ 'warn', { prefer: 'parameter-property' }],
			'@typescript-eslint/no-extra-non-null-assertion': [ 'error' ],
			'@typescript-eslint/no-useless-constructor': [ 'error' ],
			'@typescript-eslint/no-array-constructor': [ 'error' ],
			'@typescript-eslint/no-empty-object-type': [ 'warn', {
				allowInterfaces: 'with-single-extends',
				allowObjectTypes: 'never'
			}],
			'@typescript-eslint/no-empty-function': [ 'error' ],
			'@typescript-eslint/prefer-as-const': [ 'error' ],
			'@typescript-eslint/no-this-alias': [ 'error', { allowDestructuring: true }],
			'@typescript-eslint/no-namespace': [ 'error', { allowDeclarations: true }],
			'@typescript-eslint/array-type': [ 'error', { default: 'array-simple' }],
			'@typescript-eslint/dot-notation': [ 'error', {
				allowPrivateClassPropertyAccess: true,
				allowProtectedClassPropertyAccess: false,
				allowKeywords: true
			}],
			'@typescript-eslint/no-implied-eval': [ 'error' ],
			'@typescript-eslint/await-thenable': [ 'error' ],
			'no-useless-constructor': 'off',
			'dot-notation': 'off',
			'brace-style': 'off'
		}
	};
}
