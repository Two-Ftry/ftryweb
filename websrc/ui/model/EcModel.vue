<template lang="html">
  <transition name="ecmf">
    <div class="ec-model-box" v-show="data.isShow">
      <div class="ec-model-inner-box">
        <div class="ec-model-header">
          <p v-text="title"></p>
          <i class="ftryweb icon-guanbi ec-model-close" @click="onToClose"></i>
        </div>
        <div class="ec-model-body">
          <slot></slot>
        </div>
        <div class="ec-model-footer clearfix" v-show="!_hideFooter">
            <slot name="footer"></slot>
            <span class="ec-btn-box" v-for="(btn, index) in _btns" :class="{'first-child': index==0}"
                  @click="onToClickBtn(btn)"
            >
              <ec-button :type="btn.type ? btn.type : ''"
                        :width="btn.width ? btn.width : ''"
                        :position="btn.position ? btn.position : 'right'"
                        :disabled="btn.disabled ? btn.disabled : 'false'"
                        :size="btn.size ? btn.size : 'small'"

                        >{{btn.text}}</ec-button>
            </span>

        </div>
      </div>
      <mark-view></mark-view>
    </div>
  </transition>
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
    var me = this;
    return {
      okBtn:{
        text: '确定',
        type: 'success',
        callback: function(){
          me.$emit('event-ecmodel-ok');
        }
      },
      cancelBtn:{
        text: '取消',
        type: 'default',
        callback: function(){
          me.data.isShow = false;
          me.$emit('event-ecmodel-cancel');
        }
      }
    };
  },
  computed: {
    _hideFooter(){
      return common.util.coerce.boolean(this.hideFooter);
    },
    _btns(){
      if(!this.btns || this.btns.length == 0){
        var arr = [];
        arr.push(this.okBtn);
        arr.push(this.cancelBtn);
        return arr;
      }else{
        return this.btns;
      }
    }
  },
  mounted() {},
  attached() {},
  methods: {
    onToClose(){
      this.data.isShow = false;
      this.$emit('event-ecmodel-close');
    },
    onToClickBtn(btnItem){
      btnItem.callback && btnItem.callback();
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
  .ec-btn-box{
    float: right;
    margin-right: 8px;
  }
  .ec-btn-box.first-child{
    margin-right: 0;
  }
  .enter-ecmf, .enter-active-ecmf{
    // transition:  2s;
  }
</style>
