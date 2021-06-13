<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-md mx-auto px-4 py-8">
      <div class="rounded-lg border overflow-hidden bg-white shadow-xl">
        <h1
          class="
            px-4
            py-6
            bg-green-500
            text-xl
            font-semibold
            text-gray-200
            tracking-wider
          "
        >
          Registration
        </h1>
        <div class="p-4">
          <form @submit.prevent="registerUser" class="space-y-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                v-model="name"
                placeholder="Your name"
                class="w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                required
                placeholder="Your email"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                v-model="password"
                placeholder="Your password"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                v-model="confirmPassword"
                placeholder="Confirm your password"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <br />
            <button
              class="
                w-full
                tracking-wider
                font-semibold
                bg-green-500
                py-3
                rounded-md
                text-gray-200
                focus:outline-none
                focus:shadow-outline
              "
            >
              <div class="flex items-center justify-center">
                <svg
                  v-if="registering"
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
                <p>{{ registering ? "Please Wait..." : "REGISTER" }}</p>
              </div>
            </button>
            <p
              v-if="error"
              class="
                p-4
                rounded-lg
                text-center
                bg-red-500
                text-gray-200
                tracking-wider
              "
            >
              {{ error }}
            </p>
            <p
              v-if="passwordError"
              class="
                p-4
                rounded-lg
                text-center
                bg-red-500
                text-gray-200
                tracking-wider
              "
            >
              {{ passwordError }}
            </p>
            <p class="text-sm">
              Already registered? <n-link to="/login" class="text-blue-500"> Login here</n-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  head() {
    return {
      title: "Register",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Register",
        },
      ],
    };
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      passwordError: "",
      registering: false,
    };
  },
  methods: {
    async registerUser() {
      this.registering = true;
      this.error = "";
      this.passwordError = "";
      if (this.password === this.confirmPassword) {
        try {
          const newUser = await this.$strapi.register({
            username: this.name,
            email: this.email,
            password: this.password,
            blocked: true,
          });
          if (newUser !== null) {
            this.registering = false;
            this.$toasted.success(
              "Registration done!.",
              {
                position: "top-center",
                duration: 5000,
              }
            );
            this.error = "";
            this.passwordError = "";
            this.$nuxt.$router.push("/login");
          }
        } catch (error) {
          this.registering = false;
          this.error = error.message;
        }
      } else {
        this.registering = false;
        this.passwordError =
          "Your confirm password does not match with your password.";
      }
    },
  },
};
</script>