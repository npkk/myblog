<template>
  <div>
    <v-app>
      <v-app-bar color="white" elevation="0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-app-bar-title>
          <NuxtLink event="" @click.native="navigatoTo('/')">
            npkk
          </NuxtLink>
          <v-btn to="/" :ripple="false" :variant="text">
            <div class="appbar-title">
              npkk
            </div>
          </v-btn>
        </v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute bottom>
        <v-list>
          <v-list-item link to="/posts">
            <v-list-item-title >
              posts
            </v-list-item-title>
          </v-list-item>
          <v-list-item link to="/about">
            <v-list-item-title >
              about
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import { NuxtLink } from '~/.nuxt/components';

const drawer = useState('drawer', () => false)
</script>

<style scoped>
.appbar-title{
  font-size: 1.5em;
}
</style>