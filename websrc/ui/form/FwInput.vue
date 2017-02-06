<template lang="html">
  <div class="fw-input-box">
    <input type="text" name="" value="" :placeholder="placeholder" :style="inputStyle"/>
    <i v-if="icon" class="ftryweb" :class="['icon-' + icon]"></i>
  </div>
</template>

<script>
export default {
  props:{
    type:{
      type: String,
      default: 'primary'
    },
    disabled: [Boolean, String],
    icon: String,
    iconPosition:{
      type: String,
      default: 'right'
    },
    placeholder: String
  },
  computed: {
    inputStyle(){
      let o = {};
      if(this.icon){
        o['padding-right'] = '30px';
      }
      return o;
    }
  }
}
</script>

<style lang="sass">
  .fw-input-box{
    position: relative;
    display: inline-block;
    input{
      display: inline-block;
      height: 32px;
      line-height: 32px;
      padding: 0 10px;
      border-radius: 4px;
      // border: 1px solid #fff;
      border: 2px solid #dce4ec
    }
    i{
      position: absolute;
      top: 5px;
      right: 10px;
    }
  }
</style>
