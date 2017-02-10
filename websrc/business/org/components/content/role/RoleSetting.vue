<template lang="html">
  <content-box>
    <div class="role-setting-panel">
      <menu-list></menu-list>
      <div class="role-setting-inner-panel">
        role setting
      </div>
    </div>
  </content-box>
</template>

<script>
import ContentBox from '../ContentBox';
import MenuList from '../common/MenuList';
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    ContentBox,
    MenuList
  }
};
</script>

<style lang="sass">
@import "../../../../../common/css/var.scss";
.role-setting-panel{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $default;
  .role-setting-inner-panel{
    height: 100%;
    margin-left: 220px;
    background-color: $white;
  }
}
</style>
