<template>
  <div class="container">
    <h1 class="text-center mb-5">Dans quelle pièce allez-vous entrer ?</h1>
    <rooms-list :disabledRoom="state.currentRoom" @sendRoom="sendRoom" />
  </div>
</template>

<script>
import { reactive } from "vue";
import RoomsList from "../components/RoomsList.vue";
import SocketConfig from "../socket.config";

export default {
  name: "HunterLocalization",
  components: { RoomsList },
  setup() {
    const socket = SocketConfig.SOCKET;
    let state = reactive({ currentRoom: "" });
    const sendRoom = (room) => {
      socket.emit("PLAYERS_MOVE", room);
      state.currentRoom = room;
      console.log(state.currentRoom);
    };
    return { state, sendRoom };
  },
};
</script>
