<template lang="html">
  <div class="fw-input-box">
    <input type="text" name="" value="" />
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
    }
  }
}
</script>

<style lang="sass">
  .fw-input-box{
    position: relative;
    input{
      display: inline-block;
      height: 32px;
      line-height: 32px;
      border-radius: 4px;
      border: 1px solid #fff;
    }
  }
</style>
