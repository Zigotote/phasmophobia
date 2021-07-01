<template>
  <home v-if="state.page === undefined || state.page === null || state.page === ''" @setPage="setPage"/>
  <choose-ghost v-if="state.page === 'choose-ghost'" @setPage="setPage"/>
  <choose-ghost-room v-if="state.page === 'choose-ghost-room'" @setPage="setPage"/>
  <choose-players v-if="state.page === 'choose-players'" @setPage="setPage"/>
  <choose-safe-room v-if="state.page === 'choose-safe-room'" @setPage="setPage"/>
  <ghost-home v-if="state.page === 'ghost-home'" @setPage="setPage"/>
  <ghost-interaction v-if="state.page === 'ghost-interaction'" @setPage="setPage"/>
  <deads v-if="state.page === 'deads'" @setPage="setPage"/>
  <ghost-book v-if="state.page === 'ghost-book'" @setPage="setPage"/>
</template>

<script>
import GhostBook        from './views/GhostBook';
import Deads            from './views/Deads';
import GhostInteraction from './views/GhostInteraction';
import GhostHome        from './views/GhostHome';
import ChoosePlayers    from './views/ChoosePlayers';
import ChooseSafeRoom   from './views/ChooseSafeRoom';
import ChooseGhostRoom  from './views/ChooseGhostRoom';
import ChooseGhost      from './views/ChooseGhost';
import { reactive }     from 'vue';
import Home             from './views/Home';
import SocketConfig     from "./socket.config";

export default {
  name: "App", components: { GhostBook, Deads, GhostInteraction, GhostHome, ChoosePlayers, ChooseGhostRoom, ChooseGhost, ChooseSafeRoom, Home }, setup() {
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
