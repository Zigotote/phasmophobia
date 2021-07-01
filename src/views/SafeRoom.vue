<template>
  <div class="container">
    <h1 class="text-center mb-5">Santé mentale de l'équipe</h1>
    <div class="row">
      <div class="col text-center">
        <img
          class="mental-icon"
          id="red-svg"
          alt="Santé mentale"
          :src="`${publicPath}assets/psychology.svg`"
        />
      </div>
    </div>
    <div class="row">
      <div
        class="col-6 mb-5 mt-5"
        v-for="(player, index) in state.players"
        :key="player.name"
        :class="
          index % 2 == 0
            ? `${player.color} text-start`
            : `${player.color} text-end`
        "
      >
        {{ player.name }} : {{ player.mentalScore }}
        <button class="btn btn-danger" @click="() => takePill(player)">
          <img
            alt="Pilule"
            class="pill"
            :src="`${publicPath}assets/pill.svg`"
          />
        </button>
      </div>
    </div>
    <div class="text-center float-top">
      Santé mentale moyenne : {{ state.healthAvg }}
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "SafeRoom",
  setup() {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const state = reactive({
      players: JSON.parse(localStorage.getItem('PLAYERS')).filter(p => !p.isDead),
      healthAvg: computed(() => {
        let average = 0;
        for (const player of state.players) {
          average += player.mentalScore;
        }
        average /= 1.0 * state.players.length;
        return average;
      }),
    });
    socket.on('PLAYERS_CREATED', players => {
      state.players = players.filter(p => !p.isDead)
    })
    socket.on('PLAYERS_MENTAL_UPD', players => {
      state.players = players.filter(p => !p.isDead)
    })
    const takePill = (player) => {
      socket.emit('TAKE_MEDICINE', player.name)
    };
    return { publicPath, state, takePill };
  },
};
</script>

<style scoped>
html,
div {
  background-color: black;
  color: white;
}

.mental-icon {
  background-color: blue;
  width: 10rem;
}

.pill {
  width: 2rem;
}

.red {
  color: F20544;
}

.green {
  color: #07d915;
}

.blue {
  color: #05f2c7;
}

.brown {
  color: #a65341;
}

.purple {
  color: #797ed9;
}
</style>
