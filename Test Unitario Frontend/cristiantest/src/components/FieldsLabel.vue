<template>
  <div>
    <insert :text="text" @new-value="add"/>
    <show-list :new="content"/>
  </div>
</template>

<script>
import Insert from './Insert.vue';
import ShowList from './ShowList.vue';

export default {
  components: { Insert, ShowList },
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
    };
  },
  methods: {
    add(newValue) {
      console.log('chamou o add:', newValue);
      this.content = newValue;
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
