<template>
  <button class="btn btn-outline-dark" @click="$emit('setPage', '')">
    Retour
  </button>
  <h1 class="text-center">{{ state.temperature }}°C</h1>
</template>

<script>
import { reactive } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "Thermometer",
  emits: ["setPage"],
  setup() {
    const socket = SocketConfig.SOCKET;
    const state = reactive({ temperature: 2.5 });
    socket.on("TEMP_UPD", (temp) => {
      state.temperature = temp;
    });
    return { state };
  },
};
</script>

<style scoped>
h1 {
  background-color: #e8eb06;
  font-size: 10rem;
}
</style>
