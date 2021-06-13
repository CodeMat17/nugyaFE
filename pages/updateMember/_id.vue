<template>
  <div class="bg-green-100 w-full min-h-screen">
    <div class="px-4 py-10 max-w-md mx-auto">
      <div class="flex justify-end">
        <button @click="$router.back()">Back</button>
      </div>
      <div class="border bg-white mt-4 px-4 py-6 rounded-lg shadow-xl">
        <h1 v-if="error" class="pb-3 text-red-500 text-center">{{ error }}</h1>

        <div class="space-y-4">
          <h1 class="text-xl tracking-wider font-bold text-center">
            UPDATE MEMBER
          </h1>
          <div>
            <label>Name</label>
            <form @submit.prevent="updateName">
              <div class="flex items-center justify-between space-x-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="name"
                  required
                  :placeholder="member.name"
                  class="border w-full rounded-lg shadow-lg"
                />
                <button
                  type="submit"
                  class="
                    border border-green-500
                    p-2
                    rounded-lg
                    focus:outline-none
                    focus:shadow-outline
                  "
                >
                  <svg
                    v-if="updatingName"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500 animate-spin"
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
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                </button>
              </div>
            </form>
          </div>

          <div>
            <label>Email</label>
            <form @submit.prevent="updateEmail">
              <div class="flex items-center justify-between space-x-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="email"
                  required
                  :placeholder="member.email"
                  class="border w-full rounded-lg shadow-lg"
                />
                <button
                  type="submit"
                  class="
                    border border-green-500
                    p-2
                    rounded-lg
                    focus:outline-none
                    focus:shadow-outline
                  "
                >
                  <svg
                    v-if="updatingEmail"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500 animate-spin"
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
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                </button>
              </div>
            </form>
          </div>

          <div>
            <label>Phone No.</label>
            <form @submit.prevent="updatePhone">
              <div class="flex items-center justify-between space-x-6">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  v-model="phone"
                  required
                  :placeholder="member.phone"
                  class="border w-full rounded-lg shadow-lg"
                />
                <button
                  type="submit"
                  class="
                    border border-green-500
                    p-2
                    rounded-lg
                    focus:outline-none
                    focus:shadow-outline
                  "
                >
                  <svg
                    v-if="updatingPhone"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500 animate-spin"
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
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                </button>
              </div>
            </form>
          </div>

          <div>
            <label>Family</label>
            <form @submit.prevent="updateFamily">
              <div class="flex items-center justify-between space-x-6">
                <input
                  type="text"
                  name="family"
                  id="family"
                  v-model="family"
                  required
                  :placeholder="member.family"
                  class="border w-full rounded-lg shadow-lg"
                />
                <button
                  type="submit"
                  class="
                    border border-green-500
                    p-2
                    rounded-lg
                    focus:outline-none
                    focus:shadow-outline
                  "
                >
                  <svg
                    v-if="updatingFamily"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500 animate-spin"
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
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                </button>
              </div>
            </form>
          </div>

          <div>
            <label>Village</label>
            <form @submit.prevent="updateVillage">
              <div class="flex items-center justify-between space-x-6">
                <input
                  type="text"
                  name="village"
                  id="village"
                  v-model="village"
                  required
                  :placeholder="member.village"
                  class="border w-full rounded-lg shadow-lg"
                />
                <button
                  type="submit"
                  class="
                    border border-green-500
                    p-2
                    rounded-lg
                    focus:outline-none
                    focus:shadow-outline
                  "
                >
                  <svg
                    v-if="updatingVillage"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500 animate-spin"
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
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                </button>
              </div>
            </form>
          </div>

          <div>
            <label>Occupation</label>
            <form @submit.prevent="updateOccupation">
              <div class="flex items-center justify-between space-x-6">
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  required
                  v-model="occupation"
                  :placeholder="member.occupation"
                  class="border w-full rounded-lg shadow-lg"
                />
                <button
                  type="sbmit"
                  class="
                    border border-green-500
                    p-2
                    rounded-lg
                    focus:outline-none
                    focus:shadow-outline
                  "
                >
                  <svg
                    v-if="updatingOccupation"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500 animate-spin"
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
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                </button>
              </div>
            </form>
          </div>

          <div class="flex justify-end pt-2">
            <button
            @click="blockMember"
              v-if="member.show"
              class="
                bg-red-200
                px-8
                py-3
                rounded-lg
                text-red-500
                tracking-wider
                focus:outline-none
                focus:shadow-outline
              "
            >
              {{ blockingMember ? "Blocking Member, wait..." : "BLOCK MEMBER" }}
            </button>
            <button
              v-if="!member.show"
              @click="unblockMember"
              class="
                bg-green-200
                px-8
                py-3
                rounded-lg
                text-green-500
                tracking-wider
                focus:outline-none
                focus:shadow-outline
              "
            >
              {{
                unblockingMember
                  ? "Unblocking Member, wait..."
                  : "UNBLOCK MEMBER"
              }}
            </button>
          </div>
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
  data() {
    return {
      member: Object,
      error: "",
      name: "",
      updatingName: false,
      nameError: "",
      email: "",
      updatingEmail: false,
      emailError: "",
      phone: "",
      updatingPhone: false,
      phoneError: "",
      family: "",
      updatingFamily: false,
      familyError: "",
      village: "",
      updatingVillage: false,
      villageError: "",
      occupation: "",
      updatingOccupation: false,
      occupationError: "",
      blockingMember: false,
      blockingError: "",
      unblockingMember: false,
      unblockingError: "",
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
  methods: {
    async updateName() {
      this.updatingName = true;
      this.nameError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          name: this.name,
        });
        this.updatingName = false;
        this.$nuxt.refresh();
        this.$toasted.success("NAME UPDATED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.updatingName = false;
        this.nameError = error.message;
        this.$toasted.error(this.nameError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

    async updateEmail() {
      this.updatingEmail = true;
      this.emailError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          email: this.email,
        });
        this.updatingEmail = false;
        this.$nuxt.refresh();
        this.$toasted.success("EMAIL UPDATED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.updatingEmail = false;
        this.emailError = error.message;
        this.$toasted.error(this.emailError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

    async updatePhone() {
      this.updatingPhone = true;
      this.phoneError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          phone: this.phone,
        });
        this.updatingPhone = false;
        this.$nuxt.refresh();
        this.$toasted.success("PHONE NO. UPDATED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.updatingPhone = false;
        this.phoneError = error.message;
        this.$toasted.error(this.phoneError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

    async updateFamily() {
      this.updatingFamily = true;
      this.familyError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          family: this.family,
        });
        this.updatingFamily = false;
        this.$nuxt.refresh();
        this.$toasted.success("FAMILY NAME UPDATED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.updatingFamily = false;
        this.familyError = error.message;
        this.$toasted.error(this.familyError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

    async updateVillage() {
      this.updatingVillage = true;
      this.villageError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          village: this.village,
        });
        this.updatingVillage = false;
        this.$nuxt.refresh();
        this.$toasted.success("VILLAGE NAME UPDATED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.updatingVillage = false;
        this.villageError = error.message;
        this.$toasted.error(this.villageError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

    async updateOccupation() {
      this.updatingOccupation = true;
      this.occupationError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          occupation: this.occupation,
        });
        this.updatingOccupation = false;
        this.$nuxt.refresh();
        this.$toasted.success("OCCUPATION UPDATED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.updatingOccupation = false;
        this.occupationError = error.message;
        this.$toasted.show(this.occupationError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

    async blockMember() {
      this.blockingMember = true;
      this.blockingError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          show: false,
        });
        this.blockingMember = false;
        this.$nuxt.refresh();
        this.$toasted.error("MEMBER BLOCKED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.blockingMember = false;
        this.blockingError = error.message;
        this.$toasted.error(this.blockingError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },

    async unblockMember() {
      this.unblockingMember = true;
      this.unblockingError = "";
      try {
        const id = this.$route.params.id;
        await this.$strapi.$members.update(id, {
          show: true,
        });
        this.unblockingMember = false;
        this.$nuxt.refresh();
        this.$toasted.success("MEMBER UNBLOCKED!!!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        this.unblockingMember = false;
        this.unblockingError = error.message;
        this.$toasted.error(this.unblockingError, {
          position: "top-center",
          duration: 5000,
        });
      }
    },
  },
};
</script>