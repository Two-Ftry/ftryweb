<template lang="html">
  <content-box>
    <div class="org-setting-panel">
      <menu-list></menu-list>
      <div class="org-setting-inner-panel">
        org setting
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
.org-setting-panel{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $default;
  .org-setting-inner-panel{
    height: 100%;
    margin-left: 220px;
    background-color: $white;
  }
}
</style>
