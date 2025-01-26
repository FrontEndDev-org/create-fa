<script setup lang="ts">
import { useSampleStore } from '../store/sample';
import SvgIcon from '../svg-icons/SvgIcon.vue';
import Pets from './components/Pets.vue';

const sample = useSampleStore();

function changeNumber() {
  sample.randomNumber = Math.random();
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="text-4">
      /pages/index.tsx
    </p>
    <p class="text-4">
      Store randomNumber = {{ sample.randomNumber }}
    </p>

    <div>
      <button type="button" class="flex gap-2 items-center rounded px-4 py-2" @click="changeNumber()">
        <SvgIcon icon="sample/random" class="w-6 h-6" />
        Random Number
      </button>
    </div>

    <h1 className="text-10">Pets</h1>
    <Pets />
  </div>
</template>
