<template>
    <div>
        <p>HELLO!</p>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('find', () => {
    return queryContent('posts').find()
})
</script>