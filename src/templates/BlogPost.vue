<template>
    <Layout>
        <h1 class="text-xl font-semibold mb-2">{{ $page.post.title }}</h1>
        <span class="font-light">{{ $page.post.date }}</span>
        <div class="mt-4 container markdown" v-html="$page.post.content" />
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
    post: blogPost (path: $path) {
        title
        date (format: "MMM D, Y")
        content
    }
}
</page-query>

<script>
export default {
    metaInfo () {
        return {
            title: this.$page.post.title
        }
    }
}
</script>

<style lang="scss" scoped>
.markdown {
  @apply text-lg text-woodsmoke-900 leading-normal;
  & > * + *,  & li + li, & li > p + p {
    @apply mt-6;
  }
  & strong {
    @apply text-woodsmoke-500 font-bold;
  }
  & a {
    @apply text-woodsmoke-500 font-semibold;
  }
  & strong a {
    @apply font-bold;
  }
  & h2 {
    @apply leading-tight text-xl font-bold text-woodsmoke-500 mb-2 mt-10;
  }
  & h3 {
    @apply leading-tight text-lg font-bold text-woodsmoke-500 mt-8 -mb-2;
  }
  & code {
    @apply font-mono text-sm inline bg-woodsmoke-300 px-1;
  }
  & pre code {
    @apply block bg-woodsmoke-500 p-4 rounded;
  }
  & blockquote {
    @apply border-l-4 border-woodsmoke-400 pl-4 italic;
  }
  & ul, & ol {
    @apply pl-5;
    @screen sm {
      @apply pl-10;
    }
  }
}
</style>