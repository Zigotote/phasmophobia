<template>
  <h1 class="text-center">{{ state.emf }}</h1>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Thermometer",
  setup() {
    const state = reactive({ emf: 2 });
    return { state };
  },
};
</script>

<style scoped>
h1 {
  background-color: grey;
  font-size: 10rem;
}
</style>
