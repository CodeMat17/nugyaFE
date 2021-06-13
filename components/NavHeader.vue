<template>
  <div>
    <div class="bg-gray-800 bg-opacity-75 px-4 py-2">
      <div class="flex items-center justify-between">
        <img
          src="@/assets/images/nav-logo.jpg"
          alt="logo"
          class="rounded-full w-12 h-12 border border-red-600"
        />
        <button
          @click="showMenu = !showMenu"
          class="sm:hidden focus:outline-none focus:shadow-outline rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!showMenu"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
              class="text-green-500"
            />
            <path
              v-if="showMenu"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
              class="text-red-600"
            />
          </svg>
        </button>
        <div class="hidden sm:block space-x-2 text-gray-200 uppercase">
          <n-link
            to="/"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >Home</n-link
          >
          <n-link
            to="/about"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >About</n-link
          >
          <n-link
            to="/executives"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >Executives</n-link
          >
          <n-link
            to="/members"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >Members</n-link
          >
          <n-link
            to="/events"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >Events</n-link
          >
          <n-link
            to="/calender"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >Igbo Calender</n-link
          >
          <n-link
            to="/contact"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >Contact Us</n-link
          >
          <n-link
            to="/admin-login"
            class="px-2 py-5 hover:bg-green-100 hover:text-green-600"
            >Admin</n-link
          >
        </div>
      </div>
    </div>
    <transition appear name="menuBox">
      <div
        v-show="showMenu"
        class="
          popMenu
          sm:hidden
          absolute
          right-0
          mt-2
          w-full
          h-auto
          flex
          justify-end
          px-4
        "
      >
        <div
          class="
            space-y-2
            text-green-600
            bg-white
            shadow-2xl
            border
            py-2
            rounded-xl
          "
        >
          <button
            @click="homeButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            Home
          </button>
          <button
            @click="aboutButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            About
          </button>
          <button
            @click="executivesButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            Executives
          </button>
          <button
            @click="membersButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            Members
          </button>
          <button
            @click="eventsButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            Events
          </button>
          <button
            @click="calenderButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            Igbo Calender
          </button>
          <button
            @click="contactButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            Contact US
          </button>
          <button
            @click="adminButt"
            class="
              butts
              w-full
              text-left
              px-4
              py-2
              block
              focus:outline-none
              focus:bg-green-100
              hover:bg-green-100
              uppercase
              tracking-wider
              font-semibold
            "
          >
            Admin
          </button>
          <div class="w-full text-center">
            <button @click="devButt" class="bg-blue-200 px-12 py-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    homeButt() {
      this.$router.push("/");
      this.showMenu = false;
    },
    aboutButt() {
      this.$router.push("/about");
      this.showMenu = false;
    },
    executivesButt() {
      this.$router.push("/executives");
      this.showMenu = false;
    },
    membersButt() {
      this.$router.push("/members");
      this.showMenu = false;
    },
    eventsButt() {
      this.$router.push("/events");
      this.showMenu = false;
    },
    calenderButt() {
      this.$router.push("/calender");
      this.showMenu = false;
    },
    contactButt() {
      this.$router.push("/contact");
      this.showMenu = false;
    },
    adminButt() {
      this.$router.push("/admin-login");
      this.showMenu = false;
    },
    devButt() {
      this.$router.push("/dev");
      this.showMenu = false;
    },
  },
};
</script>
<style scoped>
.menuBox-enter,
.menuBox-leave-to {
  opacity: 0;
  transform: translateY(-50px) rotateY(360deg);
}

.menuBox-enter-active,
.menuBox-leave-active {
  transition: 0.5s ease, opacity 0.5s ease-out;
}

.menuBox-enter-to,
.menuBox-leave {
  transform: translateX(0px);
}

a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>