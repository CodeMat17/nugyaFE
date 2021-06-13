<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-xl mx-auto px-2 py-8">
      <div class="my-4 py-2">
          <div class="pb-4 flex justify-end">
              <button @click="$router.back()" class="bg-green-200 rounded-full shadow-lg px-6 py-2 focus:outline-none focus:shadow-outline">Back</button>
          </div>
        <div
          class="p-3 mb-6 bg-green-200 shadow-xl rounded-lg"
        >
          <h1 class="text-center text-lg tracking-wide font-semibold text-gray-800">ADD MEMBER:</h1>
          <form @submit.prevent="createMember" class="mt-4 space-y-4">
            <div
              v-if="error"
              class="text-red-500 bg-red-200 p-4 text-center rounded-lg"
            >
              {{ error }}
            </div>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                v-model="name"
                placeholder="Eg. Ani Chijioke Emmanuel"
                class="w-full p-3 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                required
                v-model="email"
                placeholder="Eg. me@nomeh.com"
                class="w-full p-3 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <label>Phone No.</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                v-model="phone"
                placeholder="Eg. 080xxxxxxxx"
                class="w-full p-3 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <label>Family Name</label>
              <input
                type="text"
                name="family"
                id="family"
                required
                v-model="family"
                placeholder="Eg. Umuchifu"
                class="w-full p-3 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <label>Village Name</label>
              <input
                type="text"
                name="village"
                id="village"
                required
                v-model="village"
                placeholder="Eg. Imeama"
                class="w-full p-3 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <label>Occupation</label>
              <textarea
                name="occupation"
                id="occupation"
                cols="30"
                rows="10"
                required
                v-model="occupation"
                placeholder="Eg. business name"
                class="w-full p-3 rounded-lg shadow-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              class="
                w-full
                bg-gray-800
                p-3
                rounded-lg
                text-gray-200
                tracking-wider
                focus:outline-none
                focus:shadow-outline
              "
            >
              <div class="flex items-center justify-center">
                <svg
                  v-if="creating"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 animate-spin mr-2"
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
                <p>{{ creating ? "PLEASE WAIT..." : "CREATE MEMBER" }}</p>
              </div>
            </button>
            <div
              v-if="error"
              class="text-red-500 bg-red-200 p-4 text-center rounded-lg"
            >
              {{ error }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add-Member",
  middleware: 'superadmin',
  head() {
    return {
      title: "Add Member",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Add Member",
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
      creating: false,
    
    };
  },
  methods: {
    async createMember() {
      this.creating = true;
      this.error = "";
      try {
        await this.$strapi.$members.create({
          name: this.name,
          email: this.email,
          phone: this.phone,
          family: this.family,
          village: this.village,
          occupation: this.occupation,
          show: true,
        });
        this.creating = false;
        this.$toasted.success("New member created successfully!", {
          position: "top-center",
          duration: 7000,
        });
      } catch (error) {
        this.creating = false;
        this.error = error.message;
      }
    },
  },
};
</script>