import * as augu from '@augu/eslint-config';
import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { imports } from './imports.ts';
import { stylistic } from './stylistic.ts';
import { typescript } from './typescript.ts';

/**
 * @param additionalConfig Additional eslint configurations
 */
// eslint-disable-next-line import-x/no-default-export
export default async function config(...additionalConfig: ConfigWithExtends[]) {
	return defineConfig(
		{
			ignores: [
				'docs/*',
				'dist/*',
				'node_modules/*'
			]
		},
		eslint.configs.recommended,
		augu.javascript(),
		typescript(),
		imports(),
		await stylistic(),
		{
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				globals: {
					...globals.nodeBuiltin,
					...globals.builtin,
					...globals.es2021
				}
			},
			rules: {}
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
		},
		...additionalConfig
	);
}
