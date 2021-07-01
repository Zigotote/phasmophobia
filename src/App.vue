<template>
  <home v-if="state.page === undefined || state.page === null || state.page === ''" @setPage="setPage"/>
  <choose-ghost v-if="state.page === 'choose-ghost'" @setPage="setPage"/>
</template>

<script>
import ChooseGhost  from './views/ChooseGhost';
import { reactive } from 'vue';
import Home         from './views/Home';
import SocketConfig from "./socket.config";

export default {
  name: "App", components: { ChooseGhost, Home }, setup() {
    let state = reactive({ page: localStorage.getItem("PAGE") });

    const socket = SocketConfig.SOCKET;

    socket.on("PLAYERS_CREATED", (players) => {
      localStorage.setItem("PLAYERS", JSON.stringify(players));
    });

    socket.on("PLAYERS_CREATED", (players) => {
      localStorage.setItem("PLAYERS", JSON.stringify(players));
    });

    socket.on("PLAYERS_MOVE", (room) => {
      localStorage.setItem("CURRENT_ROOM", room);
    });

    const setPage = (page) => {
      localStorage.setItem('PAGE', page)
      state.page = page;
    }

    return { state, setPage };
  },
};
</script>
