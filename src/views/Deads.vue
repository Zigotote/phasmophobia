<template>
  <button class="btn btn-outline-dark" @click="$emit('setPage', 'ghost-home')">
    Retour
  </button>
  <div class="container">
    <h1 class="text-center mb-5">Décès soudain</h1>
    <h5 class="text-center mb-5">Qui est mort ?</h5>
    <players-list
      socket-event="PLAYER_DEATH"
      @setPage="$emit('setPage', 'ghost-home')"
    />
  </div>
</template>

<script>
import PlayersList from "../components/PlayersList.vue";

export default {
  name: "Deads",
  emits: ["setPage"],
  components: { PlayersList },
};
</script>

<style scoped></style>
