<template lang="pug">
  .splash
    .overlay
      v-card.content.pastel-black
        v-layout(
          row
          wrap
          fill-height
          align-center
          justify-center
          )
          v-flex(xs12)
            .title.celeste--text Parabéns {{ playerName }}
          v-flex(xs12)
            .title.celeste--text Você ganhou !
          v-layout(align-end justify-center column wrap)
            v-btn.orange-peel#btn-new-game(block @click="$emit('start-new-game')") Começar novo jogo
            v-btn.orange-peel#btn-leaderboard(block :to="{name: 'Leaderboard'}") Ver placar
</template>

<script>

export default {
  props: {
    playerName: {
      type: String,
      default: () => '',
    },
  },
};
</script>

