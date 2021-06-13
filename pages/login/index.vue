<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="pt-12 flex flex-col items-center justify-center">
      <h1
        class="px-4 text-gray-800 text-center py-2 leading-4 tracking-wider max-w-md"
      >
        After REGISTRATION, contact any of the Social Media Admins for
        verification and unblocking for login access.
      </h1>
      <div
        class="mt-4 max-w-md mx-auto border rounded-lg overflow-hidden bg-white shadow-xl"
      >
        <h1 class="p-4 bg-green-500 text-xl font-semibold text-gray-200">
          LOGIN
        </h1>
        <h1 v-if="error" class="px-4 py-2 bg-red-500 text-gray-200 text-center">
          {{ error }}
        </h1>
        <form @submit.prevent="loginUser" class="space-y-4 p-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              v-model="identifier"
              placeholder="Your Email"
              class="w-full border rounded-md shadow-xl"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              required
              v-model="password"
              placeholder="Your Password"
              class="w-full border rounded-md shadow-xl"
            />
          </div>
          <br />
          <button
            type="submit"
            class="w-full bg-green-500 py-3 uppercase tracking-wider font-semibold rounded-md text-gray-200 focus:outline-none focus:shadow-outline"
          >
            <div class="flex items-center justify-center">
              <svg
                v-if="logIn"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4 animate-spin"
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
              <p>{{ logIn ? "Please Wait..." : "LOGIN" }}</p>
            </div>
          </button>
          <p class="text-sm">
            If you are not registered already,
            <n-link to="/register" class="text-blue-500">register here</n-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
   layout: "home",
    head() {
    return {
      title: "Login",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Login",
        },
      ],
    };
  },
  data() {
    return {
      showWarning: true,
      showLogin: false,
      identifier: "",
      password: "",
      error: "",
      logIn: false,
    };
  },
  methods: {
    async loginUser() {
      this.logIn = true;
      this.error = "";
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        });
        this.logIn = false;
        if (user !== null) {
          this.identifier = "";
          this.password;
          this.error = "";
          this.$nuxt.$router.push("/about");
        }
      } catch (error) {
        this.logIn = false;
        this.error = error.message;
      }
    },
  },
};
</script>