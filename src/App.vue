<template>
  <!--Sounds-->
  <audio id="hunting-sound">
    <source :src="`${publicPath}assets/sounds/hunting_sound.mp3`" type="audio/mpeg">
  </audio>

  <!--Setup pages-->
  <home
    v-if="state.page === undefined || state.page === null || state.page === ''"
    @setPage="setPage"
  />
  <choose-ghost v-if="state.page === 'choose-ghost'" @setPage="setPage" />
  <choose-ghost-room
    v-if="state.page === 'choose-ghost-room'"
    @setPage="setPage"
  />
  <choose-players v-if="state.page === 'choose-players'" @setPage="setPage" />
  <choose-safe-room
    v-if="state.page === 'choose-safe-room'"
    @setPage="setPage"
  />

  <!--Ghost views-->
  <ghost-home v-if="state.page === 'ghost-home'" @setPage="setPage" />
  <ghost-interaction
    v-if="state.page === 'ghost-interaction'"
    @setPage="setPage"
  />
  <deads v-if="state.page === 'deads'" @setPage="setPage" />
  <ouija-interaction v-if="state.page === 'ouija'" @setPage="setPage" />
  <ouija-input v-if="state.page === 'ouija-input'" @setPage="setPage" />
  <ghost-book v-if="state.page === 'ghost-book'" @setPage="setPage" />

  <!--Hunter pages-->
  <hunter-localization v-if="state.page === 'gps'" @setPage="setPage" />
  <thermometer v-if="state.page === 'thermometer'" @setPage="setPage" />
  <safe-room v-if="state.page === 'safe-room'" @setPage="setPage" />
  <book v-if="state.page === 'book'" @setPage="setPage" />
  <emf v-if="state.page === 'emf'" @setPage="setPage" />
  <ouija-text v-if="state.page === 'ouija-text'" @setPage="setPage" />
</template>

<script>
import Book from "./views/Book";
import Emf from "./views/Emf";
import HunterLocalization from "./views/HunterLocalization";
import SafeRoom from "./views/SafeRoom";
import Thermometer from "./views/Thermometer";
import GhostBook from "./views/GhostBook";
import Deads from "./views/Deads";
import OuijaInteraction from "./views/OuijaInteraction";
import OuijaInput from "./views/OuijaInput";
import OuijaText from "./views/OuijaText";
import GhostInteraction from "./views/GhostInteraction";
import GhostHome from "./views/GhostHome";
import ChoosePlayers from "./views/ChoosePlayers";
import ChooseSafeRoom from "./views/ChooseSafeRoom";
import ChooseGhostRoom from "./views/ChooseGhostRoom";
import ChooseGhost from "./views/ChooseGhost";
import { reactive } from "vue";
import Home from "./views/Home";
import SocketConfig from "./socket.config";

export default {
  name: "App",
  components: {
    Emf,
    Book,
    SafeRoom,
    Thermometer,
    HunterLocalization,
    GhostBook,
    Deads,
    OuijaInteraction,
    OuijaInput,
    OuijaText,
    GhostInteraction,
    GhostHome,
    ChoosePlayers,
    ChooseGhostRoom,
    ChooseGhost,
    ChooseSafeRoom,
    Home,
  },
  setup() {
    let state = reactive({ page: localStorage.getItem("PAGE") });
    const publicPath = process.env.BASE_URL;
    const socket = SocketConfig.SOCKET;

    socket.on("PLAYERS_CREATED", (players) => {
      localStorage.setItem("PLAYERS", JSON.stringify(players));
    });

    socket.on("PLAYERS_MOVE", (room) => {
      localStorage.setItem("CURRENT_ROOM", room);
    });

    const setPage = (page) => {
      localStorage.setItem("PAGE", page);
      state.page = page;
    };

    return { state, setPage, publicPath };
  },
};
</script>
