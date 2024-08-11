// @ts-check
import { defineConfig } from 'tsup';

export default defineConfig({
	entry: [ 'index.js' ],
	format: [ 'esm', 'cjs' ],
	platform: 'node',
	splitting: false,
	sourcemap: true,
	dts: true,
	clean: true,
	shims: true,
	outExtension({ format }) {
		if (format === 'cjs') return {
			js: '.cjs'
		};
		if (format === 'esm') return {
			js: '.mjs'
		};
		return {
			js: '.js'
		};
	}
});
