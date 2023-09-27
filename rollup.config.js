/** @type {import('rollup').RollupOptions} */

import copy from 'rollup-plugin-copy'

export default [
    {
        input: 'src/background.js',
        output: {
            file: 'dist/background.js',
            format: 'es',
        },
        plugins: [
            copy({
                targets: [
                    { src: 'src/*.html', dest: 'dist' },
                    { src: 'src/*.json', dest: 'dist' }
                ]
            })
        ]
    },
    {
        input: 'src/content.js',
        output: {
            file: 'dist/content.js',
            format: 'es'
        }
    }
]