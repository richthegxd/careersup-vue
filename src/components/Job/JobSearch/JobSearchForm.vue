<template>
  <form
    class="flex items-center w-full h-[50px] mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <FontAwesomeIcon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute font-normal left-0 -top-10">Role</label>
        <Input
          v-model="role"
          placeholder="Software engineer"
          data-test="role-input"
        />
      </div>

      <span
        class="flex items-center h-full font-normal px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
      >
        in
      </span>

      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute font-normal left-0 -top-10">Where?</label>
        <Input
          v-model="location"
          placeholder="Los Angeles"
          data-test="location-input"
        />
      </div>

      <Button
        label="Search"
        color="secondary"
        class="rounded-r-[1.3rem]"
        data-test="submit-button"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// * Common components
import Input from "@/components/Shared/TextInput/TextInput.vue";
import Button from "@/components/Shared/Button/Button.vue";

// * Inputs models
const role = ref("");
const location = ref("");

const router = useRouter();

function searchForJobs() {
  router.push({
    name: "jobs-results",
    query: {
      role: role.value,
      location: location.value,
    },
  });
}
</script>
