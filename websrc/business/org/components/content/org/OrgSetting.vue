<template lang="html">
  <content-box>
    <div class="org-setting-panel">
      <menu-list></menu-list>
      <div class="org-setting-inner-panel">
        <div class="org-setting-left-part">
          <ec-tree  :list="list"
                  @event-tree-click="onToLoadSubOrg"></ec-tree>
        </div>
        <div class="org-setting-right-part">
          <user-list></user-list>
        </div>
      </div>
    </div>
  </content-box>
</template>

<script>
import ContentBox from '../ContentBox';
import MenuList from '../common/MenuList';
import EcTree from 'ui/tree/EcTree';
import UserList from './UserList';
import list from './data';
export default {
  data() {
    return {
      list: list
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    onToLoadSubOrg(data){
      var id = data.data.id;
      if(!data.show){
        return;
      }

      var orgs = [];
      for(var i = 0; i < 2; i++){
        var tmp = Math.round(Math.random()*10000) + '';
        orgs.push({
          id: tmp,
          name: tmp
        });
      }
      var r = this.findOrgById(this.list, id, orgs);
      console.log(r);
    },
    findOrgById(orgList, orgId, orgs){
      for(var i = 0, len = orgList.length; i < len; i++){
        var item = orgList[i];
        if(item.id == orgId){
          if(!item.subOrgs){
            item.subOrgs = orgs;
          }
          return item;
        }
        if(item.subOrgs){
          var r = this.findOrgById(item.subOrgs, orgId, orgs);
          if(r){
            return r;
          }
        }
      }
      return null;
    }
  },
  components: {
    ContentBox,
    MenuList,
    EcTree,
    UserList
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
  .org-setting-left-part{
    float: left;
    padding-right: 18px;
    width: 250px;
    height: 100%;
    overflow: auto;
  }
  .org-setting-right-part{
    margin-left: 250px;
  }
}
</style>
