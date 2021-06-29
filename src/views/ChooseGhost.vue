<template>
  <div class="container">
    <h1 class="text-center mb-5">Sélectionnez votre fantôme</h1>
    <div class="row">
      <div class="col" v-for="ghost in ghosts" :key="ghost">
        <button type="button" class="btn btn-danger m-4" @click="sendGhost">
          {{ ghost }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ChooseGhost",
  setup() {
    const router = useRouter();
    const ghosts = [
      "Esprit",
      "Spectre",
      "Fantôme",
      "Poltergeist",
      "Banshee",
      "Revenant",
      "Ombre",
      "Djinn",
      "Cauchemar",
      "Démon",
      "Yurei",
      "Oni",
      "Yokai",
      "Hantu",
    ];
    ghosts.sort();
    const sendGhost = (ghost) => {
      console.log(ghost.target.innerHTML);
      router.push({ name: "ChooseGhostRoom" });
    };
    return { ghosts, sendGhost };
  },
};
</script>
