<template>
  <div class="container">
    <h1 class="text-center mb-5">Bienvenue sur Phasmophobia IRL</h1>
    <div class="row">
      <router-link
        class="col"
        v-for="link in links"
        :key="link.to"
        :to="link.to"
      >
        <button type="button" class="btn btn-danger m-4">
          {{ link.name }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    const links = [
      {
        to: "/choose-ghost",
        name: "Démarrer une partie",
      },
      {
        to: "/ghost",
        name: "Vue fantôme",
      },
    ];
    return { links };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.card {
  width: 18rem;
}
</style>
