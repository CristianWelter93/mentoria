<template>
  <div>
    <br>
    <p> {{list}}</p>
    <button class="recuperar" @click="buscar()"> Recuperar Lista </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ShowList',
  props: {
    new: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  watch: {
      new:function(newVal) {
        this.list.push(newVal);
      }
  },
  methods: {
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
