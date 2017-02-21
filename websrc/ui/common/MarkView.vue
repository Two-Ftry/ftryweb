<template lang="html">
  <div class="mark-view-box" @click="onToEmitEvent">
  </div>
</template>

<script>
export default {
  name: 'MarkView',
  methods:{
    onToEmitEvent(){
      this.$emit('event-click-mark-view');
    }
  }
};
</script>

<style lang="sass">
.mark-view-box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>
