import { createRouter, createWebHistory } from "vue-router";
import ChooseGhost from "../views/ChooseGhost.vue";
import ChooseGhostRoom from "../views/ChooseGhostRoom.vue";
import ChooseSafeRoom from "../views/ChooseSafeRoom.vue";

const routes = [
  {
    path: "/",
    name: "ChooseGhost",
    component: ChooseGhost,
  },
  {
    path: "/ghost-room",
    name: "ChooseGhostRoom",
    component: ChooseGhostRoom,
  },
  {
    path: "/safe-room",
    name: "ChooseSafeRoom",
    component: ChooseSafeRoom,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
