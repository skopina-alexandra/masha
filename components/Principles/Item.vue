<script setup>
defineProps({
    text: String,
    imageSrc: String,
});
</script>
<template>
    <PrinciplesHeader :text="text" :image-src="imageSrc" />
</template>