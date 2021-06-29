<template>
  <div class="row" v-for="floor in floors" :key="floor.name">
    {{ floor.name }}
    <button
      type="button"
      class="btn btn-danger m-4"
      v-for="room in floor.rooms"
      :key="floor + room"
      @click="$emit('sendRoom', room)"
    >
      {{ room }}
    </button>
  </div>
</template>

<script>
export default {
  name: "RoomsList",
  emits: ["sendRoom"],
  setup() {
    const floors = [
      {
        name: "Rez-de-chaussée",
        rooms: [
          "Salon",
          "Bureau",
          "Cuisine",
          "Arrière-cuisine",
          "Salle de bain",
        ],
      },
      {
        name: "1er étage",
        rooms: [
          "Pallier",
          "Chambre orange",
          "Chambre bleue",
          "Chambre blanche",
          "Salle de jeux",
          "Salle de bain",
        ],
      },
    ];
    return { floors };
  },
};
</script>
