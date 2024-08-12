// @ts-check
import config from './index.js';

export default [ ...config(new URL(import.meta.url).pathname) ];
