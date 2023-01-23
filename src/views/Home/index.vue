<template lang="pug">
  page-card
    v-container(grid-list-md)
      v-layout(
        row
        wrap
        )
        v-flex(xs12)
          .title.text-xs-center.mb-3 O que você gostaria de fazer ?
          v-divider.azure-radiance
        v-flex(
          xs6
          :key="button.label"
          v-for="button in buttons"
          )
          home-button(
            :path="button.path"
            :label="button.label"
            )
</template>

<script>
import PageCard from '@/components/PageCard.vue';
import HomeButton from './HomeButton.vue';

export default {
  components: {
    PageCard,
    HomeButton,
  },
  data: () => ({
    buttons: [
      {
        label: 'Quero jogar!',
        path: 'memory-game',
      },
      {
        label: 'Só conferir o placar!',
        path: 'leaderboard',
      },
    ],
  }),
};
</script>
