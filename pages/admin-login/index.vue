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
          <div class="flex items-center">
            <input
              :type="[showPassword ? 'text' : 'password']"
              required
              v-model="password"
              class="w-full border rounded-lg p-3 shadow-xl"
            />
            <button
              @click="showPassword = !showPassword"
              type="button"
              class="
                focus:outline-none
                border
                shadow-xl
                bg-gray-100
                p-2
                mx-1
                rounded-md
              "
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
            bg-green-500
            w-full
            px-4
            py-3
            rounded-lg
            text-gray-200
            font-semibold
            tracking-wider
            focus:outline-none
            focus:shadow-outline
          "
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
      showPassword: false,
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
            this.$nuxt.$router.push("/adminPanelSAToken");
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