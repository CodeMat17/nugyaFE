<template>
  <div class="flex justify-center space-x-2 text-center text-lg font-semibold py-8">
    <p class="loadAnim">L</p>
    <p class="loadAnim">o</p>
    <p class="loadAnim">a</p>
    <p class="loadAnim">d</p>
    <p class="loadAnim">i</p>
    <p class="loadAnim">n</p>
    <p class="loadAnim">g</p>
    <p class="loadAnim">.</p>
    <p class="loadAnim">.</p>
    <p class="loadAnim">.</p>
  </div>
</template>
<script>
export default {
  mounted() {
    gsap.from(".loadAnim", {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "back",
      stagger: 0.25,
      repeat: -1,
    });
  },
};
</script>