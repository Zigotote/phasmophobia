<template>
  <button class="btn btn-outline-dark" @click="() => {$emit('setPage', ''); window.location.reload();}">
    Retour
  </button>
  <div class="container">
    <h1 class="text-center mb-5">Interaction Ouija</h1>
    <h5 class="text-center mb-5">Que souhaitez-vous lui répondre ?</h5>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="text" />
    </div>
    <button class="btn btn-danger" @click="sendOuija">Envoyer</button>
  </div>
</template>

<script>
import { ref } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "OuijaInput",
  emits: ["setPage"],
  setup(_, context) {
    const socket = SocketConfig.SOCKET;
    const text = ref("");
    const sendOuija = () => {
      socket.emit("OUIJA_UPD", text.value);
      context.emit("setPage", "ghost-home");
    };
    return { text, sendOuija };
  },
};
</script>
