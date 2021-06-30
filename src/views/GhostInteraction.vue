<template>
  <router-link to="/ghost">Retour à la vue fantôme</router-link>
  <div class="container">
    <h1 class="text-center mb-5">Interaction fantomatique</h1>
    <h5 class="text-center mb-5">Qui a interagi avec vous ?</h5>
    <div class="row">
      <div class="col" v-for="(player, index) in players" :key="index">
        <img
          alt="Icon joueur"
          :id="`${player.color}-svg`"
          :src="`${publicPath}assets/person.svg`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GhostInteraction",
  setup() {
    const publicPath = process.env.BASE_URL;
    const players = localStorage.getItem("PLAYERS_COLORS");
    console.log(players);
    return { publicPath, players };
  },
};
</script>

<style scoped></style>
