<script setup lang="ts">
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div id="app" class="w-full min-h-screen bg-white">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
