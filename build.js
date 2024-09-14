const { mkdir } = require('fs/promises');
const { build } = require('esbuild');
const { rimraf } = require('rimraf');

(async function() {
    await rimraf('dist');
    await mkdir('dist');
    await build({
        sourcemap: true,
        minify: true,
        entryPoints: {
            'esotope.min': './esotope.js'
        },
        bundle: false,
        logLevel: 'info',
        outdir: 'dist/',
        metafile: false
    });
})();