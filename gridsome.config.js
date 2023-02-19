// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteName: 'wrejcodes',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
            route: '/tag/:id'
          }
        },
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'material-theme-palenight', skipInline: true } ],
          ]
        },
      }
    }
  ],
  port: 13337,
  template: {
    BlogPost: '/blog/:slug',
    Tag: '/tag/:id',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ]
      }
    }
  }
}
