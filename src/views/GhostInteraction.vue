<template>
  <button @click="$emit('setPage', 'ghost-home')">Retour</button>
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
  emits: ['setPage'],
  components: { PlayersList },
};
</script>

<style scoped></style>
