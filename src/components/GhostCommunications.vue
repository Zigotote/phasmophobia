<template>
  <button
    class="col btn"
    v-for="(item, index) in items"
    :key="index"
    @click="$emit('setPage', item.link)"
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
  </button>
</template>

<script>
export default {
  name: "GhostCommunications",
  emits: ["setPage"],
  setup() {
    const publicPath = process.env.BASE_URL;
    const canWrite = localStorage.getItem("GHOST_CAN_WRITE");
    const items = [
      {
        image: "ouija.png",
        alt: "Ouija",
        link: "/",
      },
      {
        image: "eye.svg",
        alt: "Interactions",
        link: "ghost-interaction",
      },
      {
        image: "skull.svg",
        alt: "Morts",
        link: "deads",
      },
    ];
    if (canWrite) {
      items.splice(1, 0, {
        image: "book.svg",
        alt: "Livre d'écriture",
        link: "ghost-book",
      });
    }
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
