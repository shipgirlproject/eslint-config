import type { Linter } from "eslint";

export type ConfigOptions = {
	project?: string[];
	ignores?: string[];
};

export function config(options?: ConfigOptions): Linter.FlatConfig[];