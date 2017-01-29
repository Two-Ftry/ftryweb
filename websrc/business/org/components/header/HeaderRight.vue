<template lang="html">
  <div class="header-right-box" slot="right">
    <ul>
      <li class="active"><a href="#">首页</a></li>
      <li><a href="#">登录</a></li>
      <li>
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
