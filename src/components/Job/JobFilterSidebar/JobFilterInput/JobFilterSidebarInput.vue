<template>
  <div class="mt-5">
    <input
      v-model.trim="model"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray-4 rounded w-full text-base placeholder:font-normal placeholder:text-brand-gray-4 outline-0 focus:border-brand-blue-1 duration-300"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// * Vuex
import { useStore } from "vuex";
import { key } from "@/store";
import { CLEAR_USER_JOB_FILTER_SELECTION } from "@/store/constants";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },

  placeholder: {
    type: String,
    default: "",
  },

  mutation: {
    type: String,
    default: "",
  },
});

// * Main
const store = useStore(key);

// * Input model
const model = computed({
  get() {
    return props.value;
  },
  set(value) {
    store.commit(props.mutation, value);
  },
});

store.subscribe((mutation) => {
  if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTION) {
    model.value = "";
  }
});
</script>
