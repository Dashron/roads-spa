import { context } from 'esbuild';
import { config } from './esbuild.config.js';

// Build client in watch mode
const clientContext = await context(config);
clientContext.watch();