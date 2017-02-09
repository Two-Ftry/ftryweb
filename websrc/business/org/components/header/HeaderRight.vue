<template lang="html">
  <div class="header-right-box" slot="right">
    <ul>
      <li :class="{'active': $route.path == '/'}"><a href="#">首页</a></li>
      <li :class="{'active': $route.path == '/login'}">
        <router-link to="/login" >登录</router-link>
      </li>
      <li :class="{'active': $route.path == '/register'}">
        <router-link to="/register">注册</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  watch:{
    $route(to, from){
      console.log(this.$route);
    }
  },
  computed: {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="sass">
@import '../../../../common/css/var';
  .header-right-box{
    float: left;
    ul{
      list-style-type: none;
      float: left;
      li{
        float: left;
        a{
          display: block;
          padding: 0 20px;
          color: $white;
          line-height: 60px;
        }
          a:hover{
            color: $green;
          }
      }
      .active{
        a{
          color: $green;
        }
      }
    }
  }
</style>
