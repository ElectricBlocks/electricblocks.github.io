const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'th',
        'td',
        'table-dark',
        'table-striped',
        'table-bordered',
        'tbody',
        'thead',
        ...whitelister([
          './assets/scss/components/_code.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/common/_dark.scss',
        ]),
      ],
    }),
  ],
}
