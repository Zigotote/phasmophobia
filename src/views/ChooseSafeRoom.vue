<template>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez la safe room</h1>
    <rooms-list :disabledRoom="ghostRoom" @sendRoom="sendRoom" />
  </div>
</template>

<script>
import RoomsList from "../components/RoomsList.vue";

export default {
  name: "ChooseSafeRoom",
  components: { RoomsList },
  setup() {
    const ghostRoom = localStorage.getItem("GHOST_ROOM");
    console.log(ghostRoom);
    const sendRoom = (room) => {
      console.log(room);
    };
    return { ghostRoom, sendRoom };
  },
};
</script>
