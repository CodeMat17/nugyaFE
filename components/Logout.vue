<template>
  <div class="w-full px-4 py-2 flex justify-end">
    <button @click="logout"
      class="flex justify-center space-x-2 bg-green-600 shadow-xl text-gray-200 rounded-full px-4 py-1 focus:outline-none focus:shadow-outline hover:opacity-75"
    >
      Logout
    </button>
  </div>
</template>
<script>
export default {
     methods: {
    async logout() {
      await this.$strapi.logout();
      this.$nuxt.$router.push("/note");
    },
  },
}
</script>