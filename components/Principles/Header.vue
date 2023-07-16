<script setup>
defineProps({
    text: String,
    image: String,
});
</script>

<template>
    <div class="grid grid-flow-col grid-cols-3">
        <img :src="image">
        <h3>
            {{ text }}
        </h3>
    </div>
</template>