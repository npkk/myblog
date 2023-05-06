<template>
    <div class="d-flex flex-column justify-center mx-6">
        <div v-for="post in posts">
            <!-- <nuxt-link :to="'/posts/' + post.slug">{{ post.title }}</nuxt-link> -->
            <v-card class="my-4" outlined>
                <v-card-item>
                    <v-card-title>
                        {{ post.title }}
                    </v-card-title>
                </v-card-item>
            </v-card>
        </div>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => {
    return queryContent('posts').find()
})
</script>