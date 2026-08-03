import type { Linter } from "eslint";

export type ConfigOptions = {
	project?: string[];
	ignores?: string[];
};

export default function config(options?: ConfigOptions): Linter.FlatConfig[];
