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
    <div
      class="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
      v-html="$page.post.content"
    />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
    post: blogPost (path: $path) {
        title
        date (format: "MMM D, Y")
        content
        tags {
          title
          path
        }
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss" scoped>
  .text-2xl {
    font-weight: 800;
  }
</style>
