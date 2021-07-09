<template>
  <div class="col-6 d-flex" v-for="(item, index) in state.items" :key="index">
    <img
      :src="`${publicPath}assets/${item.image}`"
      :alt="item.alt"
    />
    <h5 class="mt-3">{{ item.value }}</h5>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "GroupData",
  setup() {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const state = reactive({
      psychology: 100,
      room: localStorage.getItem("CURRENT_ROOM"),
      items: computed(() => [
        {
          image: "psychology.svg",
          alt: "Santé mentale",
          value: `${state.psychology}`,
        },
        {
          image: "location.svg",
          alt: "Emplacement joueurs",
          value: state.room,
        },
      ]),
    });
    socket.on("PLAYERS_MENTAL_UPD", (players) => {
      players = players.filter((p) => !p.isDead);
      let average = 0;
      for (const player of players) {
        average += player.mentalScore;
      }
      average /= 1.0 * players.length;
      state.psychology = Math.round(average);
      localStorage.setItem("PLAYERS", JSON.stringify(players));
    });

    socket.on("PLAYERS_MOVE", (room) => {
      state.room = room;
    });

    return { publicPath, state };
  },
};
</script>
