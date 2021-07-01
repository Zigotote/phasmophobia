<template>
  <div class="row" v-for="(item, index) in state.items" :key="index">
    <img
      class="col-4"
      :src="`${publicPath}assets/${item.image}`"
      :alt="item.alt"
    />
    <h5 class="col-6 mt-4">{{ item.value }}</h5>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import SocketConfig from "../socket.config";

export default {
  name: "GroupData",
  setup() {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const state = reactive({
      temperature: 2.5,
      emf: "",
      psychology: 100,
      room: "Salon",
      items: computed(() => [
        {
          image: "thermostat.svg",
          alt: "Température",
          value: `${state.temperature}°C`,
        },
        {
          image: "emf.svg",
          alt: "EMF",
          value: state.emf,
        },
        {
          image: "psychology.svg",
          alt: "Santé mentale",
          value: `Moyenne : ${state.psychology}`,
        },

        {
          image: "location.svg",
          alt: "Emplacement joueurs",
          value: state.room,
        },
      ]),
    });
    socket.on('TEMP_UPD', temp => {
      state.temperature = temp;
    });

    socket.on('PLAYERS_MENTAL_UPD', players => {
      players = players.filter(p => !p.isDead);
      let average = 0;
      for(const player of players) {
        average += player.mentalScore;
      }
      average /= (1.0 *players.length);
      state.psychology = average;
    });

    socket.on('EMF_UPD', emf => {
      state.emf = emf;
    });

    return { publicPath, state };
  },
};
</script>
