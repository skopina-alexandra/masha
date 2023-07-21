<script setup>
defineProps({
  text: String,
  image: String,
});
</script>

<template>
  <div class="flex flex-row justify-start items-center h-1/6 mb-3">
    <img :src="image" class="h-10" />
    <h3 class="text-3xl font-bold ml-5">
      {{ text }}
    </h3>
  </div>
</template>
