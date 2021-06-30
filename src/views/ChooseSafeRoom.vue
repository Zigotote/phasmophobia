<template>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez la safe room</h1>
    <rooms-list :disabledRoom="ghostRoom" @sendRoom="sendRoom" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import RoomsList from "../components/RoomsList.vue";

export default {
  name: "ChooseSafeRoom",
  components: { RoomsList },
  setup() {
    const router = useRouter();
    const ghostRoom = localStorage.getItem("GHOST_ROOM");
    const sendRoom = (room) => {
      console.log(room);
      router.push({ name: "GhostHome" });
    };
    return { ghostRoom, sendRoom };
  },
};
</script>
