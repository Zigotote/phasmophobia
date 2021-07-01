<template>
  <div class="container">
    <h1 class="text-center mb-5">Qui sont les chasseurs de fantôme ?</h1>
    <div class="row">
      <div class="col" v-for="(player, index) in players" :key="index">
        <img
          alt="Icon joueur"
          :id="`${player.color}-svg`"
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
import SocketConfig from "../socket.config";

export default {
  name: "ChoosePlayers",
  emits: ['setPage'],
  setup(_, context) {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const players = [
      { name: "", color: "green" },
      { name: "", color: "red" },
      { name: "", color: "blue" },
      { name: "", color: "brown" },
      { name: "", color: "purple" },
    ];
    socket.on("PLAYERS_CREATED", () => {
      context.emit('setPage', 'choose-safe-room');
    });

    const sendPlayers = () => {
      const playerNames = players
        .map((player) => {
          return { name: player.name.trim(), color: player.color };
        })
        .filter((player) => player.name.length > 0);
      socket.emit("PLAYERS_CREATED", playerNames);
    };
    return { publicPath, players, sendPlayers };
  },
};
</script>
