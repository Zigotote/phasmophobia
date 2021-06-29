<template>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez la pièce du fantôme</h1>
    <rooms-list @sendRoom="sendRoom" />
  </div>
</template>

<script>
import RoomsList from "../components/RoomsList.vue";

export default {
  name: "ChooseGhostRoom",
  components: { RoomsList },
  setup() {
    const sendRoom = (room) => {
      console.log(room);
    };
    return { sendRoom };
  },
};
</script>
