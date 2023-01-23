<template lang="pug">
  v-app.pastel-black
    v-fade-transition(mode="out-in")
      router-view
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="sass" src="@/assets/Styles/Main.sass"></style>
