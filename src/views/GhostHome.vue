<template>
  <div class="container">
    Hello vue !
    <img alt="Vue logo" :src="`${publicPath}assets/book.svg`" />
  </div>
</template>

<script>
export default {
  name: "GhostHome",
  setup() {
    const publicPath = process.env.BASE_URL;
    return { publicPath };
  },
};
</script>
