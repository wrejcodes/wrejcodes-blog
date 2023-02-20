<template>
  <Layout>
    <h1 class="text-2xl mb-2">
      {{ $page.post.title }}
    </h1>
    <span class="font-light text-rhino-500">{{ $page.post.date }}</span>
    <div class="flex flex-wrap mt-2 mb-4 text-sm">
      <g-link
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        :class="[
          'bg-mojo-300',
          'rounded-full',
          'px-2',
          'py-1',
          'mr-4',
          'mb-4',
          'text-mojo-700',
          'hover:text-mojo-300',
          'hover:bg-mojo-700'
        ]"
      >
        {{ tag.title }}
      </g-link>
    </div>
    <!-- Image -->
    <figure
      v-if="$page.post.image"
      class="flex flex-col"
    >
      <g-image
        :alt="$page.post.image.alt"
        :src="$page.post.image.path"
        class="mb-2"
      />
      <figcaption
        class="self-center image-caption mb-15"
        v-html="$page.post.image.caption"
      />
      <div
        class="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
        v-html="$page.post.content"
      />
    </figure>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
    post: blogPost (path: $path) {
        title
        date (format: "MMM D, Y")
        content
        path
        summary
        image {
          path
          caption
          alt
        }
        tags {
          title
          path
        }
    }
}
</page-query>

<script>
import SEO from '../mixins/SEO.vue';

export default {
  mixins: [SEO],
};
</script>

<style lang="scss" scoped>
  .text-2xl {
    font-weight: 800;
  }
</style>
