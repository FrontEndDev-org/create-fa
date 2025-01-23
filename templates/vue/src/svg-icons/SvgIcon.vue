<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  icon: string;
  fill?: string;
}>(), {
  fill: 'currentColor',
});

const symbolId = computed(() => {
  const [dir, name] = props.icon.split('/');
  const id = name ? `${dir}/${name}` : `/${dir}`;
  return `#icon-${id}`;
});
</script>

<template>
  <svg aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="symbolId" :fill="fill" />
  </svg>
</template>
