<template lang="pug">
  .card(
    @click="$emit('click')"
    :class="{ flipped: card.flipped }"
    )
    .back(:class="card.title")
    .side(:style="sideCardStyle")
</template>


<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => ({
        media: '',
        virada: false,
        encontrada: false,
      }),
    },
  },
  computed: {
    sideCardStyle() {
      return {
        backgroundImage: `url(${this.card.media})`,
      };
    },
  },
};
</script>
