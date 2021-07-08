<template>
  <button class="btn btn-outline-dark" @click="() => {$emit('setPage', ''); window.location.reload();}">
    Retour
  </button>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez la safe room</h1>
    <rooms-list :disabledRoom="ghostRoom" @sendRoom="sendRoom" />
  </div>
</template>

<script>
import RoomsList from "../components/RoomsList.vue";
import SocketConfig from "../socket.config";

export default {
  name: "ChooseSafeRoom",
  components: { RoomsList },
  emits: ["setPage"],
  setup(_, context) {
    const socket = SocketConfig.SOCKET;
    const ghostRoom = localStorage.getItem("GHOST_ROOM");
    socket.on("SAFE_ZONE_CHOSEN", () => {
      context.emit("setPage", "ghost-home");
    });
    const sendRoom = (room) => {
      socket.emit("SAFE_ZONE_CHOSEN", room);
    };
    return { ghostRoom, sendRoom };
  },
};
</script>
