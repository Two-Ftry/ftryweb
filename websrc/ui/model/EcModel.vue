<template lang="html">
  <div class="ec-model-box" v-show="data.isShow">
    <div class="ec-model-inner-box">
      <div class="ec-model-header">
        <p v-text="title"></p>
        <i class="ftryweb icon-guanbi ec-model-close" @click="onToClose"></i>
      </div>
      <div class="ec-model-body">
        <slot></slot>
      </div>
      <div class="ec-model-footer" v-show="!_hideFooter">
          <slot name="footer"></slot>
          <ec-button v-for="btn in btns"
                    :type="btn.type ? btn.type : ''"
                    :width="btn.width ? btn.width : ''"
                    :position="btn.position ? btn.position : 'right'"
                    :disabled="btn.disabled ? btn.disabled : 'false'"
                    :size="btn.size ? btn.size : 'default'"
                    >{{btn.text}}</ec-button>
      </div>
    </div>
    <mark-view></mark-view>
  </div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      default: 'Model title'
    },
    data: {
      type: Object,
      default: function(){
        return {};
      },
      required: true
    },
    hideFooter: {
      type: [Boolean, String], //是否隐藏footer
      default: false
    },
    btns: Array
  },
  data() {
    return {
    };
  },
  computed: {
    _hideFooter(){
      return common.util.coerce.boolean(this.hideFooter);
    }
  },
  mounted() {},
  attached() {},
  methods: {
    onToClose(){
      this.data.isShow = false;
      this.$emit('event-ecmodel-close');
    }
  },
  components: {}
};
</script>

<style lang="sass">
@import "../../common/css/var.scss";
.ec-model-box{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
.ec-model-inner-box{
  position: absolute;
  top: 50px;
  left: 50%;
  width: 500px;
  margin-left: -250px;
  z-index: 99;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 2px $gray;
}
.ec-model-header{
  position: relative;
  padding: 15px 20px;
  border-bottom: 1px solid $gray;
  .ec-model-close{
    position: absolute;
    top: 16px;
    right: 20px;
    font-size: 12px;
    cursor: pointer;
  }
  .ec-model-close:hover{
    color: $defaultHover;
  }
}
.ec-model-body{
  padding: 20px;
}
.ec-model-footer{
  padding: 15px 20px;
  border-top: 1px solid $gray;
}
</style>
