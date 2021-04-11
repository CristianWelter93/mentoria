<template>
  <div>
    <label v-if="text"> {{ text }} </label>
    <br />
    <input v-model="content" />
    <button @click="adicionar()">Adicionar</button>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Insert',
  props: {
    text: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    adicionar() {
      this.$emit('new-value', this.content);
      this.content = '';
    },
  },
};
</script>

<style lang='sass' scoped>
</style>
