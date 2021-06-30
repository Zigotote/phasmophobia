<template>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez la safe room</h1>
    <rooms-list :disabledRoom="ghostRoom" @sendRoom="sendRoom" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import RoomsList from "../components/RoomsList.vue";
import SocketConfig from "../socket.config";

export default {
  name: "ChooseSafeRoom",
  components: { RoomsList },
  setup() {
    const socket = SocketConfig.SOCKET;
    const router = useRouter();
    const ghostRoom = localStorage.getItem("GHOST_ROOM");
    const sendRoom = (room) => {
      socket.emit("SAFE_ZONE_CHOSEN", room);
      socket.on("SAFE_ZONE_CHOSEN", room => {
        console.log(room);
        router.push({ name: "GhostHome" });
      })
    };
    return { ghostRoom, sendRoom };
  },
};
</script>
