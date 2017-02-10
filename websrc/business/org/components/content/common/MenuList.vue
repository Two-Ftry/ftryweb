<template lang="html">
  <div class="menu-panel">
    <ul>
      <li v-for="menu in menuList">
        <!-- <router-link to="/login" >登录</router-link> -->
        <router-link :to="menu.path" :class="{'active': menu.path == $route.path}">
          <i class="ftryweb" :class="['icon-' + menu.icon]"></i>
          <span v-text="menu.name"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
var menuList = require('./menu.js');
export default {
  data() {
    return {
      menuList: menuList
    };
  },
  watch:{
    $route(to, from){

    }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="sass">
@import "../../../../../common/css/var.scss";
.menu-panel{
  position: absolute;
  width: 220px;
  padding-top: 16px;
  background-color: $default;
  a{
    display: block;
    height: 42px;
    line-height: 42px;
    color: $white;
    i{
      font-size: 22px;
      margin-left: 34px;
      vertical-align: -3px;
    }
    span{
      margin-left: 20px;
    }
  }
  a:hover, a.active{
    color: $green;
  }
}
</style>
