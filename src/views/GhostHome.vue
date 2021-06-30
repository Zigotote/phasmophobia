<template>
  <div class="container">
    <h1 class="text-center mb-5">Vue du fantôme</h1>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <img
            class="col-3 rounded-pill"
            :class="!state.power ? 'border border-danger border-3' : ''"
            alt="Lumière éteinte"
            :src="`${publicPath}assets/power_off.svg`"
          />
          <div class="form-check form-switch col-3">
            <input
              class="form-check-input mx-auto mt-5"
              type="checkbox"
              id="switch"
              @change="togglePower"
            />
          </div>
          <img
            class="col-3 rounded-pill"
            :class="state.power ? 'border border-danger border-3' : ''"
            alt="Lumière allumée"
            :src="`${publicPath}assets/power_on.svg`"
          />
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "GhostHome",
  setup() {
    const publicPath = process.env.BASE_URL;
    const state = reactive({ power: false });
    const togglePower = () => {
      state.power = !state.power;
      console.log(state.power);
    };
    return { publicPath, state, togglePower };
  },
};
</script>

<style scoped>
#switch {
  width: 100%;
  height: 50%;
}
#selected {
  background-color: pink;
}
#unselected {
  background-color: black;
}
</style>
