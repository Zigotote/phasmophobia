<template>
  <div class="row m-1">
    <img
      class="col-2 rounded-pill"
      :class="!state.power ? 'border border-danger border-3' : ''"
      alt="Lumière éteinte"
      :src="`${publicPath}assets/power_off.svg`"
    />
    <div class="form-check form-switch col-3">
      <input
        class="form-check-input mx-auto mt-4"
        type="checkbox"
        id="switch"
        :disabled="!state.huntingAvailable"
        @change="togglePower"
      />
    </div>
    <img
      class="col-2 rounded-pill"
      :class="state.power ? 'border border-danger border-3' : ''"
      :src="`${publicPath}assets/power_on.svg`"
      alt="Lumière allumée"
    />
  </div>
  <div class="row m-1">
    <div class="row mt-3 mb-0">
      <h5 class="text-center mb-5">Variation de l'EMF</h5>
    </div>
    <div class="row">
      <div class="form-check col" v-for="(emf, index) in emfs" :key="index">
        <input
          class="form-check-input"
          type="radio"
          name="emf"
          :checked="index == 1"
          :disabled="!state.huntingAvailable"
          @click="() => changeEmf(index)"
        />
        <label class="form-check-label" for="emf">
          {{ emf }}
        </label>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-danger col m-1"
      :disabled="!state.huntingAvailable"
      @click="startHunt"
    >
      <img alt="Mode chasse" :src="`${publicPath}assets/target.svg`" />
      Chasser
    </button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "GhostActions",
  setup() {
    const publicPath = process.env.BASE_URL;
    const state = reactive({ power: false, huntingAvailable: true });
    const togglePower = () => {
      state.power = !state.power;
      console.log(state.power);
    };
    const emfs = ["Rare", "Occasionnel", "Souvent"];
    const changeEmf = (value) => {
      console.log(value);
    };
    const startHunt = () => {
      console.log("Start hunt");
      state.huntingAvailable = false;
      setTimeout(() => {
        state.huntingAvailable = true;
      }, 20000);
    };
    return { publicPath, state, togglePower, changeEmf, emfs, startHunt };
  },
};
</script>

<style scoped>
#switch {
  width: 100%;
  height: 50%;
}
</style>
