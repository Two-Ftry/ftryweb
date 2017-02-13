<template lang="html">
  <li>
    <span>
      <i class="ftryweb ec-showhide"
        :class="{'icon-jia': !show, 'icon-jianshao1': show}"
        @click="onToShowOrHide"
        ></i>
      <span>{{data.name}}</span>
    </span>
    <ul v-if="data.subOrgs" class="ec-tree-list" :class="listClass" v-show="show">
      <ec-tree-item v-for="item in data.subOrgs" :data="item"></ec-tree-item>
    </ul>
  </li>
</template>

<script>
import Bus from 'common/js/bus';
export default {
  name: 'EcTreeItem',
  props:{
    data: Object,
    level: Number
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    listClass(){
      var arr = [];
      arr.push('ec-tree-level-' + (this.level+1));
      return arr;
    }
  },
  attached() {},
  methods: {
    onToShowOrHide(){
      this.show = !this.show;
      Bus.$emit('event-tree-item-click', {
        data: this.data,
        show: this.show
      });
    }
  },
  components: {}
};
</script>

<style lang="sass">
.ec-tree-list{
  padding-left: 18px;
}
.ec-showhide{
  font-size: 12px;
  cursor: pointer;
}
</style>
