<template lang="html">
  <li >
    <span class="ec-tree-span" :class="{'selected': selected}">
      <i class="ftryweb ec-showhide"
        :class="{'icon-jia': !show, 'icon-jianshao1': show}"
        @click="onToShowOrHide"
        ></i>
      <span class="ec-tree-item-name" @click="onToTriggerSelect">{{data.name}}</span>
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
      show: false,
      selected: false
    };
  },
  computed: {
    listClass(){
      var arr = [];
      arr.push('ec-tree-level-' + (this.level+1));
      return arr;
    }
  },
  mounted(){
    var me = this;
    Bus.$on('event-tree-item-selected', function(data){
      if(data.selected && data.data.id != me.data.id && me.selected){
        me.onToCancelSelected();
      }
    });
  },
  attached() {},
  methods: {
    onToShowOrHide(){
      this.show = !this.show;
      Bus.$emit('event-tree-item-click', {
        data: this.data,
        show: this.show
      });
    },
    onToTriggerSelect(){
      this.selected = !this.selected;
      this.emitSelectedEvent();
    },
    //取消选择,并派发事件
    onToCancelSelected(){
      this.selected = false;
      this.emitSelectedEvent();
    },
    emitSelectedEvent(){
      Bus.$emit('event-tree-item-selected', {
        data: this.data,
        selected: this.selected
      });
    }
  },
  components: {}
};
</script>

<style lang="sass">
@import "../../common/css/var.scss";
.ec-tree-list{
  padding-left: 18px;
  li{
    padding: 2px 0;
  }
  .selected{
    background-color: $success;
    color: $white;
    .ec-tree-item-name{
    }
  }
  .ec-tree-item-name{
    padding: 0 8px;
    line-height: 18px;
  }
  .ec-tree-span{
    display: inline-block;
    padding-left: 4px;
    white-space: nowrap;
    cursor: pointer;
  }
  .ec-tree-span:hover{
    background-color: $successHover;
    color: $white;
  }
}
.ec-showhide{
  font-size: 12px;
  cursor: pointer;
}
</style>
