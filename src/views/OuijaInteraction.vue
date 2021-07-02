<template>
  <button class="btn btn-outline-dark" @click="$emit('setPage', 'ghost-home')">
    Retour
  </button>
  <div class="container">
    <h1 class="text-center mb-5">Interaction Ouija</h1>
    <h5 class="text-center mb-5">Qui a utilisé la Ouija ?</h5>
    <players-list
      socket-event="OUIJA_INTERACT"
      @setPage="$emit('setPage', 'ouija-input')"
    />
  </div>
</template>

<script>
import PlayersList from "../components/PlayersList.vue";

export default {
  name: "OuijaInteraction",
  emits: ["setPage"],
  components: { PlayersList },
};
</script>

<style scoped></style>
