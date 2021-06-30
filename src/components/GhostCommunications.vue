<template>
  <router-link
    class="col"
    v-for="(item, index) in items"
    :key="index"
    :to="item.link"
  >
    <div class="row">
      <div class="col" />
      <img :src="`${publicPath}assets/${item.image}`" :alt="item.alt" />
      <div class="col" />
    </div>
    <div class="row">
      <p class="text-center">
        {{ item.alt }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "GhostCommunications",
  setup() {
    const publicPath = process.env.BASE_URL;
    const items = [
      {
        image: "ouija.png",
        alt: "Ouija",
        link: "/",
      },
      {
        image: "book.svg",
        alt: "Livre d'écriture",
        link: "/book",
      },
      {
        image: "eye.svg",
        alt: "Interactions",
        link: "/ghost-interaction",
      },
      {
        image: "skull.svg",
        alt: "Morts",
        link: "/",
      },
    ];
    return { publicPath, items };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: darkred;
}

img {
  height: 6rem;
  width: 8rem;
}
</style>
