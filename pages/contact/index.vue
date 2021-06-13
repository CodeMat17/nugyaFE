<template>
  <div class="min-h-screen bg-green-100">
    <div class="px-4 py-10 max-w-md mx-auto">
      <div class="border rounded-lg bg-white shadow-lg overflow-hidden">
        <div
          class="
            flex
            items-center
            justify-between
            py-6
            px-4
            bg-green-500
            text-gray-200
          "
        >
          <h1 class="text-xl font-semibold tracking-wider">Contact Us</h1>
          <a href="http://twitter.com/NUGYA_Nomeh" target="_blank"
            ><svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              /></svg
          ></a>
        </div>
        <form @submit.prevent="sendMessage" class="p-4 space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              required
              placeholder="Enter your name"
              class="border p-3 rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <label>PhoneNo.</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              v-model="phone"
              required
              placeholder="Enter your phone No."
              class="border p-3 rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              v-model="subject"
              required
              placeholder="Enter your messgae subject"
              class="border p-3 rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              v-model="message"
              required
              placeholder="Enter your message subject"
              class="border p-3 rounded-lg shadow-lg w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            class="
              w-full
              bg-green-500
              py-3
              rounded-lg
              text-gray-200
              tracking-wider
              text-lg
              focus:outline-none
              focus:shadow-outline
            "
          >
            {{ sending ? "Submitting, wait..." : "SUBMIT" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sending: false,
      error: "",
      name: "",
      phone: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    async sendMessage() {
      this.sending = true;
      this.error = "";
      try {
        await this.$strapi.$messages.create({
          name: this.name,
          phone: this.phone,
          subject: this.subject,
          message: this.message,
          show: true,
          seen: false,
        });
        this.sending = false;
        this.$toasted.success("MESSAGE SENT!!!", {
          position: "top-center",
          duration: 5000,
        });
        this.name = "";
        this.phone = "";
        this.subject = "";
        this.message = "";
      } catch (error) {
        this.error = error.message;
        this.sending = false;
        this.$toasted.error("MESSAGE FAILED!!!", this.error, {
          position: "top-center",
          duration: 5000,
        });
      }
    },
  },
};
</script>