import type { ConfigWithExtends } from '@eslint/config-helpers';
import { importX } from 'eslint-plugin-import-x';

export function imports(): ConfigWithExtends {
	return {
		name: '@shipgirl/eslint-config:imports',
		extends: [
			// @ts-expect-error ECMA version?
			importX.flatConfigs.recommended,
			// @ts-expect-error LanguageOptions?
			importX.flatConfigs.typescript
		],
		rules: {
			'import-x/no-extraneous-dependencies': [ 'error' ],
			'import-x/no-mutable-exports': [ 'warn' ],
			'import-x/no-unused-modules': [ 'warn' ],
			'import-x/no-amd': [ 'error' ],
			'import-x/no-commonjs': [ 'error' ],
			'import-x/no-import-module-exports': [ 'error' ],
			// 'import-x/no-nodejs-modules': [ 'error' ],
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
			'import-x/no-named-as-default-member': [ 'off' ],
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
	};
}
