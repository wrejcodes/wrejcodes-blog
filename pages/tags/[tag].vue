<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <h1 class="text-xl font-semibold mb-5">
    Tag: {{ tag }}
  </h1>

  <ContentNavigation
    v-slot="{ navigation }"
    :query="query"
  >
    <ul
      v-for="link of navigation"
      :key="link._path"
      class="list-outside list-disc mb-6"
    >
      <li
        v-for="blog of link.children"
        :key="blog._path"
        class="mt-3"
      >
        <NuxtLink
          :to="blog._path"
        >
          {{ blog.title }} - {{ blog.date }}
        </NuxtLink>
      </li>
    </ul>
  </ContentNavigation>

  <NuxtLink to="/tags">
    See all tags
  </NuxtLink>
</template>

<script setup>
const tag = useRoute().params.tag;
const query = queryContent().where({ _path: /^\/blog/, tags: {$contains: tag} });
</script>