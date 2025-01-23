<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
];

const router = useRouter();
function go404() {
  router.push({ path: `/404-${Math.random()}` });
}
</script>

<template>
  <div class="flex flex-col p-4">
    <nav class="flex gap-4 flex-row border-b border-gray-300 dark:border-gray-500 pb-4 mb-4">
      <RouterLink
        v-for="route in routes" :key="route.path"
        class="px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
        active-class="bg-gray-900 hover:bg-gray-900 text-gray-100 dark:bg-gray-100 hover:dark:bg-gray-100 dark:text-gray-900"
        :to="route.path"
      >
        {{ route.title }}
      </RouterLink>
      <a href="javascript:;" class="px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-500" @click="go404()">
        404
      </a>
    </nav>

    <RouterView />
  </div>
</template>
