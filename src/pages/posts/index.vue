<template>
    <div class="d-flex flex-column justify-center">
        <div v-for="post in posts" :key="post">
            <!-- <nuxt-link :to="'/posts/' + post.slug">{{ post.title }}</nuxt-link> -->
            <v-card class="mb-4 rounded-lg" outlined :to="'/posts/' + post.slug" style="max-width:100%" :ripple="false">
                <v-card-item>
                    <v-card-title class="py-2">
                        <div class="d-flex flex-wrap justify-space-between">
                            <div class="title">
                                {{ post.title }}
                            </div>
                            <v-spacer />
                            <div>
                                <v-icon :size="20">mdi-upload</v-icon>
                                <span class="created_at">
                                    {{ $dayjs(post.created_at).format('YYYY/MM/DD') }}
                                </span>
                            </div>
                            <div v-if="post.updated_at">
                                <v-icon :size="20">mdi-update</v-icon>
                                <span class="updated_at">
                                    {{ $dayjs(post.updated_at).format('YYYY/MM/DD') }}
                                </span>
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-subtitle class="d-flex flex-column">
                        <div class="py-2 description">
                            {{ post.description }}
                        </div>
                        <div class="py-2 d-flex">
                            <div v-for="tag in post.tags" :key="tag">
                                <v-chip class="mx-1">
                                    {{ tag }}
                                </v-chip>
                            </div>
                        </div>
                    </v-card-subtitle>
                </v-card-item>
            </v-card>
        </div>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => {
    return queryContent('posts')
        .where({ created_at: { $exists: true } })
        .find()
})
const nuxtApp = useNuxtApp()
const formatDate = nuxtApp.$dayjs().format('YYYY/MM/DD')
</script>

<style scoped>
.title {
    font-size: 30px;
}

.created_at .updated_at {
    font-size: 0.8rem;
}
</style>