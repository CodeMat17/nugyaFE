<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-md mx-auto px-4 py-8">
      <div
        v-if="part1"
        class="rounded-lg border overflow-hidden bg-white shadow-xl"
      >
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
          Registration - Part 1
        </h1>
        <div class="p-4">
          <form @submit.prevent="createMember" class="space-y-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                v-model="name"
                placeholder="Eg. Ani Samuel Chijioke"
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
                placeholder="Eg. nugya@gmail.com"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Phone No.</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                v-model="phone"
                required
                placeholder="Eg. 080xxxxxxxx"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Kindred</label>
              <input
                type="text"
                name="kindred"
                id="kindred"
                required
                v-model="kindred"
                placeholder="eg. Umuchifu"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Village</label>
              <input
                type="text"
                name="village"
                id="village"
                required
                v-model="village"
                placeholder="Eg. Imeama"
                class="w-full border rounded-lg shadow-xl"
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
                placeholder="State business type"
                class="w-full border rounded-lg shadow-xl"
              ></textarea>
            </div>
            <button
              type="submit"
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
                  v-if="creating"
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
                <p>{{ creating ? "Please Wait..." : "SUBMIT" }}</p>
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
            <p class="text-sm">
              Already registered?
              <n-link to="/login" class="text-blue-500"> Login here</n-link>
            </p>
          </form>
        </div>
      </div>

      <div
        v-if="part2"
        class="rounded-lg border overflow-hidden bg-white shadow-xl"
      >
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
          Registration - Part 2
        </h1>
        <div class="p-4">
          <form @submit.prevent="registerUser" class="space-y-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="name"
                disabled
                required
                placeholder="Eg. Ani Samuel Chijioke"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                disabled
                required
                placeholder="Eg. nugya@gmail.com"
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
                placeholder="************"
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
                placeholder="************"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <br />
            <button
              type="submit"
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
            <br />
            <div class="flex space-x-2 text-sm">
              <p>Return to</p>
              <button @click="returnPart1" class="text-blue-500">Part 1</button>
            </div>
            <p class="text-sm leading-3">
              Already registered?
              <n-link to="/login" class="text-blue-500"> Login here</n-link>
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
  layout: "home",
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
      phone: "",
      kindred: "",
      village: "",
      occupation: "",
      error: "",
      passwordError: "",
      creating: false,
      createError: "",
      registering: false,
      part1: true,
      part2: false,
    };
  },
  methods: {
    async createMember() {
      this.creating = true;
      this.createError = "";
      try {
        await this.$strapi.$members.create({
          name: this.name,
          email: this.email,
          phone: this.phone,
          family: this.kindred,
          village: this.village,
          occupation: this.occupation,
          show: true,
        });
        this.creating = false;
        this.$toasted.success("Part 1 done. Part 2 remaining.", {
          position: "top-center",
          duration: 5000,
        });
        this.part1 = false;
        this.part2 = true;
      } catch (error) {
        this.creating = false;
        this.createError = error.message;
        this.$toasted.error(this.createError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

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
            this.$toasted.success("Registration done!. Contact Admin", {
              position: "top-center",
              duration: 5000,
            });
            this.error = "";
            this.passwordError = "";
            this.name = "";
            (this.email = ""),
              (this.password = ""),
              (this.confirmPassword = ""),
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
    returnPart1() {
      this.part2 = false;
      this.part1 = true;
    },
  },
};
</script>