<template>
  <h1 class="text-center">{{ state.temperature }}°C</h1>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Thermometer",
  setup() {
    const state = reactive({ temperature: 15 });
    return { state };
  },
};
</script>

<style scoped>
h1 {
  background-color: #e8eb06;
  font-size: 10rem;
}
</style>
