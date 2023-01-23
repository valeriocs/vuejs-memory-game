<template lang="pug">
  v-layout(
    fill-height
    align-center
    justify-center
    )
    v-progress-circular(
    :size="size"
    :width="width"
    :color="color"
    indeterminate
    )
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 3,
    },
    size: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
      default: 'red',
    },
  },
};
</script>
