<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import { useAppStore } from './stores/app';

 
const appStore = useAppStore();

</script>

<template>
  <div id="app" class="w-full min-h-screen bg-white">
    <!-- Header -->
    <Header v-if="appStore.showHeader"/>

    <!-- Main Content -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <component :is="Component"  />  
      </router-view>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
