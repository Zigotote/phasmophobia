<template>
  <div class="row" v-for="(item, index) in state.items" :key="index">
    <img
      class="col-5"
      :src="`${publicPath}assets/${item.image}`"
      :alt="item.alt"
    />
    <h5 class="col-6 mt-5">{{ item.value }}</h5>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "GroupData",
  setup() {
    const publicPath = process.env.BASE_URL;
    const state = reactive({
      temperature: 15,
      emf: "Rare",
      psychology: 87,
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
    return { publicPath, state };
  },
};
</script>
