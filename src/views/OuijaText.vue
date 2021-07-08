<template>
  <button class="btn btn-outline-dark" @click="() => {$emit('setPage', ''); window.location.reload();}">
    Retour
  </button>
  <h1 class="text-center">{{ text }}</h1>
</template>

<script>
import { ref } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "OuijaInput",
  emits: ["setPage"],
  setup() {
    const socket = SocketConfig.SOCKET;
    let text = ref("");
    socket.on("OUIJA_UPD", (message) => {
      text.value = message;
    });
    return { text };
  },
};
</script>

<style scoped>
h1 {
  background-color: black;
  font-size: 10rem;
  color: white;
}
</style>
