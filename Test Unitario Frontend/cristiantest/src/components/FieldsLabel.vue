<template>
  <div>
    <label v-if="text"> {{text}} </label>
    <br>
    <input v-model="content" />
    <button @click="adicionar()"> Adicionar </button>
    <br>
    <br>
    <p> {{list}}</p>
    <button class="recuperar" @click="buscar()"> Recuperar Lista </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FieldsLabel',
  props: {
    text: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      content: '',
      list: [],
    };
  },
  methods: {
    adicionar() {
      this.list.push(this.content);
      this.content = '';
    },
    buscar() {
      const vm = this;
      axios.get('http://localhost:3030/')
        .then((response) => {
          vm.list = response;
        })
        .catch(() => {
          vm.list = [];
        });
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
