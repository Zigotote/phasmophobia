<template>
  <div class="row">
    <button
      class="col btn m-2"
      v-for="(player, index) in players"
      :key="index"
      @click="() => selectPlayer(player.name)"
    >
      <div class="row">
        <img
          alt="Icon joueur"
          :id="`${player.color}-svg`"
          :src="`${publicPath}assets/person.svg`"
        />
      </div>
      <div class="text-center">{{ player.name }}</div>
    </button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import SocketConfig from "../socket.config";

export default {
  name: "PlayersList",
  props: { socketEvent: String },
  setup(props) {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const router = useRouter();
    const players = JSON.parse(localStorage.getItem('PLAYERS')).filter(p => !p.isDead);
    const selectPlayer = (player) => {
      socket.emit(props.socketEvent, player);
      router.push({ name: "GhostHome" });
    };
    return { publicPath, players, selectPlayer };
  },
};
</script>
