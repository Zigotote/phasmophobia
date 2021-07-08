<template>
  <button class="btn btn-outline-dark" @click="() => {$emit('setPage', ''); window.location.reload();}">Retour</button>
  <h1 class="text-center">{{ state.emf }}</h1>
</template>

<script>
import { reactive } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "Emf",
  emits: ['setPage'],
  setup() {
    const socket = SocketConfig.SOCKET;
    const state = reactive({ emf: "" });
    socket.on('EMF_UPD', emf => {
      state.emf = emf;
    });
    return { state };
  },
};
</script>

<style scoped>
h1 {
  background-color: grey;
  font-size: 10rem;
}
</style>
