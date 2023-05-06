<template>
    <div class="mx-4 my-4">
        <span class="title ">{{ post.title }}</span>
    </div>
    <div class="created_at">
        <v-icon :size="20">mdi-update</v-icon>
        {{ post.created_at }}
    </div>
    <div class="updated_at" v-if="post.updated_at">
        {{ post.updated_at }}
    </div>
    <div class="d-inline-flex align-center py-2 tags">
        <div>tags: </div>
        <div v-for="tag in post.tags" :key="tag">
            <v-chip class="mx-1">
                {{ tag }}
            </v-chip>
        </div>
        <div v-if="!!!post.tags || post.tags.length === 0">
            なし
        </div>
    </div>
    <div>
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
    font-size: 30px;
}

.tags {
    vertical-align: middle;
}
</style>