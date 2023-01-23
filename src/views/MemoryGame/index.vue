<template lang="pug">
  page-card
    player-dialog(
      v-model="showPlayerDialog"
      @set-player-name="setPlayerName"
      )
    game-data(
      :time="game.time"
      :turns="game.turn"
      :playerName="player.name"
      @edit-player-name="editPlayerName"
      )
    v-container(grid-list-xs)
      v-layout(row wrap justify-center)
        game-card(
          :key="index"
          :card="card"
          @click="selectCard(index)"
          v-for="(card, index) in game.cards"
          )
    transition(name="fade-transition" mode="out-in")
      splash(
        :playerName="player.name"
        @start-new-game="startGame"
        v-if="gameHasEnded"
        )
</template>

<script>
import Game from '@/app/Game';
import Player from '@/app/Player';
import PageCard from '@/components/PageCard.vue';
import PlayerDialog from '@/components/PlayerDialog.vue';
import Splash from './Splash.vue';
import GameCard from './GameCard.vue';
import GameData from './GameData.vue';
import LeaderboardService from '../Leaderboard/LeaderboardService';

export default {
  name: 'VuejsMemoryGame',
  components: {
    Splash,
    PageCard,
    GameCard,
    GameData,
    PlayerDialog,
  },
  data: () => ({
    game: {},
    player: {},
    gameHasEnded: false,
    showPlayerDialog: false,
  }),
  methods: {
    startGame() {
      this.game = new Game();
      this.gameHasEnded = false;
      if (!this.player.name) {
        this.player = new Player();
        this.editPlayerName();
      }
      this.game.onGameOver(this.gameOver);
    },
    setPlayerName(playerName) {
      this.player.name = playerName;
      this.showPlayerDialog = false;
    },
    editPlayerName() {
      this.showPlayerDialog = true;
    },
    selectCard(index) {
      this.game.selectCard(index);
    },
    gameOver() {
      this.gameHasEnded = true;
      const newPlayer = {
        name: this.player.name,
        time: this.game.time,
        turn: this.game.turn,
      };
      LeaderboardService.create(newPlayer);
    },
  },
  created() {
    this.startGame();
  },
};
</script>
