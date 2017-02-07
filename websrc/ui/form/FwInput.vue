<template lang="html">
  <div class="fw-input-box">
    <input v-if="!disabledVar" type="text"
            v-model="data.value"
            :placeholder="placeholder"
            :style="inputStyle"
            :class="[type+'-input', disabledClass]"
            />
    <input v-if="disabledVar" type="text"
                    :value="data.value"
                    :placeholder="placeholder"
                    :style="inputStyle"
                    :class="[type+'-input', disabledClass]"
                    :readonly="disabledVar?'readonly':false"
            />
    <i v-if="icon" class="ftryweb" :class="['icon-' + icon]"></i>
  </div>
</template>

<script>
export default {
  props:{
    type:{
      type: String,//primary|error|success|white
      default: 'primary'
    },
    disabled: [Boolean, String],
    icon: String,
    iconPosition:{
      type: String,
      default: 'right'
    },
    placeholder: String,
    width: String,
    data: {
      type: Object,
      default: function(){
        return {};
      }
    }
  },
  computed: {
    inputStyle(){
      let o = {};
      if(this.icon){
        o['padding-right'] = '30px';
      }
      if(this.width){
        o['width'] = this.width;
      }
      return o;
    },
    disabledVar(){
      return this.disabled == true || this.disabled == 'true' || this.disabled == 'disabled';
    },
    disabledClass(){
      if(this.disabledVar){
        return 'disabled-input';
      }else{
        return '';
      }
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
      width: 206px;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      border-radius: 4px;
      box-sizing: border-box;
      outline: none;
      font-size: 14px;
    }
    .primary-input{
      border: 2px solid #dce4ec;
    }
    .primary-input:focus, .primary-input:active,
    .white-input:focus, .white-input:active{
      border-color: #1abc9c;
    }
    .primary-input:focus + i, .primary-input:active + i,
    .white-input:focus + i, .white-input:active + i{
      color: #1abc9c;
    }
    .white-input{
      border: 2px solid #fff;
    }
    .error-input{
      border: 2px solid #e74c3c;
      color: #e74c3c;
    }
    .success-input{
      border: 2px solid #2ecc71;
      color: #2ecc71;
    }
    .disabled-input{
      background-color: #eaeded;
      border: 2px solid transparent;
      color: #cad2d3;
      cursor: default;
    }
    i{
      position: absolute;
      top: 9px;
      right: 10px;
      color: #bfc9ca;
    }
  }
</style>
