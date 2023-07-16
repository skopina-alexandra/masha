<script setup>
defineProps({
  text: String,
  image: String,
});
</script>

<template>
  <!-- <div class="grid grid-flow-col grid-cols-2 h-1/5 mb-3"> -->
  <div class="flex flex-row justify-start items-center h-1/6 mb-3">
    <img :src="image" class="h-10" />
    <h3 class="text-2xl font-bold ml-8">
      {{ text }}
    </h3>
  </div>
</template>
