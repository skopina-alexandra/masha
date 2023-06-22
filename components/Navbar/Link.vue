<script setup>
defineProps({
    text: String,
    href: String,
});
</script>

<template>
    <a :href="href" class="tracking-wide border-b border-dashed border-font hover:border-solid">{{ text }}</a>
</template>

<style lang="scss" scoped>

</style>