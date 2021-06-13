<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-xl mx-auto px-2 py-8">
      <div class="my-4 py-2">
        <div class="flex justify-end pb-4">
          <button @click="$router.back()" class="bg-yellow-200 px-6 py-2 rounded-full shadow-lg focus:outline-none focus:shadow-outline">Back</button>
        </div>
        <div class="p-3 mb-6 bg-yellow-200 shadow-xl rounded-lg">
          <h1 class="font-semibold text-xl tracking-wide">Update Member:</h1>
          <div
            v-if="$apollo.queries.members.loading"
            class="flex justify-center py-8 tracking-widest text-lg space-x-2"
          >
            <p class="loading">l</p>
            <p class="loading">o</p>
            <p class="loading">a</p>
            <p class="loading">d</p>
            <p class="loading">i</p>
            <p class="loading">n</p>
            <p class="loading">g</p>
            <p class="loading">.</p>
            <p class="loading">.</p>
            <p class="loading">.</p>
          </div>

          <div
            v-if="error"
            class="text-red-500 bg-red-200 rounded-lg text-center px-4 py-8"
          >
            {{ error }}
          </div>

          <div v-else>
            <form class="mt-2">
              <input
                type="search"
                name="name"
                id="name"
                v-model="query"
                placeholder="Enter search name"
                class="w-full rounded-lg"
              />
            </form>
            <div v-for="member in filteredList" :key="member.id" class="mt-4">
              <n-link
                :to="{ name: 'updateMember-id', params: { id: member.id } }"
              >
                <div
                  class="
                    bg-gray-800
                    px-4
                    py-3
                    text-lg
                    rounded-lg
                    text-gray-200
                    flex
                    justify-between
                  "
                  :class="!member.show ? 'text-red-500' : 'bg-gray-200'"
                >
                  <h1 class="truncate">{{ member.name }}</h1>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { membersQuery } from "~/graphql/query";
export default {
  name: "Admin-Panel",
  // middleware: 'superadmin',
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
      name: "",
      email: "",
      phone: "",
      family: "",
      village: "",
      occupation: "",
      error: "",
      query: "",
      members: [],
    };
  },
  apollo: {
    members: {
      prefetch: true,
      query: membersQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  computed: {
    filteredList() {
      return this.members.filter((member) => {
        return member.name.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
  mounted() {
    gsap.from(".loading", {
      duration: 2,
      opacity: 0,
      y: 15,
      ease: "back",
      repeat: -1,
      stagger: 0.23,
    });
    gsap.from(".loading2", {
      duration: 2,
      opacity: 0,
      y: 15,
      ease: "back",
      repeat: -1,
      stagger: 0.23,
    });
  },
  async asyncData({ $strapi }) {
    const mailCount = await $strapi.$messages.count();
    return { mailCount };
  },
};
</script>