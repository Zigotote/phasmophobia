<template>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez la pièce du fantôme</h1>
    <rooms-list @sendRoom="sendRoom" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import RoomsList from "../components/RoomsList.vue";
import SocketConfig from "../socket.config";

export default {
  name: "ChooseGhostRoom",
  components: { RoomsList },
  setup() {
    const socket = SocketConfig.SOCKET;
    const router = useRouter();

    socket.on("GHOST_ZONE_CHOSEN", room => {
      localStorage.setItem("GHOST_ROOM", room);
      router.push({ name: "ChoosePlayers" });
    })

    const sendRoom = (room) => {
      console.log(room);
      socket.emit("GHOST_ZONE_CHOSEN", room);
    };
    return { sendRoom };
  },
};
</script>
