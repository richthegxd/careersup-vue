<template>
  <header :class="['w-full', 'text-sm', 'duration-300', headerHeightClass]">
    <div class="fixed z-10 top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <Logo />
        <Nav />

        <div class="flex items-center h-full ml-auto">
          <template v-if="isLoggedIn">
            <UserProfile />
          </template>

          <template v-else>
            <Button color="primary" label="Sign In" @click="loginUser" />
          </template>
        </div>
      </div>

      <template v-if="isLoggedIn">
        <Subnav />
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

// * Vuex key
import { key } from "@/store";

// * Header components
import Logo from "./HeaderLogo.vue";
import Nav from "./Navigation/HeaderNav.vue";
import Subnav from "./Subnavigation/HeaderSubnav.vue";
import UserProfile from "./HeaderUserProfile.vue";

// * Common components
import Button from "@/components/Shared/Button/Button.vue";

// * Main
const store = useStore(key);

const isLoggedIn = computed(() => store.state.isLoggedIn);

const headerHeightClass = computed(() => (isLoggedIn.value ? "h-32" : "h-16"));

function loginUser() {
  store.commit("LOGIN_USER");
}
</script>
