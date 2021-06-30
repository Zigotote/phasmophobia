<template>
  <router-link to="/ghost">Retour à la vue fantôme</router-link>
  <div class="container">
    <h1 class="text-center mb-5">Décès soudain</h1>
    <h5 class="text-center mb-5">Qui est mort ?</h5>
    <players-list />
  </div>
</template>

<script>
import PlayersList from "../components/PlayersList.vue";

export default {
  name: "Deads",
  components: { PlayersList },
};
</script>

<style scoped></style>
