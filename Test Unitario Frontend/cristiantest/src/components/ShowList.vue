<template>
  <div>
    <br>
    <button class="recuperar" @click="buscar()"> Recuperar Lista </button>
    <br>
    <li v-for='item in list' :key='item' class="space-list">
      {{ item }}
    </li>
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
    new(newVal) {
      this.list.push(newVal);
    },
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

.space-list
  margin-top: 20px,
</style>
