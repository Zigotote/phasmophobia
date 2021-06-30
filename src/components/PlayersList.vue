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

export default {
  name: "PlayersList",
  props: { socketEvent: String },
  setup() {
    const publicPath = process.env.BASE_URL;
    const router = useRouter();
    //TODO To plug with API
    const players = JSON.parse(localStorage.getItem("PLAYERS_COLORS"));
    const selectPlayer = (player) => {
      console.log(player);
      //TODO call socket event
      router.push({ name: "GhostHome" });
    };
    return { publicPath, players, selectPlayer };
  },
};
</script>
