---
slug: "let-there-be-images"
date: "2023-02-19"
title: "Let There Be Images!"
tags: [ "dev", "new-feature" ]
summary: "A couple new things added to the site such as images!"
image: 
    path: ../media/annie-spratt-8mqOw4DBBSg-unsplash.jpg
    alt: "A picture of succulents in a pleasing arrangment"
    caption: '<span>Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/photos/8mqOw4DBBSg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>'
---

Today I have added a few new things to the site.

- SEO metadata
- Images
- ESLint auto formatting for clean code

SEO is always important if you want people to find your content. I really appreciated the approach that [@simon_mannes](https://mannes.tech/gridsome-tutorial/) took with adding SEO metadata as a mixin. Setting up a blog post with the following code and having it populate the SEO metadata is sweet!

```javascript
import SEO from '../mixins/SEO.vue';

export default {
    mixins: [SEO]
}
```

I have been thoroughly enjoying the tutorial that [@simon_mannes](https://mannes.tech/gridsome-tutorial/) has put together for learning gridsome. I have been able to add a lot of really nice features to this blog quickly thanks to the power of gridsome and the guidance of that tutorial. Check it out if you're thinking about learning gridsome.

Other things that were added are images! I haven't done any modifications to the image, so I'm interested in how gridsome handles images for performance by default.