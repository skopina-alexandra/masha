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
    <PrinciplesHeader :text="item.header" :image="item.image" />
    <p class="">{{ item.text }}</p>
  </div>
</template>
