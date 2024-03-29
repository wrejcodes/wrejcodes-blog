---
slug: "updates"
date: "2023-02-18"
title: "Updates"
tags: [ "dev", "bugs" ]
summary: "A description of recent updates that have been made to the site."
---

There have been a few improvements made to the site. Tailwind purge is enabled and making sure that our site loads very quickly. I've added some extra styling to blog pages and picked out a font. Tag system has been introduced and I ran into some interesting things during that process.

For the longest time I was not able to pull in path for my tags. I originally had this in my config.

```javascript
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
```

This didn't work as I got an error saying that graphQL couldn't find the field path on the tags collection. After trying to find out why I made this change and it started working.


```javascript
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
```

I get a deprecation warning saying that the route option in addCollection() is deprecated. It says to use templates instead but I also have that configured. Oh well... I'll update this post if I figure out the root cause. For now the tag system is working so I'm going to continue working on the site :).