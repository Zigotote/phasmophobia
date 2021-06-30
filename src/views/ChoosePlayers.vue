<template>
  <div class="container">
    <h1 class="text-center mb-5">Qui sont les chasseurs de fantôme ?</h1>
    <div class="row">
      <div class="col" v-for="(player, index) in players" :key="index">
        <img
          alt="Icon joueur"
          :id="player.color"
          :src="`${publicPath}assets/person.svg`"
        />
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="player.name"
            :for="`name-${index}`"
          />
          <label class="form-label" :for="`name-${index}`">
            Joueur {{ index + 1 }}
          </label>
        </div>
      </div>
      <button type="button" class="btn btn-danger" @click="sendPlayers">
        Valider
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import SocketConfig from "../socket.config";

export default {
  name: "ChoosePlayers",
  setup() {
    const socket = SocketConfig.SOCKET;
    const router = useRouter();
    const publicPath = process.env.BASE_URL;
    const players = [
      { name: "", color: "green" },
      { name: "", color: "red" },
      { name: "", color: "blue" },
      { name: "", color: "brown" },
      { name: "", color: "" },
    ];
    const sendPlayers = () => {
      const playerNames = players.map((player) => player.name.trim()).filter(playerName => playerName.length > 0);
      socket.emit('PLAYERS_CREATED', playerNames);
      socket.on('PLAYERS_CREATED', players => {
        console.log(players);
        router.push({ name: "ChooseSafeRoom" });
      })
    };
    return { publicPath, players, sendPlayers };
  },
};
</script>

<style scoped>
#green {
  filter: invert(48%) sepia(22%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
}
#red {
  filter: invert(8%) sepia(0%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
}
#blue {
  filter: invert(100%) sepia(35%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
}
#brown {
  filter: invert(0%) sepia(50%) saturate(2476%) hue-rotate(86deg)
    brightness(80%) contrast(50%);
}
</style>
