<template>
  <div class="bg-green-100 min-h-screen w-full">
    <div class="py-8 px-4 max-w-4xl mx-auto">
      <section>
        <div
          class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-green-600 to-green-500"
        >
          NUGYA
        </div>
        <p
          class="mt-2 text-gray-600 text-lg sm:text-xl md:text-2xl tracking-wide"
        >
          Nomeh Unateze General Youth Assembly is a platform for the unification
          of Nomeh Unateze in General through the youths. It is the expectation
          of the conveners, through this platform, to see the people of Nomeh
          Unateze unite for real, and achieving human and infrastructural
          developments.
        </p>
      </section>
      <section class="pt-8">
        <div>
          <h1
            class="bg-green-200 px-4 py-1 rounded-md text-xl md:text-2xl text-green-500 font-semibold tracking-widest"
          >
            MOTTO:
          </h1>
          <div
            class="w-auto h-48 px-4 text-gray-600 text-center text-xl md:text-2xl font-semibold tracking-widest italic flex items-center justify-center"
          >
            "We serve the community, not one's dignity"
          </div>
        </div>
      </section>
      <section class="pt-8">
        <div>
          <h1
            class="bg-green-200 px-4 py-1 rounded-md text-xl md:text-2xl text-green-500 font-semibold tracking-widest"
          >
            MISSION STATEMENT:
          </h1>
          <div
            class="w-auto h-48 px-4 text-gray-600 text-center text-xl md:text-2xl font-semibold tracking-widest italic flex items-center justify-center"
          >
            "Unification of the people for the progress of the people."
          </div>
        </div>
      </section>
      <section class="pt-8">
        <div>
          <h1
            class="bg-green-200 px-4 py-1 rounded-md text-xl md:text-2xl text-green-500 font-semibold tracking-widest"
          >
            OBJECTIVE:
          </h1>
          <div
            class="w-auto h-48 px-4 text-gray-600 text-center text-xl md:text-2xl font-semibold tracking-widest italic flex items-center justify-center"
          >
            "Paving way for human / community development."
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  head() {
    return {
      title: "About",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "About",
        },
      ],
    };
  },
};
</script>