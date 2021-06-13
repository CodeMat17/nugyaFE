<template>
  <div class="min-h-screen bg-green-100">
    <div class="px-4 py-10 max-w-lg mx-auto">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-semibold sm:text-2xl">Mail:</h1>
        <button
          @click="$router.back()"
          class="
            border
            px-4
            py-2
            rounded-lg
            bg-gray-200
            shadow-lg
            focus:outline-none
            focus:shadow-outline
          "
        >
          Back
        </button>
      </div>
      <div v-if="error" class="text-center text-red-500 bg-red-200 px-4 py-8 rounded-lg">
        {{ error }}
      </div>
      <div class="mt-8 space-y-2">
        <div class="space-x-2">
          <button
            v-if="!message.seen"
            @click="seenMsg"
            class="
              text-blue-500
              bg-blue-200
              rounded-lg
              px-3
              py-1
              focus:outline-none
              focus:shadow-outline
            "
          >
            {{ seeing ? "wait..." : "seen" }}
          </button>
          <button
            @click="closeMsg"
            class="
              text-red-500
              bg-red-200
              rounded-lg
              px-3
              py-1
              focus:outline-none
              focus:shadow-outline
            "
          >
            {{ deleting ? "deleting..." : "delete" }}
          </button>
        </div>

        <div class="text-gray-600">
          <h2 class="font-semibold sm:text-lg">From: {{ message.name }}</h2>
          <h2 class="font-semibold sm:text-lg">
            Phone No: {{ message.phone }}
          </h2>
          <h2 class="font-semibold sm:text-lg">
            Subject: {{ message.subject }}
          </h2>
        </div>

        <div class="text-gray-800">
          <label class="font-semibold sm:text-lg">Message:</label>
          <h2 class="font-semibold sm:text-lg">{{ message.message }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      seeing: false,
      deleting: false,
    };
  },
  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    try {
      const message = await $strapi.$messages.findOne(id);

      return { message };
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    async seenMsg() {
      this.seeing = true;
      const id = this.$route.params.id;
      await this.$strapi.$messages.update(id, {
        seen: true,
      });
      this.seeing = false;
      this.$nuxt.refresh();
    },
    async closeMsg() {
      this.deleting = true;
      const id = this.$route.params.id;
      await this.$strapi.$messages.delete(id);
      this.deleting = false;
      this.$nuxt.$router.push("/adminPanel");
    },
  },
};
</script>