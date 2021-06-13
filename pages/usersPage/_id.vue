<template>
  <div class="bg-green-100 min-h-screen">
    <div class="px-4 py-8 max-w-md mx-auto">
      <div class="flex justify-end">
        <button
          @click="$router.back()"
          class="
            border
            shadow-lg
            bg-green-500
            text-gray-200
            px-6
            py-2
            rounded-full
            focus:outline-none
            focus:shadow-outline
          "
        >
          Back
        </button>
      </div>
      <div v-if="error" class="mt-4 py-8 px-4 text-center text-red-500">
        {{ error }}
      </div>
      <div
        v-else
        class="mt-4 border rounded-lg overflow-hidden bg-white shadow-lg"
      >
        <h1
          class="
            py-6
            px-4
            text-xl text-center text-gray-200
            truncate
            font-semibold
            tracking-wide
          "
          :class="user.blocked ? 'bg-red-500' : 'bg-green-500'"
        >
          {{ user.username }}
        </h1>
        <div class="py-4">
          <div class="my-4 flex justify-center space-x-2 text-lg">
            <h1>User</h1>
            <div class="flex space-x-2">
              <h1 v-if="user.blocked" class="text-red-500">is blocked</h1>
              <h1 v-else class="text-green-500">has permission</h1>
            </div>
          </div>
          <div class="py-4 flex justify-center">
            <button
            @click="unblock"
              v-if="user.blocked"
              class="bg-green-200 text-green-500 px-6 py-2 rounded-lg focus:outline-none focus:shadow-outline"
            >
              <div class="flex items-center justify-center">
                <svg
                  v-if="unblocking"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p>{{ unblocking ? "Unblocking..." : "UNBLOCK" }}</p>
              </div>
            </button>
            <button @click="block" v-else class="bg-red-200 text-red-500 px-6 py-2 rounded-lg focus:outline-none focus:shadow-outline">
              <div class="flex items-center justify-center">
                <svg
                v-if="blocking"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p>{{ blocking ? 'Blocking...' : 'BLOCK' }}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: Object,
      error: "",
      unblockError: "",
      unblocking: false,
      blocking: false,
       blockError: "",
    };
  },
  async asyncData({ $strapi, route }) {
    try {
      const id = route.params.id;
      const user = await $strapi.$users.findOne(id);
      return { user };
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    async unblock() {
      this.unblocking = true;
      this.unblockError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$users.update(id, {
          blocked: false,
        });
        this.$toasted.success("User has been unblocked!", {
          position: "top-center",
          duration: 5000,
        });
        this.$nuxt.refresh();
        this.unblocking = false;
      } catch (error) {
          this.unblocking = false;
        this.unblockError = error.message;
        this.$toasted.error(this.unblockError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

     async block() {
      this.blocking = true;
      this.blockError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$users.update(id, {
          blocked: true,
        });
        this.$toasted.error("User has been BLOCK!", {
          position: "top-center",
          duration: 5000,
        });
        this.$nuxt.refresh();
        this.blocking = false;
      } catch (error) {
          this.blocking = false;
        this.blockError = error.message;
        this.$toasted.error(this.blockError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },
  },
};
</script>