import { createRouter, createWebHistory } from "vue-router";
import ChooseGhost from "../views/ChooseGhost.vue";
import ChooseGhostRoom from "../views/ChooseGhostRoom.vue";

const routes = [
  {
    path: "/",
    name: "ChooseGhost",
    component: ChooseGhost,
  },
  {
    path: "/",
    name: "ChooseGhostRoom",
    component: ChooseGhostRoom,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
