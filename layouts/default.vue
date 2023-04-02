<template>
  <div class="container max-w-screen-md mx-auto px-5">
    <header class="flex justify-between items-center mt-8 mb-12">
      <strong>
        <NuxtLink to="/">wrejcodes</NuxtLink>
      </strong>
      <nav class="nav">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink
          class="ml-6"
          to="/about/"
        >
          About
        </NuxtLink>
        <NuxtLink
          class="ml-6"
          to="/blog/"
        >
          Blog
        </NuxtLink>
      </nav>
    </header>
    <slot name="below-header" />
    <slot />
  </div>
</template>

<script>
</script>

<style scss>
/* work-sans-200 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 200;
  src: url('/assets/fonts/work-sans-v18-latin-200.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('/assets/fonts/work-sans-v18-latin-200.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* work-sans-200italic - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 200;
  src: url('/assets/fonts/work-sans-v18-latin-200italic.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('/assets/fonts/work-sans-v18-latin-200italic.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* work-sans-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/fonts/work-sans-v18-latin-regular.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('/assets/fonts/work-sans-v18-latin-regular.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* work-sans-italic - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 400;
  src: url('/assets/fonts/work-sans-v18-latin-italic.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('/assets/fonts/work-sans-v18-latin-italic.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* work-sans-600 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  src: url('/assets/fonts/work-sans-v18-latin-600.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('/assets/fonts/work-sans-v18-latin-600.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* work-sans-800 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 800;
  src: url('/assets/fonts/work-sans-v18-latin-800.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('/assets/fonts/work-sans-v18-latin-800.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* work-sans-800italic - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 800;
  src: url('/assets/fonts/work-sans-v18-latin-800italic.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('/assets/fonts/work-sans-v18-latin-800italic.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
</style>
