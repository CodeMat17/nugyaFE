<template>
  <div class="bg-green-100 w-full h-screen">
    <div class="px-4 py-16 max-w-md mx-auto">
      <div class="flex justify-end">
        <button @click="$router.back()">Back</button>
      </div>
      <div
        class="border mt-4 px-4 py-6 rounded-lg shadow-xl"
        :class="member.show ? 'bg-white' : 'bg-red-200'"
      >
        <h1 v-if="error" class="pb-3 text-red-500 text-center">{{ error }}</h1>
        <div class="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!member.show"
              class="text-red-500"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
            <path
              v-if="member.show"
              class="text-green-500"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            v-if="updating"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-green-500 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
        <h1 class="text-lg py-2 text-center tracking-wide">
          {{ member.name }}
        </h1>
        <div class="flex justify-end mt-4">
          <button
            v-if="!member.show"
            @click="unblockUser"
            class="bg-green-200 py-2 px-4 rounded-lg shadow-xl text-green-500 tracking-wide"
          >
            UNBLOCK
          </button>
          <button
            v-if="member.show"
            @click="blockUser"
            class="bg-red-200 py-2 px-4 rounded-lg shadow-xl text-red-500 tracking-wide"
          >
            BLOCK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin-Panel",
  head() {
    return {
      title: "Admin Panel",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Admin Panel",
        },
      ],
    };
  },
  data() {
    return {
      member: Object,
      error: "",
      updating: false,
    };
  },
  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    try {
      const member = await $strapi.$members.findOne(id);
      return { member };
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    async unblockUser() {
      this.updating = true;
      this.error = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          show: true,
        });
        this.updating = false;
        console.log("status: UNBLOCKED!");
        this.$toasted.show("User is UNBLOCKED", {
          position: "top-center",
           duration:5000,
        });
        this.$nuxt.$router.push("/adminPanel");
      } catch (error) {
        this.updating = false;
        this.error = error.message;
      }
    },

    async blockUser() {
      this.updating = true;
      this.error = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          show: false,
        });
        this.updating = false;
        console.log("status: BLOCKED!");

        this.$toasted.show("User is BLOCKED", {
          position: "top-center",
          duration:5000,
        });
        this.$nuxt.$router.push("/adminPanel");
      } catch (error) {
        this.updating = false;
        this.error = error.message;
      }
    },
  },
};
</script>