<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="px-4 py-8 max-w-2xl mx-auto">
      <h1 class="border-b-2 border-green-500 inline text-green-500 text-2xl">
        Executive Details:
      </h1>
      <div
        v-if="error"
        class="py-8 px-4 text-center text-lg text-red-500 tracking-widest font-semibold"
      >
        {{ error }}
      </div>
      <Loader v-else-if="!executive" />
      <div v-else class="mt-8 bg-white rounded-lg overflow-hidden shadow-xl">
        <div
          class="px-8 flex flex-col md:flex-row items-center justify-center md:justify-between py-8 bg-green-400"
        >
          <div>
            <div v-if="executive.image">
              <img
                :src="executive.image"
                alt="executive photo"
                class="rounded-full w-56 h-56 object-center object-cover"
              />
            </div>
            <Loader v-else />
          </div>
          <div class="text-center mt-2 md:mt-0 md:text-right">
            <h1
              class="text-xl md:text-2xl font-semibold text-gray-800 tracking-wide"
            >
              {{ executive.post }}
            </h1>
            <h3 class="text-xl text-gray-700">
              {{ executive.name }}
            </h3>
            <div class="text-gray-700">
              <div
                class="mt-4 flex items-center justify-center md:justify-end space-x-12"
              >
                <svg
                  v-if="executive.phone"
                  @click="phoneNo = !phoneNo"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 cursor-pointer text-blue-600 hover:opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <a
                  v-if="executive.mail"
                  :href="executive.mail"
                  target="_blank"
                  class="text-blue-600 hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
              <h1 v-if="phoneNo" class="mt-2 text-white">
                +{{ executive.phone }}
              </h1>
            </div>
          </div>
        </div>
        <div class="p-4 tracking-wide sm:text-lg">
          <p class="font-semibold text-gray-700">Bio</p>
          <p v-if="executive.bio" v-html="$md.render(executive.bio)"></p>
          <p v-else>No biodata yet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      executive: Object,
      phoneNo: false,
      error: "",
    };
  },
  async asyncData({ route, $strapi }) {
    const slug = route.params.id;
    try {
      const executive = await $strapi.$executives.findOne(slug);
      return { executive };
    } catch (error) {
      this.error = error;
    }
  },
  mounted() {
    gsap.from(".loader", {
      duration: 2,
      opacity: 0,
      y: 10,
      ease: "back",
      stagger: 0.25,
      repeat: -1,
    });
  },
};
</script>