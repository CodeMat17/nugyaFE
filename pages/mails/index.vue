<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-xl mx-auto px-2 py-8">
      <div class="my-4 py-2">
        <div class="p-4 bg-blue-100">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold">Mails</h1>

            <button
              @click="$router.back()"
              class="
                border
                px-4
                py-2
                rounded-lg
                bg-gray-800
                text-gray-200
                shadow-lg
                focus:outline-none
                focus:shadow-outline
              "
            >
              Back
            </button>
          </div>
          <div v-if="messages.length < 1" class="text-center px-4 py-8 text-lg">
            You have no mail yet
          </div>
          <div
            v-if="$apollo.queries.messages.loading"
            class="flex justify-center tracking-widest text-lg py-12"
          >
            <p class="loading2 px-1">l</p>
            <p class="loading2 px-1">o</p>
            <p class="loading2 px-1">a</p>
            <p class="loading2 px-1">d</p>
            <p class="loading2 px-1">i</p>
            <p class="loading2 px-1">n</p>
            <p class="loading2 px-1">g</p>
            <p class="loading2 px-1">.</p>
            <p class="loading2 px-1">.</p>
            <p class="loading2 px-1">.</p>
          </div>
          <div
            v-if="error"
            class="text-center text-red-500 bg-red-200 px-4 py-8 rounded-lg"
          >
            {{ error }}
          </div>

          <div v-else class="my-4">
            <div
              v-for="message in messages"
              :key="message.id"
              class="text-gray-200 my-3"
            >
              <n-link
                v-if="message.show"
                :to="{ name: 'mails-id', params: { id: message.id } }"
              >
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    bg-gray-800
                    py-4
                    px-2
                    rounded-lg
                  "
                >
                  <div class="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        v-if="message.seen"
                        class="text-green-500"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                      />
                      <path
                        v-else
                        class="text-blue-600"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p class="truncate sm:text-lg">
                      From: <span>{{ message.name }}</span>
                    </p>
                  </div>

                  <svg
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { messagesQuery } from "~/graphql/query";
export default {
  name: "Admin-Panel",
  middleware: 'superadmin',
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
      messages: [],
      error: "",
    };
  },
  apollo: {
    messages: {
      prefetch: true,
      query: messagesQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  mounted() {
    gsap.from(".loading2", {
      duration: 2,
      opacity: 0,
      y: 15,
      ease: "back",
      repeat: -1,
      stagger: 0.23,
    });
  },
};
</script>