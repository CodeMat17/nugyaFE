<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-5xl mx-auto px-4 py-8">
      <div
        class="my-8 text-center text-3xl uppercase font-semibold text-gray-800 tracking-wider"
      >
        Events coming soon !
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Events",
  head() {
    return {
      title: "Events",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Event",
        },
      ],
    };
  },
};
</script>