<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flow-row flex-wrap">
        <template v-for="value in values" :key="value">
          <li class="w-1/2 h-8 text-sm">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </template>
      </ul>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// * Constants
import { CLEAR_USER_JOB_FILTER_SELECTION } from "@/store/constants";

// * Vuex key
import { key } from "@/store";

const props = defineProps({
  values: {
    type: [Array, Set] as PropType<string[] | Set<string>>,
    default: () => [],
  },

  mutation: {
    type: String,
    required: true,
  },
});

// * Main
const store = useStore(key);
const router = useRouter();

const selectedValues = ref<string[]>([]);

store.subscribe((mutation) => {
  if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTION) {
    selectedValues.value = [];
  }
});

function selectValue() {
  store.commit(props.mutation, selectedValues.value);
  router.push({ name: "jobs-results" });
}
</script>
