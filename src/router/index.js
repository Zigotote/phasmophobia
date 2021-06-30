import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChooseGhost from "../views/ChooseGhost.vue";
import ChooseGhostRoom from "../views/ChooseGhostRoom.vue";
import ChooseSafeRoom from "../views/ChooseSafeRoom.vue";
import GhostHome from "../views/GhostHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/choose-ghost",
    name: "ChooseGhost",
    component: ChooseGhost,
  },
  {
    path: "/choose-ghost-room",
    name: "ChooseGhostRoom",
    component: ChooseGhostRoom,
  },
  {
    path: "/choose-safe-room",
    name: "ChooseSafeRoom",
    component: ChooseSafeRoom,
  },
  {
    path: "/ghost",
    name: "GhostHome",
    component: GhostHome,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
