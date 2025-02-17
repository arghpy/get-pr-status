const { build } = require('esbuild');

build({
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    entryPoints: ['src/index.js'],
    outfile: 'dist/index.js',
    target: 'node20',
}).catch(() => process.exit(1));
