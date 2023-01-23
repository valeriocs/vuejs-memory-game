<template lang="pug">
  page-card
    load-card(
      :width="5"
      :size="300"
      color="blue"
      v-if="loading"
      )
    v-data-table.azure-radiance.leaderboard(
      dark
      v-else
      must-sort
      hide-actions
      :items="players"
      :headers="headers"
      :no-data-text="noDataText"
      )
      template(
        slot="items"
        slot-scope="{ item }"
        )
        leaderboard-table-item(:item="item")
    v-alert(
      icon="warning"
      :value="errorMessage"
      )
      | {{ errorMessage }}
</template>

<script>
import PageCard from '@/components/PageCard.vue';
import LoadCard from '@/components/LoadCard.vue';
import LeaderboardService from './LeaderboardService';
import LeaderboardTableItem from './LeaderboardTableItem.vue';

export default {
  name: 'Leaderboard',
  components: {
    LoadCard,
    PageCard,
    LeaderboardTableItem,
  },
  data: () => ({
    headers: [],
    players: [],
    loading: false,
    noDataText: 'Parece que ninguém jogou ainda.',
    errorMessage: '',
  }),
  created() {
    this.setHeaders();
    this.getPlayers();
  },
  methods: {
    isLoading() {
      this.loading = true;
    },
    isLoaded() {
      this.loading = false;
    },
    setHeaders() {
      this.headers = LeaderboardService.getHeaders();
    },
    getPlayers() {
      this.isLoading();
      LeaderboardService
        .findPlayers()
        .then(({ data }) => {
          this.players = data;
          this.isLoaded();
        })
        .catch(() => {
          this.isLoaded();
          this.errorMessage = 'Tente novamente mais tarde.';
        });
    },
  },
};
</script>
