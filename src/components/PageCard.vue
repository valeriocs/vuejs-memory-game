<template lang="pug">
  v-card.celeste.margin-negative-60.elevation-4
    v-toolbar.celeste(flat)
      v-toolbar-title
        v-layout(
          row
          align-center
          )
          v-icon.primary--text#route-icon {{ routeIcon }}
          .ml-3.primary--text#route-title {{ routeTitle }}
      v-spacer
      slot(name="button-bar")
    v-divider
    v-card-text.white-smoke
      slot
</template>

<script>
export default {
  name: 'Page',
  computed: {
    routeTitle() {
      const { meta } = this.$route;
      return meta.title;
    },
    routeIcon() {
      const { meta } = this.$route;
      return meta.icon;
    },
  },
};
</script>
