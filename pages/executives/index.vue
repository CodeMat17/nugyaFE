<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="space-y-4 px-4 py-8 max-w-6xl mx-auto">
      <div class="py-4 sm:my-8 md:mb-12">
        <h1
          class="uppercase tracking-wider font-semibold border-b-2 border-green-600 inline text-xl text-green-600"
        >
          Executives
        </h1>
      </div>
      <div
        v-if="error"
        class="py-8 px-4 text-center text-lg text-red-500 tracking-widest font-semibold"
      >
        {{ error }}
      </div>
      <Loader v-else-if="$apollo.queries.executives.loading"/>

      <div v-else class="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
        <div
          v-for="executive in executives"
          :key="executive.id"
          class="my-4 sm:my-0"
        >
          <div
            class="max-w-md mx-auto border rounded-xl shadow-xl bg-white overflow-hidden"
          >
            <div class="relative">
              <img
                v-if="executive.image"
                :src="executive.image"
                alt="executive photo"
                class="w-full h-64 object-cover object-top"
              />
              <n-link
                :to="{ name: 'executives-id', params: { id: executive.slug } }"
                class="absolute bottom-0 right-0 bg-blue-100 m-2 px-2 py-1 border-2 border-blue-500 rounded-full tracking-wider text-sm text-blue-500"
                >Details</n-link
              >
            </div>
            <div class="px-4 py-2 font-semibold tracking-wide">
              <h1 class="text-xl text-gray-800 truncate">
                {{ executive.post }}
              </h1>
              <p class="text-lg text-gray-600 truncate">{{ executive.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { executivesQuery } from "~/graphql/query";
export default {
  name: "Executives",
  head() {
    return {
      title: "Executives",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Executives",
        },
      ],
    };
  },
  data() {
    return {
      executives: [],
      error: "",
    };
  },
  apollo: {
    executives: {
      prefetch: true,
      query: executivesQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  mounted() {
    gsap.from(".ld", {
      duration: 1.5,
      opacity: 0,
      y: 10,
      ease: "back",
      stagger: 0.25,
      repeat: -1,
    });
  },
};
</script>