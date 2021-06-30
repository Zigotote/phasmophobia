<template>
  <h1 class="text-center">{{ emf }}</h1>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Thermometer",
  setup() {
    const emf = ref(2);
    return { emf };
  },
};
</script>

<style scoped>
h1 {
  background-color: grey;
  font-size: 10rem;
}
</style>
