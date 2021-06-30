<template>
  <router-link to="/ghost">Retour à la vue fantôme</router-link>
  <div class="container">
    <h1 class="text-center mb-5">Livre d'écriture fantomatique</h1>
    <h5 class="text-center mb-5">Que souhaitez-vous écrire dans le livre ?</h5>
    <div class="row">
      <button
        class="col-3 mb-3"
        v-for="index in 8"
        :key="index"
        @click="() => sendWriting(index)"
      >
        <img
          class="col-10"
          :src="`${publicPath}assets/ghost_writing/${index}.PNG`"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GhostBook",
  setup() {
    const publicPath = process.env.BASE_URL;
    const sendWriting = (index) => {
      console.log(index);
    };
    return { publicPath, sendWriting };
  },
};
</script>

<style scoped></style>
