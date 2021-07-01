<template>
  <button @click="$emit('setPage', '')">Retour</button>
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
import SocketConfig from "../socket.config";

export default {
  name: "ChooseGhost",
  emits: ['setPage'],
  setup(_, context) {
    const socket = SocketConfig.SOCKET;
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
      context.emit('setPage', 'choose-ghost-room');
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
