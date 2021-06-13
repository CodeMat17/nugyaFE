<template>
  <div>
    <div>
      <div
        v-if="$nuxt.isOffline"
        class="sticky top-0 flex items-center justify-center w-full p-3 tracking-wide bg-red-100 text-red-500"
      >
        <h1 class="text-center">
          Your internet network is off or very poor at the moment. Trying
          connecting or refresh your page.
        </h1>
      </div>
      <NavHeader class="sticky top-0 z-50" />
      <transition name="slide" mode="out-in">
        <Nuxt />
      </transition>
      <NavFooter />
    </div>
  </div>
</template>

<style>
html {
  font-family: "Nunito", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.slide-enter {
  transform: translateX(100px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.calli-font {
  font-family: 'Calligraffitti';
}
</style>
