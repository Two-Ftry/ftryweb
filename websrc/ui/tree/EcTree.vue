<template lang="html">
  <div class="ec-tree-box">
    <ul class="ec-tree-list">
      <ec-tree-item v-for="item in list" :data="item" :level="level">
      </ec-tree-item>
    </ul>
  </div>
</template>

<script>
import EcTreeItem from './EcTreeItem';
import Bus from 'common/js/bus';
export default {
  props:{
    list: Array
  },
  data() {
    return {
      level: 1
    };
  },
  computed: {},
  attached() {},
  mounted(){
    var me = this;
    Bus.$on('event-tree-item-click', function(data){
      me.onToEmitClickEvent(data);
    });
  },
  methods: {
    onToEmitClickEvent(data){
      this.$emit('event-tree-click', data);
    }
  },
  components: {
    EcTreeItem
  }
};
</script>

<style lang="sass">
.ec-tree-box{

  .ec-tree-list{
  }
}
</style>
