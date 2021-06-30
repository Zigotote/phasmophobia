<template>
  <div class="container">
    <h1 class="text-center mb-5">Bienvenue sur Phasmophobia IRL</h1>
    <h5 class="text-center mb-5">Quel appareil souhaitez-vous lancer ?</h5>
    <div class="row">
      <router-link
        class="col"
        v-for="link in links"
        :key="link.to"
        :to="link.to"
      >
        <button type="button" class="btn btn-danger m-4">
          {{ link.name }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import SocketConfig from "../socket.config";

export default {
  name: "Home",
  setup() {
    const socket = SocketConfig.SOCKET;

    socket.on('PLAYERS_CREATED', players => {
      localStorage.setItem('PLAYERS', JSON.stringify(players));
    });

    socket.on('PLAYERS_MENTAL_UPD', players => {
      localStorage.setItem('PLAYERS', JSON.stringify(players));
    });

    const links = [
      {
        to: "/choose-ghost",
        name: "Démarrer une partie",
      },
      {
        to: "/ghost",
        name: "Vue fantôme",
      },
      {
        to: "/safe-room",
        name: "PC Safe room",
      },
      {
        to: "/book",
        name: "Livre d'écriture",
      },
      {
        to: "/thermometer",
        name: "Thermomètre",
      },
      {
        to: "/emf",
        name: "EMF",
      },
      {
        to: "/gps",
        name: "GPS des chasseurs",
      },
    ];
    return { links };
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
