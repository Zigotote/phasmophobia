<template>
  <router-link to="/ghost">Retour à la vue fantôme</router-link>
  <div class="container">
    <h1 class="text-center mb-5">Interaction fantomatique</h1>
    <h5 class="text-center mb-5">Qui a interagi avec vous ?</h5>
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
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "GhostInteraction",
  setup() {
    const publicPath = process.env.BASE_URL;
    const router = useRouter();
    //TODO To plug with API
    const players = JSON.parse(localStorage.getItem("PLAYERS_COLORS"));
    const selectPlayer = (player) => {
      console.log(player);
      router.push({ name: "GhostHome" });
    };
    return { publicPath, players, selectPlayer };
  },
};
</script>

<style scoped></style>
