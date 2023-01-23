<template lang="pug">
  div
    v-toolbar.orange-peel(
      app
      extended
      )
      slot(name="tab-bar")
</template>

<script>
export default {
  methods: {
    changeDrawer() {
      this.$emit('change-drawer');
    },
  },
};
</script>
