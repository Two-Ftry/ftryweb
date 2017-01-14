<template lang="html">
  <div class="footer-box">
    <div class="footer-innerbox">
      <p>&copy;ftry company</p>
    </div>
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
  @import "../../../../common/css/var.scss";
.footer-box{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $white;
  border-top: 1px solid #ccc;
  box-shadow: 0 -1px 1px #ccc;
  .footer-innerbox{
    width: $boxWidth;
    margin: 0 auto;
    padding: 25px 0;
    p{
      text-align: center;
    }
  }
}
</style>
