<template lang="pug">
  v-container(grid-list-md)
    v-layout(
      justify
      row
      nowrap
      )
      v-btn.orange-peel(
        fab
        small
        outline
        @click="$emit('edit-player-name')"
        )
        v-layout(
          align-center
          justify-center
          )
          v-icon.orange-peel--text edit
      .title.pt-3.pl-2 {{ playerName }}
    v-divider.orange-peel.my-3
    v-layout(row wrap)
      div
        .tempo.title.label.text-xs-center Tempo
        v-divider.azure-radiance.my-2
        .subheading.text-xs-center {{ time | timer }}
      v-spacer
      div
        .turno.title.label.text-xs-center Turno
        v-divider.azure-radiance.my-2
        .subheading.text-xs-center {{ turns }}
</template>

<script>
import timer from '@/app/Arch/Filters/Timer';

export default {
  name: 'GameData',
  props: {
    time: {
      type: Number,
    },
    turns: {
      type: Number,
      default: () => 0,
    },
    playerName: {
      type: String,
      default: () => 'Anônimo',
    },
  },
  filters: {
    timer,
  },
};
</script>
