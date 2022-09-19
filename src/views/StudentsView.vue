<template>
  <main>
    <HeaderContainer>
      <template #title>
        <h1 class="w-full text-[40px] font-medium">Students</h1>
      </template>

      <template #subtitle>
        <h2 class="w-full my-4 text-base font-light text-brand-gray-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
          laudantium.
        </h2>
      </template>
    </HeaderContainer>

    <div class="flex flex-col items-center justify-center mt-5">
      <h2 class="text-[200px] text-brand-gray-1">(o^^)o</h2>
      <p class="mt-5 text-2xl font-medium">
        Someday there will be something...
      </p>

      <RouterLink to="/">
        <Button
          label="Return to home"
          color="secondary"
          class="mt-5 text-sm rounded"
        />
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
// * Common components
import HeaderContainer from "@/components/Shared/HeaderContainer/HeaderContainer.vue";
import Button from "@/components/Shared/Button/Button.vue";
</script>
