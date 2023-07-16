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
  <div>
    <PrinciplesHeader :text="item.header" :image="item.image" />
    <p>{{ item.text }}</p>
  </div>
</template>
