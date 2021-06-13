<template>
  <div class="bg-green-100 w-full min-h-screen">
    <div class="max-w-md mx-auto px-4 py-12">
      <Loader v-if="!member" />
      <div v-if="error" class="text-center text-red-500 bg-red-200 p-4 rounded-lg">
        {{ error }}
      </div>
      <div v-else>
        <div class="pt-12 flex justify-end px-4">
          <button
            @click="$router.back()"
            class="
              shadow-xl
              focus:outline-none
              focus:shadow-outline
              hover:opacity-75
              bg-green-500
              rounded-full
              px-4
              py-1
              text-gray-200
              tracking-wider
            "
          >
            Back
          </button>
        </div>
        <div class="border mt-4 rounded-lg shadow-lg overflow-hidden bg-white">
          <h1
            class="
              text-center
              bg-green-500
              py-8
              text-lg
              px-4
              font-semibold
              text-gray-200
              uppercase
              tracking-wider
            "
          >
            {{ member.name }}
          </h1>
          <div class="p-4 space-y-2 tracking-wide">
            <div class="flex space-x-4">
              <h1 class="font-semibold">Phone No.:</h1>
              <p>{{ member.phone }}</p>
            </div>
            <div class="flex space-x-4">
              <h1 class="font-semibold">Email:</h1>
              <p>{{ member.email }}</p>
            </div>
            <div class="flex space-x-4">
              <h1 class="font-semibold">Family Name:</h1>
              <p>{{ member.family }}</p>
            </div>
            <div class="flex space-x-4">
              <h1 class="font-semibold">Village:</h1>
              <p>{{ member.village }}</p>
            </div>
            <div class="flex space-x-4">
              <h1 class="font-semibold">Occupation:</h1>
              <p>{{ member.occupation }}</p>
            </div>
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
      member: Object,
      error: "",
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
};
</script>