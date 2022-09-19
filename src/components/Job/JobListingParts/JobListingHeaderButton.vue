<template>
  <Menu class="relative">
    <MenuButton>
      <div
        :class="[
          'text-sm',
          'font-medium',
          'border',
          'border-solid',
          'duration-300 ',
          'py-1',
          'px-3',
          'rounded-3xl',
          buttonClass,
        ]"
      >
        <FontAwesomeIcon :icon="icon" class="mr-1" />
        {{ label }}
      </div>

      <slot name="dropdown"></slot>
    </MenuButton>
  </Menu>
</template>

<script setup lang="ts">
import { computed } from "vue";

// * Tailwind components
import { Menu, MenuButton } from "@headlessui/vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },

  icon: {
    type: Array,
    default: () => [],
  },

  active: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() =>
  props.active
    ? ["text-brand-blue-1", "border-brand-blue-1"]
    : [
        "border-brand-gray-1",
        "border-brand-gray-1",
        "hover:text-brand-blue-1",
        "hover:border-brand-blue-1",
      ]
);
</script>
