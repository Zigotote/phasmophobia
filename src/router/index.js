import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChooseGhost from "../views/ChooseGhost.vue";
import ChooseGhostRoom from "../views/ChooseGhostRoom.vue";
import ChoosePlayers from "../views/ChoosePlayers.vue";
import ChooseSafeRoom from "../views/ChooseSafeRoom.vue";
import GhostHome from "../views/GhostHome.vue";
import GhostBook from "../views/GhostBook.vue";
import GhostInteraction from "../views/GhostInteraction.vue";
import Deads from "../views/Deads.vue";
import SafeRoom from "../views/SafeRoom.vue";
import Book from "../views/Book.vue";
import Thermometer from "../views/Thermometer.vue";
import Emf from "../views/Emf.vue";

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
    path: "/choose-players",
    name: "ChoosePlayers",
    component: ChoosePlayers,
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
  {
    path: "/ghost-book",
    name: "GhostBook",
    component: GhostBook,
  },
  {
    path: "/ghost-interaction",
    name: "GhostInteraction",
    component: GhostInteraction,
  },
  {
    path: "/deads",
    name: "Deads",
    component: Deads,
  },
  {
    path: "/safe-room",
    name: "SafeRoom",
    component: SafeRoom,
  },
  {
    path: "/book",
    name: "Book",
    component: Book,
  },
  {
    path: "/thermometer",
    name: "Thermometer",
    component: Thermometer,
  },
  {
    path: "/emf",
    name: "emf",
    component: Emf,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
