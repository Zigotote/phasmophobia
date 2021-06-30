<template>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez votre fantôme</h1>
    <div class="row">
      <div class="col" v-for="ghost in ghosts" :key="ghost">
        <button type="button" class="btn btn-danger m-4" @click="sendGhost">
          {{ ghost }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import SocketConfig from "../socket.config";

export default {
  name: "ChooseGhost",
  setup() {
    const socket = SocketConfig.SOCKET;
    const router = useRouter();
    const ghosts = [
      "Esprit",
      "Spectre",
      "Fantôme",
      "Poltergeist",
      "Banshee",
      "Revenant",
      "Ombre",
      "Djinn",
      "Cauchemar",
      "Démon",
      "Yurei",
      "Oni",
      "Yokai",
      "Hantu",
    ];
    socket.on('GHOST_CHOSEN', () => {
      router.push({ name: "ChooseGhostRoom" });
    })

    ghosts.sort();
    const sendGhost = (ghostButton) => {
      const ghostName = ghostButton.target.innerHTML;
      socket.emit('GHOST_CHOSEN', ghostName);
    };
    return { ghosts, sendGhost };
  },
};
</script>
