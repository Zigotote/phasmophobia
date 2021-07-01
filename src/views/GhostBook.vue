<template>
  <button class="btn btn-outline-dark" @click="$emit('setPage', 'ghost-home')">Retour</button>
  <h1 class="text-center mb-5">Livre d'écriture fantomatique</h1>
  <h5 class="text-center mb-5">Que souhaitez-vous écrire dans le livre ?</h5>
  <div class="row m-1">
    <button
      class="col-3 mb-3"
      v-for="index in 8"
      :key="index"
      @click="() => sendWriting(index)"
    >
      <img
        class="col-10"
        :src="`${publicPath}assets/ghost_writing/${index}.PNG`"
      />
    </button>
  </div>
</template>

<script>
import SocketConfig from "../socket.config";

export default {
  name: "GhostBook",
  emits: ['setPage'],
  setup(_, context) {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const sendWriting = (index) => {
      socket.emit('BOOK_UPD', index);
      context.emit('setPage', 'ghost-home');
    };
    return { publicPath, sendWriting };
  },
};
</script>

<style scoped></style>
