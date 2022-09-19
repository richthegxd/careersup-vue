<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <MenuItems
      class="absolute text-left px-2 py-2 right-0 z-10 mt-2 w-56 origin-top-right border border-solid border-brand-gray-1 rounded-md bg-white focus:outline-none"
    >
      <MenuItem>
        <div class="flex flex-row items-center">
          <a
            class="text-xs py-2 px-3 border border-solid border-brand-gray-1 rounded text-ellipsis overflow-hidden"
          >
            {{ jobLink }}
          </a>
          <Button
            label="Copy"
            color="secondary"
            class="text-xs !p-2 rounded ml-2"
            @click="copyLink(jobLink)"
          />
        </div>
      </MenuItem>
    </MenuItems>
  </transition>
</template>

<script setup>
import { computed } from "@vue/reactivity";

// * Utils
import { copyLink } from "@/utils/copyLink";

// * Tailwind components
import { MenuItem, MenuItems } from "@headlessui/vue";

// * Shared components
import Button from "@/components/Shared/Button/Button.vue";

const props = defineProps({
  jobPageLink: {
    type: String,
    default: "",
  },
});

const jobLink = computed(() => `${location.origin}${props.jobPageLink}`);
</script>
