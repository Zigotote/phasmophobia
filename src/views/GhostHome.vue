<template>
  <div class="container">
    <h1 class="text-center mb-5">Vue du fantôme</h1>
    <div class="row">
      <div class="col-8 border border-dark border-2 rounded m-1">
        <ghost-actions />
      </div>
      <div class="col-3 border border-dark border-2 rounded m-1">
        <group-data />
      </div>
    </div>
    <div class="row border border-dark border-2 rounded mt-4">
      <ghost-communications />
    </div>
  </div>
</template>

<script>
import GhostActions from "../components/GhostActions.vue";
import GroupData from "../components/GroupData.vue";
import GhostCommunications from "../components/GhostCommunications.vue";

export default {
  name: "GhostHome",
  components: { GhostActions, GroupData, GhostCommunications },
};
</script>

<style scoped></style>
