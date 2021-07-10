<template>
  <div class="container">
    <h1 class="text-center mb-5">Bienvenue sur Phasmophobia IRL</h1>
    <div class="row">
      <div class="col" v-for="link in links" :key="link.to">
        <button
          type="button"
          @click="$emit('setPage', link.to)"
          class="btn btn-danger m-4"
          v-if="link.to !== 'ghost-home' || partyStart"
        >
          {{ link.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "Home",
  emits: ["setPage"],
  setup() {
    const links = [
      {
        to: "choose-ghost",
        name: "Démarrer une partie",
      },
      {
        to: "ghost-home",
        name: "Vue fantôme",
      },
      {
        to: "safe-room",
        name: "PC Safe room",
      },
      {
        to: "book",
        name: "Livre d'écriture",
      },
      {
        to: "thermometer",
        name: "Thermomètre",
      },
      {
        to: "emf",
        name: "EMF",
      },
      {
        to: "ouija-text",
        name: "Ouija",
      },
      {
        to: "gps",
        name: "GPS de l'équipe",
      },
    ];

    let partyStart = ref(localStorage.getItem("PARTY_START"));
    const socket = SocketConfig.SOCKET;
    socket.on("PARTY_START", () => {
      partyStart = true;
      localStorage.setItem("PARTY_START", true);
    });
    return { links, partyStart };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.card {
  width: 18rem;
}
</style>
