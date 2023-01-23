<template lang="pug">
  v-card.min-height-200#home-buttons(
    hover
    ripple
    raised
    :to="path"
    )
    .title.text-xs-center {{ label }}
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    path: {
      type: String,
    },
  },
};
</script>
