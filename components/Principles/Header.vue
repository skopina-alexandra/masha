<script setup>
defineProps({
    text: String,
    imageSrc: String,
});
</script>

<template>
    <h3>
        {{ text }}
    </h3>
</template>