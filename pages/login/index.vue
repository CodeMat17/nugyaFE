<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="pt-12 flex flex-col items-center justify-center">
      <h1
        class="
          px-4
          text-gray-800 text-center
          py-2
          leading-4
          tracking-wider
          max-w-md
        "
      >
        After REGISTRATION, contact any of the Social Media Admins for
        verification and unblocking for login access.
      </h1>
      <div
        class="
          mt-4
          max-w-md
          mx-auto
          border
          rounded-lg
          overflow-hidden
          bg-white
          shadow-xl
        "
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
            <div class="flex items-center">
              <input
                :type="[ showPassword ? 'text' : 'password' ]"
                required
                v-model="password"
                placeholder="Your Password"
                class="w-full rounded-md shadow-xl"
              />
              <button
              @click="showPassword = !showPassword"
                type="button"
                class="focus:outline-none border shadow-xl bg-gray-100 p-1 mx-1 rounded-md"
              >
                <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
                  <path
                  v-if="!showPassword"
                    fill="currentColor"
                    d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                  />
                  <path
                  v-if="showPassword"
                    fill="currentColor"
                    d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <br />
          <button
            type="submit"
            class="
              w-full
              bg-green-500
              py-3
              uppercase
              tracking-wider
              font-semibold
              rounded-md
              text-gray-200
              focus:outline-none
              focus:shadow-outline
            "
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
  name: "Login",
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
      showPassword: false,
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