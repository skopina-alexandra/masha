<script setup>
defineProps({
    item : {
        header: String,
        text: String,
    }
});
</script>
<template>
    <div>

        <PrinciplesHeader :text="item.header" />
        <p>{{ item.text }}</p>
    </div>
</template>