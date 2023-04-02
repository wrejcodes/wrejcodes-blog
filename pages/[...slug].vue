<template>
  <NuxtLayout name="default">
    <template #below-header>
      <h1 class="text-2xl mb-2">
        {{ data.title }}
      </h1>
      <span class="font-light text-rhino-500">{{ data.date }}</span>
      <div class="flex flex-wrap mt-2 mb-4 text-sm">
        <span
          v-for="tag in data.tags"
          :key="tag"
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
          {{ tag }}
        </span>
      </div>
      <!-- Image -->
      <figure
        v-if="data.image"
        class="flex flex-col"
      >
        <NuxtImg
          :alt="data.image.alt"
          :src="data.image.path"
          class="mb-2"
          loading="lazy"
        />
        <figcaption
          class="self-center image-caption mb-12"
          v-html="data.image.caption"
        />
      </figure>
    </template>
    <main class="mt-8 mb-16 prose lg:prose-lg xl:prose-xl">
      <ContentDoc />
    </main>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
    layout: false,
});
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).only(['title', 'date', 'image', 'tags']).findOne();
})
</script>

<style lang="scss" scoped>
    .text-2xl {
        font-weight: 800;
    }
</style>