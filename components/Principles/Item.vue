<script setup>
defineProps({
  item: {
    header: String,
    text: String,
    image: String,
  },
});
</script>
<template>
  <div class="py-5">
    <PrinciplesHeader class="mb-10" :text="item.header" :image="item.image" />
    <p class="text-xl">{{ item.text }}</p>
  </div>
</template>
