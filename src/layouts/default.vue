<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar color="white" elevation="0">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
          <v-app-bar-title class="d-flex">
            <div class="appbar-title" @click.native="navigateTo('/')">
              限界ブログ
            </div>
            <v-spacer />
          </v-app-bar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer">
          <v-list>
            <v-list-item link to="/posts">
              <v-list-item-title>
                posts
              </v-list-item-title>
            </v-list-item>
            <v-list-item link to="/about">
              <v-list-item-title>
                about
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-layout>
          <v-container class="ma-6">
            <slot />
          </v-container>
        </v-layout>
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
const drawer = useState('drawer', () => false)
</script>

<style scoped>
.appbar-title {
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
}
</style>