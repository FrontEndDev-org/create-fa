<script setup lang="ts">
import { useSampleStore } from '../store/sample';

const sample = useSampleStore();
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="text-4">
      /pages/about.tsx
    </p>
    <p class="text-4">
      Store randomNumber = {{ sample.randomNumber }}
    </p>
  </div>
</template>
