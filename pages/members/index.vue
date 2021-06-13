<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="px-4 pt-2 pb-8 max-w-lg mx-auto">
      <div class="py-6">
        <h1 class="font-semibold text-xl tracking-widest">
          Verified Members (<span>{{ membersCount }}</span>)
        </h1>
      </div>

      <div class="flex justify-center w-md mx-6">
        <input
          type="search"
          name="name"
          id="name"
          v-model="query"
          placeholder="Search name..."
          class="border w-full rounded-lg"
        />
      </div>
      <Loader v-if="$apollo.queries.members.loading" />
      <p v-if="error" class="text-center text-red-500 px-4 py-8">{{ error }}</p>

      <div
        v-else
        v-for="member in filteredList"
        :key="member.id"
        class="mt-3 relative"
      >
        <n-link
          v-if="member.show"
          :to="{ name: 'members-id', params: { id: member.id } }"
          class="
            block
            bg-gray-800
            p-4
            text-gray-200
            tracking-wider
            rounded-md
            uppercase
          "
        >
          <div class="flex items-center justify-between">
            <p class="text-sm sm:text-lg truncate">
              {{ member.name }}
            </p>
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
</template>
<script>
import Loader from "~/components/Loader.vue";
import { membersQuery } from "~/graphql/query";
export default {
  name: "Members",
  head() {
    return {
      title: "Members",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Members",
        },
      ],
    };
  },
  // middleware: "authenticated",
  components: { Loader },
  data() {
    return {
      members: [],
      error: "",
      query: "",
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
  async asyncData({ $strapi }) {
    const membersCount = await $strapi.$members.count();
    return { membersCount };
  },
};
</script>