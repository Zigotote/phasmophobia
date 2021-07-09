<template>
  <div class="row m-1 justify-content-center">
    <div class="col-2">
      <img alt="Lumière éteinte" :src="`${publicPath}assets/power_off.svg`"/>
      <div>off</div>
    </div>
    <div class="form-check form-switch col-4">
      <input
        class="form-check-input mx-auto mt-2"
        type="checkbox"
        id="switch"
        v-model="state.power"
        :disabled="!state.huntingAvailable"
        @change="togglePower"
      />
    </div>
    <div class="col-2">
      <img :src="`${publicPath}assets/power_on.svg`" alt="Lumière allumée"/>
      <div>on</div>
    </div>
  </div>
  <div class="row m-1">
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
import SocketConfig from "../socket.config";

export default {
  name: "GhostActions",
  setup() {
    const socket = SocketConfig.SOCKET;
    const publicPath = process.env.BASE_URL;
    const state = reactive({
      power: localStorage.getItem("POWER"),
      huntingAvailable: true,
    });
    const togglePower = () => {
      localStorage.setItem("POWER", state.power);
      socket.emit(state.power ? "POWER_ON" : "POWER_OFF");
    };
    const emfs = ["Rare", "Occasionnel", "Souvent"];
    const changeEmf = (value) => {
      socket.emit("EMF_FREQUENCY_UPD", value);
    };
    const startHunt = () => {
      socket.emit("HUNTING_STARTED");
      state.huntingAvailable = false;
      setTimeout(() => {
        state.huntingAvailable = true;
      }, 60000);
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
