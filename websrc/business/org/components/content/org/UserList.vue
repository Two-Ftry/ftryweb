<template lang="html">
  <div class="user-list-box">
    <table cellpadding="0" cellspacing="0" class="user-table-list">
      <thead>
        <tr>
          <th>姓名</th>
          <th>手机</th>
          <th>邮箱</th>
          <th>部门</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>姓名</td>
          <td>手机</td>
          <td>邮箱</td>
          <td>部门</td>
          <td>
            <i class="ftryweb icon-bianji-copy user-ctrl user-ctrl-edit"></i>
            <i class="ftryweb icon-yidong user-ctrl user-ctrl-move" ></i>
            <i class="ftryweb icon-shanchu user-ctrl user-ctrl-del"></i>
          </td>
        </tr>
        <tr>
          <td>姓名</td>
          <td>手机</td>
          <td>邮箱</td>
          <td>部门</td>
          <td>
            <i class="ftryweb icon-bianji-copy user-ctrl user-ctrl-edit"></i>
            <i class="ftryweb icon-yidong user-ctrl user-ctrl-move" ></i>
            <i class="ftryweb icon-shanchu user-ctrl user-ctrl-del"></i>
          </td>
        </tr>
        <tr>
          <td>姓名</td>
          <td>手机</td>
          <td>邮箱</td>
          <td>部门</td>
          <td>
            <i class="ftryweb icon-bianji-copy user-ctrl user-ctrl-edit"></i>
            <i class="ftryweb icon-yidong user-ctrl user-ctrl-move" ></i>
            <i class="ftryweb icon-shanchu user-ctrl user-ctrl-del"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="sass">
@import "../../../../../common/css/var.scss";
.user-list-box{
  padding-top: 20px;
}
.user-table-list{
  width: 700px;
}
.user-ctrl{
  cursor: pointer;
}
.user-ctrl-edit{
  font-size: 14px;
  color: $success;
}
.user-ctrl-edit:hover{
  color: $successHover;
}
.user-ctrl-move{
  color: $info;
  margin-left: 5px;
  font-size: 14px;
  vertical-align: 1px;
}
.user-ctrl-move:hover{
  color: $infoHover;
}
.user-ctrl-del{
  font-size: 18px;
  margin-left: 2px;
  color: $danger;
}
.user-ctrl-del:hover{
  color: $dangerHover;
}
</style>
