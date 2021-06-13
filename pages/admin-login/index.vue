<template>
  <div class="bg-green-100 w-full min-h-screen">
    <div class="max-w-md mx-auto px-4 py-20">
      <h1 class="text-center font-semibold text-xl tracking-wider">
        ADMIN LOGIN
      </h1>
      <form @submit.prevent="adminLogin" class="mt-6 space-y-4">
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            required
            class="w-full border shadow-xl rounded-lg p-3"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            required
            class="w-full border shadow-xl rounded-lg p-3"
          />
        </div>
        <br />
        <button
          type="submit"
          class="bg-green-500 w-full px-4 py-3 rounded-lg text-gray-200 font-semibold tracking-wider focus:outline-none focus:shadow-outline"
        >
          <div class="flex items-center justify-center">
            <svg
              v-if="loggin"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 animate-spin mr-4"
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
            <p>LOGIN</p>
          </div>
        </button>
        <p
          v-if="error"
          class="text-center text-red-500 bg-red-100 p-4 rounded-lg"
        >
          {{ error }}
        </p>
        
        <p
          v-if="userError"
          class="text-center text-red-500 bg-red-100 p-4 rounded-lg"
        >
          {{ userError }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      userError: "",
      loggin: false,
    };
  },
  methods: {
    async adminLogin() {
      this.loggin = true;
      this.error = "";
      this.userError = "";
      try {
        const adminUser = await this.$strapi.login({
          identifier: this.email,
          password: this.password,
        });
        if (adminUser !== null) {
          this.email = "";
          this.password = "";
          this.loggin = false;
          if (adminUser.user.satoken) {
            this.$nuxt.$router.push("/adminPanel");
          } else {
            this.userError = "You are not a super admin, please quit now.";
          }
        }
      } catch (error) {
        this.loggin = false;
        this.error = error.message;
      }
    },
  },
};
</script>