<template>
  <div class="bg-green-100 min-h-screen">
    <div class="max-w-lg mx-auto px-4 py-8">
      <div class="flex justify-end">
        <button
          @click="$router.back()"
          class="
            border
            shadow-lg
            bg-gray-200
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
      <div class="mt-4">
        <h1 class="text-xl font-semibold tracking-wider">Users:</h1>
        <div
          v-if="$apollo.queries.users.loading"
          class="flex justify-center py-10 space-x-2"
        >
          <div class="dot w-3 h-3 bg-green-500 rounded-full"></div>
          <div class="dot w-3 h-3 bg-green-500 rounded-full"></div>
          <div class="dot w-3 h-3 bg-green-500 rounded-full"></div>
          <div class="dot w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div
          v-if="error"
          class="text-center text-red-500 bg-red-200 px-4 py-8 rounded-lg mt-4"
        >
          {{ error }}
        </div>
        <div v-else class="mt-4">
          <div v-for="user in users" :key="user.id">
            <n-link
              :to="{ name: 'usersPage-id', params: { id: user.id } }"
              class="
                bg-gray-800
                block
                p-4
                mb-3
                rounded-lg
                text-gray-200
                uppercase
                tracking-wide
              "
            >
              <div
                class="flex items-center justify-between"
                :class="user.blocked ? 'text-red-500' : 'text-gray-200'"
              >
                <h1 class="truncate">{{ user.username }}</h1>
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
</template>

<script>
import { usersQuery } from "~/graphql/query";
export default {
  data() {
    return {
      users: [],
      error: "",
    };
  },
  apollo: {
    users: {
      prefetch: true,
      query: usersQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  mounted() {
    gsap.from(".dot", {
      duration: 2,
      opacity: 0,
      y: 15,
      ease: "back",
      stagger: 0.25,
      repeat: -1,
    });
  },
 
};
</script>