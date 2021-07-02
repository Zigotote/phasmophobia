<template>
  <button class="btn btn-outline-dark" @click="$emit('setPage', '')">
    Retour
  </button>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez la pièce du fantôme</h1>
    <rooms-list @sendRoom="sendRoom" />
  </div>
</template>

<script>
import RoomsList from "../components/RoomsList.vue";
import SocketConfig from "../socket.config";

export default {
  name: "ChooseGhostRoom",
  components: { RoomsList },
  emits: ["setPage"],
  setup(_, context) {
    const socket = SocketConfig.SOCKET;

    socket.on("GHOST_ZONE_CHOSEN", (room) => {
      localStorage.setItem("GHOST_ROOM", room);
      context.emit("setPage", "choose-players");
    });

    const sendRoom = (room) => {
      socket.emit("GHOST_ZONE_CHOSEN", room);
    };
    return { sendRoom };
  },
};
</script>
