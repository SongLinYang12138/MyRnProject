/**
 * Created by ysl on 2017/9/29.
 * 存储key
 */

module.exports = {


    loginInfo:"LoginInfo",//httpUrl  isRember  account password isLogin  clientStamp,uuid 登录信息

    NetDept:'NetDept',//数组对象{RowId:1  ,NetDeptId:'', NetDeptName:'', Area:''}网点信息
    encrypting:"SanFang",//密码加密存储
    netDeptContact:'netDeptInfos',//网点联系人
    peopleContact:'peopleInfos',//通讯录联系人
    userInfo:'userInfo',//个人信息,
    AreaInfo:'AreaInfo',//地区信息{RowId:1  ,RowId:'', AreaName:''}地区信息
    DistinctionInfo:'distinction',// code:'',//区别码 index:'',//流水号起始值 mode:'0'//流水号区别码 0循环累计 1 按天累计

}