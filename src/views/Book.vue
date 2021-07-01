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
import SocketConfig from "../socket.config";

export default {
  name: "Book",
  setup() {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const state = reactive({ image: 1 });
    socket.on('BOOK_UPD', index => {
      state.image = index;
    });
    return { publicPath, state };
  },
};
</script>

<style scoped>
img {
  height: 100%;
}
</style>
