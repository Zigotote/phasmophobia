<template>
  <router-link to="/ghost">Retour à la vue fantôme</router-link>
  <div class="container">
    <h1 class="text-center mb-5">Interaction fantomatique</h1>
    <h5 class="text-center mb-5">Qui a interagi avec vous ?</h5>
    <players-list socket-event="GHOST_INTERACT"/>
  </div>
</template>

<script>
import PlayersList from "../components/PlayersList.vue";

export default {
  name: "GhostInteraction",
  components: { PlayersList },
};
</script>

<style scoped></style>
