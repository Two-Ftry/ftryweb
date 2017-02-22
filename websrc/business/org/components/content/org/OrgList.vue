<template lang="html">
  <content-box>
    <div class="org-setting-panel">
      <menu-list></menu-list>
      <div class="org-list-inner-panel">
        <div class="org-ctrl-box clearfix">
          <ec-button type="primary" position="right">增加组织</ec-button>
        </div>
        <table cellpadding="0" cellspacing="0" class="org-table-list">
          <thead>
            <tr>
              <th>组织名称</th>
              <th>拥有者</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <org-list-item v-for="item in list">
            </org-list-item>
          </tbody>
        </table>
        <div class="page-container">
          <ec-page count="55"></ec-page>
        </div>
      </div>
    </div>
    <ec-model title="添加组织"
              :data="modelData"
              :btns="btns"
              hide-footer="false">
      <div class="">
        添加组织
      </div>
      <div class="" slot="footer">
        底部
      </div>
    </ec-model>
  </content-box>
</template>

<script>
import ContentBox from '../ContentBox';
import MenuList from '../common/MenuList';
import OrgListItem from './OrgListItem';
import EcModel from 'ui/model/EcModel';
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      modelData:{
        isShow: true
      },
      btns: [
        {
          text: '确定',
          type: 'success',
          callback: function(){
            //
          }
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  attached() {},
  methods: {

  },
  components: {
    ContentBox,
    MenuList,
    OrgListItem,
    EcModel
  }
};
</script>

<style lang="sass">
@import "../../../../../common/css/var.scss";
.org-list-inner-panel{
  height: 100%;
  margin-left: 220px;
  background-color: $white;
}
.org-table-list{
  width: 960px;
  margin-left: 20px;
  padding-top: 20px;
}
.empty-margin{
  height: 20px;
}
.org-ctrl-box{
  padding: 20px 0 15px;
}
.org-ctrl{
  cursor: pointer;
}
.org-ctrl-edit{
  font-size: 14px;
  color: $success;
}
.org-ctrl-edit:hover{
  color: $successHover;
}
.org-ctrl-del{
  font-size: 18px;
  margin-left: 2px;
  color: $danger;
}
.org-ctrl-del:hover{
  color: $dangerHover;
}
.page-container{
  margin-top: 20px;
}
</style>
