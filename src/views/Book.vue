<template>
  <div class="container">
    <img
      class="text-center m-5"
      alt="Ecriture fantomatique"
      :src="`${publicPath}assets/ghost_writing/${image}.PNG`"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Book",
  setup() {
    const publicPath = process.env.BASE_URL;
    const image = ref(1);
    return { publicPath, image };
  },
};
</script>

<style scoped>
img {
  height: 100%;
}
</style>
