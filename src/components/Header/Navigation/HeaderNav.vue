<template>
  <nav class="h-full ml-16">
    <ul class="flex h-full p-0 m-0 list-none gap-11">
      <template v-for="(navItem, index) in navItems" :key="index">
        <li
          class="h-full"
          @mouseover="setBorderParams($event, navItem.borderColor)"
        >
          <RouterLink
            :to="navItem.url"
            class="flex items-center h-full font-medium text-brand-gray-5 py-2.5 hover:text-brand-black-1 duration-300"
          >
            {{ navItem.label }}
          </RouterLink>
        </li>
      </template>

      <Border :params="borderParams" class="absolute bottom-0" />
    </ul>
  </nav>
</template>

<script setup lang="ts">
// * Composables
import { useNavBorderParams } from "@/composables/useNavBorderParams";

// * Border component that changes position depending on the hovered nav item
import Border from "./HeaderNavBorder.vue";

// * Nav items
import navItems from "../constants/nav-items.consts";

const { borderParams, setBorderParams } = useNavBorderParams();
</script>
