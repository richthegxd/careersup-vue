<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-3 col-span-4">
          <Headline />
          <JobSearchForm />
        </div>

        <div class="col-start-8 col-span-3 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="grid grid-cols-12 pb-20 bg-gray-gradient">
        <div class="col-start-3 col-span-12">
          <h2
            class="text-[11px] text-brand-gray-4 uppercase font-medium tracking-[.5px] mb-[1.67rem]"
          >
            Spotlight
          </h2>

          <SpotlightList :position="100" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// * Hero components
import Headline from "./HeroHeadline.vue";

// * Spotlights
import SpotlightList from "./Spotlights/SpotlightList.vue";

// * Form for search jobs
import JobSearchForm from "@/components/Job/JobSearch/JobSearchForm.vue";
</script>
