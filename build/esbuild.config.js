import path from 'node:path';

const workspace = process.cwd();

export const config = {
  bundle: true,
  platform: 'browser',
  format: 'esm',
  sourcemap: 'external',
  logLevel: 'error',
  tsconfig: path.join(workspace, './tsconfig.json'),
  entryPoints: {
    main: path.join(workspace, './src', 'main.tsx'),
    // style: path.join(workspace, '../src', 'style.css')
  },
  outdir: path.join(workspace, './public/js'),
};
