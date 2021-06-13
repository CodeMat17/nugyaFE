<template>
  <div class="bg-red-100 text-center text-red-500">
    <div v-if="error.statusCode === 404" class="w-full h-screen px-4 py-16 max-w-xl mx-auto space-y-6">
      <h1 class="font-black text-4xl tracking-widest">
         NSOGBU !!! 
      </h1>
      <p class="text-2xl">The page you have requested for does not exist or has been removed.</p>
      <br>
      <br>
      <n-link to="/" class=" bg-red-500 text-red-200 px-6 py-3 rounded-lg shadow-xl">Return to home-page</n-link>
    </div>
    <div v-else class="w-full h-screen px-4 py-16 max-w-xl mx-auto space-y-6">
      <h1 class="font-black text-4xl tracking-widest">
         NSOGBU !!! 
      </h1>
      <p class="text-2xl">Something went wrong.</p>
      <br>
      <br>
      <n-link to="/" class=" bg-red-500 text-red-200 px-6 py-3 rounded-lg shadow-xl">Return to home-page</n-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>