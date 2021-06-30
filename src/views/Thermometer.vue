<template>
  <h1 class="text-center">{{ temperature }}°C</h1>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Thermometer",
  setup() {
    const temperature = ref(15);
    return { temperature };
  },
};
</script>

<style scoped>
h1 {
  background-color: #e8eb06;
  font-size: 10rem;
}
</style>
