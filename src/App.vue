<template>
  <div>
    <Header />

    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="duration-500"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
// * Common components
import Header from "@/components/Header/Header.vue";
</script>
