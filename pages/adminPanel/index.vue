<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-xl mx-auto px-2 py-8">
      <div class="">
        <h1
          class="text-center text-lg tracking-wide font-semibold text-gray-800"
        >
          ADMIN PANEL
        </h1>
        <div class="mt-6 flex items-center justify-center space-x-6">
          <n-link to="/addMembers"
            class="
              flex
              items-center
              justify-center
              w-32
              h-32
              rounded-lg
              shadow-lg
              px-4 text-center
                bg-green-300
            "
          >
            Add Member
          </n-link>
          <n-link to="/updateMember"
            class="
              flex
              items-center
              justify-center
              w-32
              h-32
              px-4
              rounded-lg
              shadow-lg
              text-center
                bg-gray-300
            "
          >
            Update Member
          </n-link>
        </div>
        <div class="mt-8 flex items-center justify-center space-x-6">
          <n-link to="/usersPage"
            class="
              flex
              items-center
              justify-center
              w-32
              h-32
              rounded-lg
              shadow-lg
              px-4 text-center
                bg-gray-300
            "
          >
            Unblock Users
          </n-link>
          <n-link to="/mails"
            class="
              flex
              items-center
              justify-center
              w-32
              h-32
              rounded-lg
              shadow-lg
              bg-green-300
              px-4 text-center
            "
          >
            <p>Ckeck Mails <span class="text-red-500">({{ mailCount }})</span></p>
          </n-link>
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
  async asyncData({ $strapi }) {
    const mailCount = await $strapi.$messages.count();
    return { mailCount };
  },
};
</script>