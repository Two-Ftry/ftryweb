<template lang="html">
  <div class="mark-view-box">
  </div>
</template>

<script>
export default {
  name: 'MarkView',
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="sass">
.mark-view-box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100;
  height: 100px;
  background-color: #000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>
