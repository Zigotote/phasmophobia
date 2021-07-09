<template>
  <button class="btn btn-outline-dark" @click="() => {$emit('setPage', ''); window.location.reload();}">Retour</button>
  <div class="container">
    <h1 class="text-center mb-5">Vue du fantôme</h1>
    <div class="d-flex border border-dark border-2 rounded">
      <group-data/>
    </div>
    <div class="border border-dark border-2 rounded mt-4">
        <ghost-actions />
    </div>
    <div class="d-flex border border-dark border-2 rounded mt-4">
      <ghost-communications @setPage="p => $emit('setPage', p)"/>
    </div>
  </div>
</template>

<script>
import GroupData           from '../components/GroupData';
import GhostActions        from "../components/GhostActions.vue";
import GhostCommunications from "../components/GhostCommunications.vue";

export default {
  name: "GhostHome",
  emits: ['setPage'], components: { GroupData, GhostActions, GhostCommunications },
};
</script>

<style scoped></style>
