<template>
    <div>
        <span class="title">{{ post.title }}</span>
        <ContentRenderer :value="post" />
    </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug;
const { data: post } = await useAsyncData(`post-${slug}`, () => {
    return queryContent('posts').where({ slug: slug }).findOne()
})
</script>

<style scoped>
.title {
    font-size: 2.5em;
}
</style>