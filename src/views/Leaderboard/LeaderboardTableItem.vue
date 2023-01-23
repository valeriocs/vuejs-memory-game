<template lang="pug">
  tr
    td.text-xs-center {{ item.name }}
    td.text-xs-center {{ item.time | timer }}
    td.text-xs-center {{ item.turn }}
</template>


<script>
import timer from '@/app/Arch/Filters/Timer';

export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        name: null,
        time: null,
        turn: null,
      }),
    },
  },
  filters: {
    timer,
  },
};
</script>
