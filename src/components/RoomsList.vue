<template>
  <div class="row" v-for="floor in floors" :key="floor.name">
    {{ floor.name }}
    <button
      type="button"
      class="btn btn-danger m-4"
      v-for="room in floor.rooms"
      :key="floor + room"
      :disabled="room == disabledRoom"
      @click="$emit('sendRoom', room)"
    >
      {{ room }}
    </button>
  </div>
</template>

<script>
export default {
  name: "RoomsList",
  props: { disabledRoom: String },
  emits: ["sendRoom"],
  setup() {
    const floors = [
      {
        name: "Rez-de-chaussée",
        rooms: [
          "Salon - salle à manger",
          "Bureau",
          "Cuisine",
          "Arrière-cuisine",
          "Toilettes",
          "Salle de bain",
        ],
      },
      {
        name: "1er étage",
        rooms: [
          "Palier",
          "Chambre orange",
          "Chambre bleue",
          "Chambre blanche",
          "Dressing",
          "Salle de jeux",
          "Salle de bain ",
        ],
      },
      {
        name: "2ème étage",
        rooms: ["Palier ", "Chambre"],
      },
    ];
    return { floors };
  },
};
</script>
