<template>
  <div class="container">
    <h1 class="text-center mb-5">Vue du fantôme</h1>
    <div class="row">
      <ghost-actions />
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import GhostActions from "../components/GhostActions.vue";

export default {
  name: "GhostHome",
  components: { GhostActions },
};
</script>

<style scoped></style>
