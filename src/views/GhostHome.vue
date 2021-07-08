<template>
  <button class="btn btn-outline-dark" @click="() => {$emit('setPage', ''); window.location.reload();}">Retour</button>
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
      <ghost-communications @setPage="p => $emit('setPage', p)"/>
    </div>
  </div>
</template>

<script>
import GhostActions from "../components/GhostActions.vue";
import GroupData from "../components/GroupData.vue";
import GhostCommunications from "../components/GhostCommunications.vue";

export default {
  name: "GhostHome",
  emits: ['setPage'],
  components: { GhostActions, GroupData, GhostCommunications },
};
</script>

<style scoped></style>
