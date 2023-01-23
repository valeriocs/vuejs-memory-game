<template lang="pug">
  v-dialog(
    persistent
    max-width="350"
    v-model="showPlayerDialog"
    )
    v-card
      v-toolbar(
        flat
        color="orange-peel"
        )
        v-layout(justify-center)
          v-toolbar-title Qual é seu nome?
      v-form(
        ref="form"
        v-model="valid"
        @submit.prevent="submit"
        )
        v-card-text
          v-text-field(
            label="Nome"
            name="playerName"
            :rules="nameRules"
            v-model="playerName"
            placeholder="João da Silva"
            )
        v-card-actions
          v-btn(
            flat
            block
            type="submit"
            color="pastel-black"
            )
            v-icon(left) check
            | OK
</template>

<script>
export default {
  name: 'PlayerDialog',
  props: {
    value: Boolean,
  },
  data: () => ({
    valid: false,
    playerName: null,
    nameRules: [v => !!v || 'Por favor, informe seu nome.'],
  }),
  computed: {
    showPlayerDialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$emit('set-player-name', this.playerName);
    },
  },
};
</script>
