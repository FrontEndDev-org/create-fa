<script setup lang="ts">
import { findPetsByStatus, getPetById } from '@/apis/.petStore3';
import { useRequest } from 'vue-request';

const { data: pets, loading } = useRequest(() => findPetsByStatus('available'));
</script>

<template>
  <p v-if="loading" className="text-gray-4 dark:text-gray-6">loading...</p>
  <ul v-else className="lh-[2] list-disc list-inside">
    <li v-for="pet in pets" :key="pet.id">
      {{ pet.name }}
    </li>
  </ul>
</template>
