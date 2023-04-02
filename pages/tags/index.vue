<template>
  <h1 class="text-xl font-semibold mb-5">
    Tags
  </h1>

  <ul
    class="list-outside list-disc mb-6"
  >
    <li
      v-for="tag of tags"
      :key="tag"
      class="mt-3"
    >
      <NuxtLink
        :to="`/tags/${tag}`"
      >
        {{ tag }}
      </NuxtLink>
    </li>
  </ul>

  <NuxtLink to="/blog">
    See all blogs
  </NuxtLink>
</template>

<script setup>
const tags = [...new Set((await queryContent('blog').only('tags').find())
    .flatMap((blog) => blog.tags))]
</script>