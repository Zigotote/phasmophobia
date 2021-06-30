<template>
  <div class="container">
    <img
      class="text-center m-5"
      alt="Ecriture fantomatique"
      :src="`${publicPath}assets/ghost_writing/${state.image}.PNG`"
    />
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Book",
  setup() {
    const publicPath = process.env.BASE_URL;
    const state = reactive({ image: 1 });
    return { publicPath, state };
  },
};
</script>

<style scoped>
img {
  height: 100%;
}
</style>
